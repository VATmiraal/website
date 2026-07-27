<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import ShareBar from '$lib/components/ShareBar.svelte';
	import WalkthroughStep from '$lib/components/WalkthroughStep.svelte';

	interface IStepItem {
		index: string;
		title: string;
		body: string;
		image: string;
		alt: string;
	}

	type Mode = 'journal' | 'transaction';

	const journalSteps: IStepItem[] = [
		{
			index: '01',
			title: 'Upload ledger',
			body: 'Start with a CSV export from any accounting system.',
			image: '/images/general_ledger_analyzer/home.png',
			alt: 'Upload step of the Journal Analyzer, ready to accept a CSV file.'
		},
		{
			index: '02',
			title: 'Party definition',
			body: 'Enter each counterparty once, country, type, status, and reuse them across every future ledger.',
			image: '/images/general_ledger_analyzer/party_definition.png',
			alt: 'Party definition screen with customer and supplier cards, each carrying country, type, and properties.'
		},
		{
			index: '03',
			title: 'Validate ledger',
			body: 'Walk each row. Classify the transaction type and object.',
			image: '/images/general_ledger_analyzer/transaction_validation.png',
			alt: 'Ledger validation table with per-row transaction type and object classifications.'
		},
		{
			index: '04',
			title: 'Transport description',
			body: 'Define each delivery: the from, the to, and whether you hold proof.',
			image: '/images/general_ledger_analyzer/transport_description.png',
			alt: 'Transport description table with origin, destination, and proof fields for each delivery.'
		},
		{
			index: '05',
			title: 'Analysis results',
			body: 'Every booking returns its VAT grids, taxable and VAT amounts, and the Belgian legal article behind each decision.',
			image: '/images/general_ledger_analyzer/result.png',
			alt: 'Analysis results with VAT grids, taxable amounts, and the Belgian legal basis per booking.'
		}
	];

	const transactionSteps: IStepItem[] = [
		{
			index: '01',
			title: 'Define parties',
			body: 'Add each counterparty once, country, type, status, and reuse them across every analysis. Optional, skip straight to the transaction if you prefer.',
			image: '/images/transaction_analyzer/parties.png',
			alt: 'Party management screen with customer and supplier cards, each carrying country, type, and properties.'
		},
		{
			index: '02',
			title: 'Define transaction',
			body: 'Describe the single transaction: what moved, between whom, and whether you hold proof.',
			image: '/images/transaction_analyzer/transaction.png',
			alt: 'Single transaction definition form with party, object, and proof fields.'
		},
		{
			index: '03',
			title: 'Result',
			body: 'Get the cited VAT grids, taxable and VAT amounts, and the Belgian legal article behind the call.',
			image: '/images/transaction_analyzer/result.png',
			alt: 'Analysis result with VAT grids, taxable amounts, and the Belgian legal basis for the transaction.'
		}
	];

	let activeMode = $state<Mode>('journal');
	let journalTab: HTMLButtonElement | undefined;
	let transactionTab: HTMLButtonElement | undefined;

	function onTabKeydown(event: KeyboardEvent) {
		if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
		event.preventDefault();
		activeMode = activeMode === 'journal' ? 'transaction' : 'journal';
		(activeMode === 'journal' ? journalTab : transactionTab)?.focus();
	}
</script>

<svelte:head>
	<title>VATmiraal Platform — VATmiraal</title>
	<meta
		name="description"
		content="The VATmiraal Platform. Cited, defensible VAT analysis in two modes: import a full journal as CSV, or analyse a single transaction on its own."
	/>
</svelte:head>

