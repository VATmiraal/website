<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { dev } from '$app/environment';
	import { tick, type Snippet } from 'svelte';
	import Button from '$lib/components/Button.svelte';

	interface IFormspreeFormProps {
		/** Value for the hidden `_subject` field, so Formspree labels each form. */
		subject: string;
		/** Formspree endpoint; defaults to the shared VATmiraal form. */
		endpoint?: string;
		/** Popup heading shown on a successful submission. */
		successTitle: string;
		/** Popup body shown on a successful submission. */
		successMessage: string;
		/** Route the popup's close button navigates to. */
		redirectTo?: string;
		/** Label for the popup's close button. */
		backLabel?: string;
		/** Optional data-testid on the form element. */
		testid?: string;
		/** The form fields and submit button. */
		children: Snippet;
	}

	let {
		subject,
		endpoint = 'https://formspree.io/f/mreagrzq',
		successTitle,
		successMessage,
		redirectTo = '/',
		backLabel = 'Back to Home',
		testid,
		children
	}: IFormspreeFormProps = $props();

	const ENDPOINT = $derived(endpoint);

	let showPopup = $state(false);
	let popupTitle = $state('');
	let popupMessage = $state('');

	let popupEl: HTMLDivElement | undefined = $state();
	let previouslyFocused: HTMLElement | null = null;

	async function openPopup(title: string, message: string) {
		previouslyFocused = document.activeElement as HTMLElement | null;
		popupTitle = title;
		popupMessage = message;
		showPopup = true;
		await tick();
		popupEl?.focus();
	}

	function closePopup() {
		showPopup = false;
		previouslyFocused?.focus?.();
		goto(resolve(redirectTo as '/'));
	}

	function onPopupKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closePopup();
			return;
		}
		if (event.key !== 'Tab' || !popupEl) return;
		const focusables = popupEl.querySelectorAll<HTMLElement>(
			'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
		);
		if (focusables.length === 0) return;
		const first = focusables[0];
		const last = focusables[focusables.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		if (dev) {
			await openPopup(
				`${successTitle} (Dev Mode)`,
				'Form submission skipped in development. In production, this request would be sent.'
			);
			return;
		}

		try {
			const resp = await fetch(ENDPOINT, {
				method: 'POST',
				body: formData,
				headers: { Accept: 'application/json' }
			});

			if (resp.ok) {
				await openPopup(successTitle, successMessage);
			} else {
				console.error(
					`there was an error sending data to the form: ${JSON.stringify(await resp.json(), null, 2)}`
				);
				await openPopup(
					'Oops!',
					'Something went wrong. Please try again later or contact us at info@vatmiraal.be'
				);
			}
		} catch (e: unknown) {
			console.error(`there was an error sending data to the form: ${e}`);
			await openPopup(
				'Oops!',
				'Something went wrong. Please try again later or contact us at info@vatmiraal.be'
			);
		}
	}
</script>

<form action={ENDPOINT} method="POST" data-testid={testid} onsubmit={handleSubmit}>
	<input type="hidden" name="_subject" value={subject} />
	{@render children()}
</form>

{#if showPopup}
	<div class="overlay" data-testid="popup" onclick={closePopup} role="presentation">
		<div
			bind:this={popupEl}
			class="popup"
			role="dialog"
			aria-modal="true"
			aria-labelledby="popup-title"
			tabindex="-1"
			onkeydown={onPopupKeydown}
			onclick={(e) => e.stopPropagation()}
		>
			<h2 id="popup-title">{popupTitle}</h2>
			<p>{popupMessage}</p>
			<Button onclick={closePopup} variant="primary">{backLabel}</Button>
		</div>
	</div>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		width: 100%;
	}

	form :global(.submit-wrap) {
		display: flex;
		justify-content: center;
		margin-top: var(--space-3);
	}

	/* Shared field styles, scoped to forms rendered through this component.
	   `:global` reaches the slotted fields the page declares. */
	form :global(.form-group) {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	form :global(.form-group label),
	form :global(.consent-label) {
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-base);
		color: var(--color-text);
	}

	form :global(.form-group input),
	form :global(.form-group select),
	form :global(.form-group textarea) {
		font-family: var(--font-family);
		font-size: var(--font-size-base);
		padding: 0.75em 1em;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-md);
		background: var(--color-bg-elevated);
		color: var(--color-text);
		outline: none;
		transition:
			border-color var(--duration-base) var(--easing),
			box-shadow var(--duration-base) var(--easing);
	}

	form :global(.form-group textarea) {
		resize: vertical;
		line-height: var(--line-height-base);
	}

	form :global(.form-group input:focus),
	form :global(.form-group select:focus),
	form :global(.form-group textarea:focus) {
		border-color: var(--color-accent);
		box-shadow: 0 0 0 3px var(--color-accent-tint);
	}

	form :global(.form-group input::placeholder),
	form :global(.form-group textarea::placeholder) {
		color: var(--color-text-faint);
	}

	form :global(.form-group select) {
		cursor: pointer;
		appearance: none;
		background-image: url('/chevron-down.svg');
		background-repeat: no-repeat;
		background-position: right 1em center;
		background-size: 12px 12px;
	}

	form :global(.consent) {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
	}

	form :global(.consent input) {
		margin-top: 0.15em;
		width: 1.1em;
		height: 1.1em;
		flex-shrink: 0;
		accent-color: var(--color-accent);
		cursor: pointer;
	}

	form :global(.consent a) {
		color: var(--color-accent);
		text-decoration: underline;
	}

	/* ─── Popup ─── */
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(15, 15, 15, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: var(--z-overlay);
		padding: var(--space-4);
	}

	.popup {
		background: var(--color-bg-elevated);
		padding: var(--space-10);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-xl);
		text-align: center;
		max-width: 420px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		align-items: center;
	}

	.popup h2 {
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		margin: 0;
	}

	.popup p {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
		margin: 0 0 var(--space-2);
		color: var(--color-text-muted);
	}

	@media (max-width: 768px) {
		.popup {
			padding: var(--space-8);
		}
	}
</style>
