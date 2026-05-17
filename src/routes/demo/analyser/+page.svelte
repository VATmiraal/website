<script lang="ts">
	import { resolve } from '$app/paths';
	import { tick } from 'svelte';
	import { onMount, onDestroy } from 'svelte';
	import { VatAnalyser } from '@vatmiraal/vat-analyzer';
	import type { ExportPayload } from '@vatmiraal/vat-analyzer';
	import ShareBar from '$lib/components/ShareBar.svelte';

	const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

	let data = $state<ExportPayload | null>(null);
	let loadError = $state<string | null>(null);

	let showPopup = $state(false);
	let popupEl: HTMLDivElement | undefined = $state();
	let previouslyFocused: HTMLElement | null = null;
	let timerId: ReturnType<typeof setTimeout> | null = null;

	async function openPopup() {
		previouslyFocused = document.activeElement as HTMLElement | null;
		showPopup = true;
		await tick();
		popupEl?.focus();
	}

	function closePopup() {
		showPopup = false;
		previouslyFocused?.focus?.();
	}

	function onPopupKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closePopup();
			return;
		}
		if (event.key !== 'Tab' || !popupEl) return;
		const focusables = popupEl.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
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

	onMount(async () => {
		try {
			const resp = await fetch('/data/vatmiraal-demo-data.json');
			if (!resp.ok) throw new Error('Failed to load demo data');
			data = await resp.json();
		} catch (e) {
			loadError = e instanceof Error ? e.message : String(e);
		}

		timerId = setTimeout(() => {
			openPopup();
		}, 60_000);
	});

	onDestroy(() => {
		if (timerId) clearTimeout(timerId);
	});
</script>

<svelte:head>
	<title>VAT Analyser — VATmiraal Demo</title>
	<meta
		name="description"
		content="Interactive VAT analyser demo. Select a ledger entry and see the full VAT determination with legal references."
	/>
</svelte:head>