{#snippet walkthrough(steps: IStepItem[], prefix: string, label: string)}
	<nav class="mini-stepper" aria-label={label}>
		<ol style="grid-template-columns: repeat({steps.length}, 1fr)">
			{#each steps as step, i (step.index)}
				<li>
					<a href={`#${prefix}-${step.index}`}>
						<span class="mini-dot">{step.index}</span>
						<span class="mini-label">{step.title}</span>
					</a>
					{#if i < steps.length - 1}
						<span class="mini-rule" aria-hidden="true"></span>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>

	<ol class="steps">
		{#each steps as step, i (step.index)}
			<WalkthroughStep {...step} anchor={`${prefix}-${step.index}`} reverse={i % 2 === 1} />
		{/each}
	</ol>
{/snippet}

<div id="page">
	<section id="hero">
		<SectionHeader
			kicker="AVAILABLE NOW · VAT COMPLIANCE"
			level="h1"
			title="The VATmiraal Platform."
			subtitle="Cited, defensible VAT analysis in two modes. Import a full journal as CSV, or analyse a single transaction on its own."
		/>
		<div class="hero-buttons">
			<Button href={resolve('/request_a_demo')} variant="primary">Request a demo</Button>
			<Button href="#modes" variant="ghost">See the two modes ↓</Button>
		</div>
		<div class="hero-share">
			<ShareBar
				title="VATmiraal Platform"
				url={page.url.toString()}
				label="Share this product"
				compact={true}
			/>
		</div>
	</section>

	<section id="modes" aria-labelledby="modes-heading">
		<div class="modes-head">
			<h2 id="modes-heading" class="modes-title">
				One platform, <span class="modes-title-accent">two modes</span>
			</h2>
			<div class="mode-cards" data-active={activeMode} role="tablist" aria-label="Analysis mode">
				<span class="mode-cards-frame" aria-hidden="true"></span>
				<button
					bind:this={journalTab}
					type="button"
					role="tab"
					id="tab-journal"
					aria-selected={activeMode === 'journal'}
					aria-controls="panel-journal"
					tabindex={activeMode === 'journal' ? 0 : -1}
					class="mode-card"
					onclick={() => (activeMode = 'journal')}
					onkeydown={onTabKeydown}
				>
					<span class="mode-card-index">01</span>
					<span class="mode-card-title">Journal Analyzer</span>
					<span class="mode-card-desc">Import a full journal as CSV.</span>
					<span class="mode-card-state">{activeMode === 'journal' ? 'Selected' : 'Select'}</span>
				</button>
				<button
					bind:this={transactionTab}
					type="button"
					role="tab"
					id="tab-transaction"
					aria-selected={activeMode === 'transaction'}
					aria-controls="panel-transaction"
					tabindex={activeMode === 'transaction' ? 0 : -1}
					class="mode-card"
					onclick={() => (activeMode = 'transaction')}
					onkeydown={onTabKeydown}
				>
					<span class="mode-card-index">02</span>
					<span class="mode-card-title">Transaction Analyzer</span>
					<span class="mode-card-desc">Analyse one transaction on its own.</span>
					<span class="mode-card-state">{activeMode === 'transaction' ? 'Selected' : 'Select'}</span
					>
				</button>
			</div>
		</div>

		<div class="mode-stage">
			{#key activeMode}
				<div
					class="mode-panel"
					role="tabpanel"
					id={`panel-${activeMode}`}
					aria-labelledby={`tab-${activeMode}`}
				>
					{#if activeMode === 'journal'}
						<SectionHeader
							kicker="A full ledger, line by line"
							title="From journal to VAT grids, with the legal article attached."
							subtitle="Import a journal as CSV. Get a structured, line-by-line VAT grid analysis, then test alternatives before you post."
						/>
						{@render walkthrough(journalSteps, 'journal', 'Journal Analyzer steps')}

						<div class="exploration">
							<div class="exploration-copy">
								<span class="exploration-kicker">EXPLORATION</span>
								<h2>Probe before you commit.</h2>
								<p>
									Result not what you expected? Override the fields in doubt to see what you missed
									or what contradicts. Wondering if a more precise fact would matter? Change it in
									place, and see if the call moves before you chase the source.
								</p>
							</div>
							<div class="exploration-image">
								<img
									src="/images/general_ledger_analyzer/explore.png"
									alt="Exploration view comparing the original analysis with a what-if variant side by side, plus an amend panel."
								/>
							</div>
						</div>
					{:else}
						<SectionHeader
							kicker="One transaction, deep analysis"
							title="One transaction, the full cited VAT call."
							subtitle="Analyse a single transaction on its own. Define the parties, define the transaction, get the grids with the legal basis attached."
						/>
						{@render walkthrough(transactionSteps, 'transaction', 'Transaction Analyzer steps')}
					{/if}
				</div>
			{/key}
		</div>
	</section>
</div>

<section id="cta-dark">
	<div class="cta-dark-inner">
		<SectionHeader level="h2" title="Want to run your books through it?" tone="dark" />
		<Button href="mailto:info@vatmiraal.be" variant="primary" tone="dark" size="lg">
			Request a demo
		</Button>
	</div>
</section>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		gap: var(--space-24);
		max-width: var(--container-wide);
		margin: 0 auto;
		box-sizing: border-box;
	}

	#hero {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-10);
	}

	.hero-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		justify-content: center;
	}

	.hero-share {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	/* Modes */
	#modes {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-16);
		padding-top: var(--space-12);
		border-top: 1px solid var(--color-border);
		scroll-margin-top: calc(var(--header-total-height) + var(--space-6));
	}

	.modes-head {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-8);
	}

	.modes-title {
		margin: 0;
		font-size: var(--h1-secondary);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
		color: var(--color-text);
		text-align: center;
	}

	.modes-title-accent {
		color: var(--color-accent);
	}

	/* Mode cards: a navy frame slides to the active card (mirrors the platform home) */
	.mode-cards {
		--frame-gap: var(--space-6);
		position: relative;
		width: 100%;
		max-width: var(--container-medium);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--frame-gap);
	}

	.mode-cards-frame {
		box-sizing: border-box;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: calc(50% - var(--frame-gap) / 2);
		border: 2px solid var(--color-accent);
		border-radius: var(--radius-lg);
		pointer-events: none;
		transition: transform var(--duration-base) var(--easing);
	}

	.mode-cards[data-active='transaction'] .mode-cards-frame {
		transform: translateX(calc(100% + var(--frame-gap)));
	}

	.mode-card {
		box-sizing: border-box;
		appearance: none;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-2);
		text-align: left;
		min-height: 11rem;
		padding: var(--space-6);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background: var(--color-bg);
		color: inherit;
		transition: border-color var(--duration-base) var(--easing);
	}

	.mode-card:not([aria-selected='true']):hover {
		border-color: var(--color-border-strong);
	}

	.mode-card[aria-selected='true'] {
		border-color: var(--color-accent);
	}

	.mode-card:focus-visible {
		outline: 2px solid var(--color-focus-ring);
		outline-offset: 3px;
	}

	.mode-card-index {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-xs);
		letter-spacing: var(--letter-spacing-wide);
		color: var(--color-text-faint);
	}

	.mode-card-title {
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		color: var(--color-text);
	}

	.mode-card-desc {
		font-size: var(--font-size-base);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.mode-card-state {
		margin-top: auto;
		font-family: var(--font-family-mono);
		font-size: var(--font-size-xs);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
		transition: color var(--duration-base) var(--easing);
	}

	.mode-card[aria-selected='true'] .mode-card-state {
		color: var(--color-accent);
	}

	/* Panel */
	.mode-stage {
		width: 100%;
	}

	.mode-panel {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-16);
		animation: panel-in var(--duration-base) var(--easing);
	}

	@keyframes panel-in {
		from {
			opacity: 0;
			transform: translateY(var(--space-3));
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.mini-stepper {
		width: 100%;
		max-width: var(--container-medium);
	}

	.mini-stepper ol {
		display: grid;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.mini-stepper li {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
	}

	.mini-stepper a {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
		text-decoration: none;
		color: inherit;
		padding: var(--space-2);
		border-radius: var(--radius-md);
		transition: color var(--duration-base) var(--easing);
	}

	.mini-stepper a:hover .mini-dot,
	.mini-stepper a:focus-visible .mini-dot {
		border-color: var(--color-accent);
		color: var(--color-accent);
	}

	.mini-stepper a:hover .mini-label,
	.mini-stepper a:focus-visible .mini-label {
		color: var(--color-text);
	}

	.mini-dot {
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--color-border-strong);
		border-radius: 50%;
		display: grid;
		place-items: center;
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--letter-spacing-wide);
		color: var(--color-text-faint);
		background: var(--color-bg);
		font-variant-numeric: tabular-nums;
		transition:
			border-color var(--duration-base) var(--easing),
			color var(--duration-base) var(--easing);
	}

	.mini-label {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
		text-align: center;
		line-height: 1.3;
		transition: color var(--duration-base) var(--easing);
	}

	.mini-rule {
		position: absolute;
		top: calc(var(--space-2) + 1.25rem);
		left: calc(50% + 1.25rem + var(--space-2));
		right: calc(-50% + 1.25rem + var(--space-2));
		height: 1px;
		background: var(--color-border);
	}

	/* Steps */
	.steps {
		width: 100%;
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-24);
	}

	/* Exploration */
	.exploration {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-12);
		padding-top: var(--space-12);
		border-top: 1px solid var(--color-border);
	}

	.exploration-copy {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-4);
		max-width: var(--container-narrow);
	}

	.exploration-kicker {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.exploration-copy h2 {
		margin: 0;
		font-size: var(--h2-section);
		font-weight: var(--font-weight-heavy);
		line-height: var(--line-height-tight);
		letter-spacing: var(--letter-spacing-tight);
		color: var(--color-text);
	}

	.exploration-copy p {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		max-width: 42rem;
	}

	.exploration-image {
		width: 100%;
	}

	.exploration-image img {
		display: block;
		width: 100%;
		height: auto;
	}

	/* Benefits */
	#benefits {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-12);
		padding-top: var(--space-12);
		border-top: 1px solid var(--color-border);
	}

	/* Dark CTA */
	#cta-dark {
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
		padding: var(--space-20) var(--section-padding-x);
	}

	.cta-dark-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-8);
		max-width: var(--container-medium);
		margin: 0 auto;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.mini-stepper {
			display: none;
		}

		.steps {
			gap: var(--space-16);
		}
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile) var(--space-16);
			gap: var(--space-16);
		}

		.mode-cards {
			grid-template-columns: 1fr;
		}

		.mode-cards-frame {
			display: none;
		}

		.mode-card {
			min-height: auto;
		}

		#cta-dark {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
		}
	}
</style>
