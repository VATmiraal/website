<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { dev } from '$app/environment';
	import { tick } from 'svelte';
	import Button from '$lib/components/Button.svelte';

	let { data }: { data?: { devMode: boolean } } = $props();

	let showPopup = $state(false);
	let popupTitle = $state('Thank You!');
	let popupMessage = $state("Your demo request is in. We'll reach out shortly to schedule a call.");

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
		goto(resolve('/'));
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

		if (data?.devMode ?? dev) {
			await openPopup(
				'Thank You! (Dev Mode)',
				'Form submission skipped in development. In production, your demo request would be sent.'
			);
			return;
		}

		try {
			const resp = await fetch('https://formspree.io/f/mreagrzq', {
				method: form.method,
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			});

			if (resp.ok) {
				await openPopup(
					'Thank You!',
					"Your demo request is in. We'll reach out shortly to schedule a call."
				);
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

<svelte:head>
	<title>Request a demo — VATmiraal</title>
	<meta
		name="description"
		content="Request a personalised demo of VATmiraal's VAT rules engine. Book a call with our team to see it applied to your real cases."
	/>
</svelte:head>

<div id="page">
	<h1>Request a demo</h1>
	<p id="subtitle">
		See VATmiraal applied to your own VAT cases, with our team walking you through the rules engine.
	</p>

	<form
		id="demo-form"
		data-testid="demo-form"
		action="https://formspree.io/f/mreagrzq"
		method="POST"
		onsubmit={handleSubmit}
	>
		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" placeholder="your.email@company.com" required />
		</div>

		<div class="form-group">
			<label for="company">Company</label>
			<input type="text" id="company" name="company" placeholder="Company Name" required />
		</div>

		<div class="form-group">
			<label for="role">Role</label>
			<select id="role" name="role" required>
				<option value="">Select your role</option>
				<option value="tax-advisor">Tax Advisor</option>
				<option value="accountant">Accountant</option>
				<option value="lawyer">Lawyer</option>
				<option value="business-owner">Business Owner</option>
				<option value="finance-manager">Finance Manager</option>
				<option value="other">Other</option>
			</select>
		</div>

		<div class="submit-wrap">
			<Button type="submit" variant="primary" size="lg">Request a demo</Button>
		</div>
	</form>
</div>

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
			<Button onclick={closePopup} variant="primary">Back to Home</Button>
		</div>
	</div>
{/if}

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-16) var(--section-padding-x) var(--space-20);
		min-height: calc(100vh - var(--header-total-height));
		box-sizing: border-box;
	}

	h1 {
		font-size: var(--h1-secondary);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
		text-align: center;
		margin: 0 0 var(--space-3);
	}

	#subtitle {
		font-size: var(--font-size-md);
		color: var(--color-text-muted);
		text-align: center;
		margin: 0 0 var(--space-12);
		max-width: 560px;
	}

	#demo-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		width: 100%;
		max-width: 440px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	label {
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-base);
		color: var(--color-text);
	}

	input,
	select {
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

	input:focus,
	select:focus {
		border-color: var(--color-accent);
		box-shadow: 0 0 0 3px var(--color-accent-tint);
	}

	input::placeholder {
		color: var(--color-text-faint);
	}

	select {
		cursor: pointer;
		appearance: none;
		background-image: url('/chevron-down.svg');
		background-repeat: no-repeat;
		background-position: right 1em center;
		background-size: 12px 12px;
	}

	.submit-wrap {
		display: flex;
		justify-content: center;
		margin-top: var(--space-3);
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
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--space-12) var(--section-padding-x-mobile) var(--space-16);
		}

		#subtitle {
			margin-bottom: var(--space-8);
		}

		.popup {
			padding: var(--space-8);
		}
	}
</style>