<div id="analyser-page">
	<div class="desktop-only" data-testid="desktop-only">
		<div class="page-toolbar">
			<ShareBar
				title="VATmiraal VAT Analyser Demo"
				url="https://vatmiraal.be/demo/analyser"
				layout="vertical"
			/>
			<a href={resolve('/request_a_demo')} class="toolbar-cta" data-testid="book-call-btn">
				Book a call
			</a>
		</div>
	</div>
	<div class="page-widget">
		{#if loadError}
			<div class="state-msg">
				<h1>Something went wrong</h1>
				<p>{loadError}</p>
				<a href={resolve('/demo')}>Return to demo overview</a>
			</div>
		{:else if data}
			<div class="desktop-only">
				<div id="widget-wrap">
					<VatAnalyser
						{data}
						whatIfContactHref={resolve('/request_a_demo')}
						partyRegistryContactHref={resolve('/request_a_demo')}
					/>
				</div>
			</div>
			<div class="mobile-message" data-testid="mobile-message">
				<div class="mobile-message-content">
					<h2>Desktop Only</h2>
					<p>
						This demo is optimized for desktop. Please visit on a larger screen to explore the
						VAT Analyser.
					</p>
					<a href={resolve('/demo')} class="mobile-back-link">← Back to demo overview</a>
				</div>
			</div>
		{:else}
			<div class="state-msg">
				<p class="loading-text">Loading demo data&hellip;</p>
			</div>
		{/if}
	</div>
</div>

{#if showPopup}
	<div class="overlay" data-testid="booking-popup" onclick={closePopup}>
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
			<h2 id="popup-title">Interested to try VATmiraal in your business ?</h2>
			<p>
				Book a free call with our team to discuss how it fits your workflow, or
				<a href={resolve('/products')}>explore our products</a> and
				<a href={resolve('/custom_solutions')}>custom solutions</a>.
			</p>
			<div class="popup-actions">
				<a href={resolve('/request_a_demo')} class="popup-cta">Book a free call</a>
				<button class="popup-dismiss" onclick={closePopup}>Continue exploring</button>
			</div>
		</div>
	</div>
{/if}

<style>
	#analyser-page {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - var(--header-total-height));
	}

	.page-widget {
		margin-top: -30vh;
	}
	.page-toolbar {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 2rem 4rem 0rem;
	}

	.toolbar-cta {
		display: inline-flex;
		align-items: center;
		align-self: flex-start;
		margin-top: 3vh;
		padding: 0.55em 1.6em;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-semibold);
		font-family: var(--font-family);
		text-decoration: none;
		color: var(--color-text-on-dark);
		background: var(--color-bg-inverted);
		border-radius: var(--radius-md);
		transition:
			background var(--duration-base) var(--easing),
			transform var(--duration-base) var(--easing),
			box-shadow var(--duration-base) var(--easing);
	}

	.toolbar-cta:hover {
		background: var(--color-accent);
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	#widget-wrap {
		flex: 1;
	}

	.desktop-only {
		display: block;
	}

	.desktop-only .page-toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 1.5rem 0.25rem;
	}

	.mobile-message {
		display: none;
	}

	.state-msg {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 6rem 2rem;
		text-align: center;
		gap: var(--space-4);
	}

	.state-msg h1 {
		font-size: var(--h1-secondary);
		font-weight: var(--font-weight-heavy);
		margin: 0;
	}

	.state-msg p {
		color: var(--color-text-muted);
		font-size: var(--font-size-md);
		margin: 0;
	}

	.state-msg a {
		color: var(--color-accent);
		font-weight: var(--font-weight-semibold);
	}

	.loading-text {
		color: var(--color-text-muted);
		font-size: var(--font-size-md);
	}

	/* Popup */
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(15, 15, 15, 0.45);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: var(--z-overlay);
		padding: 1rem;
		animation: overlay-in 200ms ease-out;
	}

	.popup {
		background: var(--color-bg-elevated);
		padding: 2.5rem;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-xl);
		text-align: center;
		max-width: 480px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		align-items: center;
		animation: popup-in 250ms ease-out;
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
		margin: 0;
	}

	.popup p a {
		color: var(--color-accent);
		font-weight: var(--font-weight-semibold);
	}

	.popup-actions {
		display: flex;
		gap: var(--space-3);
		margin-top: var(--space-2);
	}

	.popup-cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.6em 1.5em;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-semibold);
		font-family: var(--font-family);
		text-decoration: none;
		color: var(--color-text-on-dark);
		background: var(--color-accent);
		border-radius: var(--radius-md);
		transition:
			background var(--duration-base) var(--easing),
			transform var(--duration-base) var(--easing);
	}

	.popup-cta:hover {
		background: var(--color-accent-hover);
		transform: translateY(-1px);
	}

	.popup-dismiss {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.6em 1.5em;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-semibold);
		font-family: var(--font-family);
		color: var(--color-text-muted);
		background: transparent;
		border: none;
		border-radius: var(--radius-md);
		cursor: pointer;
		transition: color var(--duration-base) var(--easing);
	}

	.popup-dismiss:hover {
		color: var(--color-text);
	}

	@keyframes overlay-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes popup-in {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.page-toolbar {
			padding: 1rem var(--section-padding-x-mobile);
			flex-direction: column;
			gap: 1rem;
			align-items: flex-start;
		}

		.toolbar-cta {
			order: -1;
		}

		.popup {
			padding: 2rem 1.5rem;
		}

		.popup-actions {
			flex-direction: column;
			width: 100%;
		}

		.desktop-only {
			display: none;
		}

		.mobile-message {
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: calc(100vh - var(--header-total-height));
			padding: 2rem;
			text-align: center;
		}

		.mobile-message-content {
			max-width: 320px;
		}

		.mobile-message h2 {
			font-size: var(--font-size-xl);
			font-weight: var(--font-weight-heavy);
			margin: 0 0 var(--space-4);
		}

		.mobile-message p {
			color: var(--color-text-muted);
			font-size: var(--font-size-base);
			line-height: var(--line-height-base);
			margin: 0 0 var(--space-6);
		}

		.mobile-back-link {
			color: var(--color-accent);
			font-weight: var(--font-weight-semibold);
			text-decoration: none;
		}
	}
</style>
