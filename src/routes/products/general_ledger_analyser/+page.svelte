<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import WalkthroughStep from '$lib/components/WalkthroughStep.svelte';

	interface IStepItem {
		index: string;
		title: string;
		body: string;
		image: string;
		alt: string;
	}

	interface IBenefit {
		title: string;
		body: string;
	}

	const steps: IStepItem[] = [
		{
			index: '01',
			title: 'Upload ledger',
			body: 'Start with a CSV export from any accounting system.',
			image: '/images/general_ledger_analyzer/home.png',
			alt: 'Upload step of the Ledger Analyser, ready to accept a CSV file.'
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
			body: 'Every booking returns its VAT boxes, taxable and VAT amounts, and the Belgian legal article behind each decision.',
			image: '/images/general_ledger_analyzer/result.png',
			alt: 'Analysis results with VAT boxes, taxable amounts, and the Belgian legal basis per booking.'
		}
	];

	const benefits: IBenefit[] = [
		{
			title: 'Cited',
			body: 'Every line ties back to a specific article. Not a confident guess from an LLM.'
		},
		{
			title: 'Beyond Belgium',
			body: 'Belgium live today. Same rule engine, same contract for the rest of the EU as we roll out.'
		},
		{
			title: 'Defensible',
			body: 'If the auditor asks, you already have the paragraph.'
		}
	];
</script>

<svelte:head>
	<title>General Ledger Analyser — VATmiraal</title>
	<meta
		name="description"
		content="Turn a raw CSV ledger into cited, defensible VAT analysis. Upload, classify, explore alternatives, export the boxes."
	/>
</svelte:head>

<div id="page">
	<section id="hero">
		<SectionHeader
			kicker="AVAILABLE NOW · VAT COMPLIANCE"
			level="h1"
			title="From ledger extract to VAT boxes, with the legal article attached."
			subtitle="Drop in a ledger extract. Get cited VAT boxes with the legal reasoning, then test alternatives before you post."
		/>
		<div class="hero-actions">
			<Button href={resolve('/request_a_demo')} variant="primary">Request a demo</Button>
			<Button href="#walkthrough" variant="ghost">See the five steps →</Button>
		</div>
		<div class="hero-image">
			<img
				src="/images/general_ledger_analyzer/home.png"
				alt="VATmiraal Ledger Analyser home screen with its five-step progress indicator."
			/>
		</div>
	</section>

	<section id="walkthrough" aria-labelledby="walkthrough-heading">
		<SectionHeader
			kicker="HOW IT WORKS"
			title="Five steps from ledger to analysis."
			subtitle="Upload a CSV, answer a few definition questions, get a line-by-line review."
		/>

		<nav class="mini-stepper" aria-label="Walkthrough steps">
			<ol>
				{#each steps as step, i (step.index)}
					<li>
						<a href={`#step-${step.index}`}>
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
				<WalkthroughStep {...step} reverse={i % 2 === 1} />
			{/each}
		</ol>
	</section>

	<section id="exploration" aria-labelledby="exploration-heading">
		<div class="exploration-copy">
			<span class="exploration-kicker">EXPLORATION</span>
			<h2 id="exploration-heading">Probe before you commit.</h2>
			<p>
				Result not what you expected? Override the fields in doubt to see what you missed or what
				contradicts. Wondering if a more precise fact would matter? Change it in place, and see if
				the call moves before you chase the source.
			</p>
		</div>
		<div class="exploration-image">
			<img
				src="/images/general_ledger_analyzer/explore.png"
				alt="Exploration view comparing the original analysis with a what-if variant side by side, plus an amend panel."
			/>
		</div>
	</section>

	<section id="benefits">
		<SectionHeader kicker="WHY IT HOLDS UP" title="Built to stand up in an audit." />
		<div class="benefits-grid">
			{#each benefits as benefit (benefit.title)}
				<Card as="article">
					<h3>{benefit.title}</h3>
					<p>{benefit.body}</p>
				</Card>
			{/each}
		</div>
	</section>
</div>

<section id="cta-dark">
	<div class="cta-dark-inner">
		<SectionHeader level="h2" title="Want to run your ledger through it?" tone="dark" />
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

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		justify-content: center;
	}

	.hero-image {
		width: 100%;
		margin-top: var(--space-4);
		transform: translateX(4%);
	}

	.hero-image img {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
	}

	/* Walkthrough */
	#walkthrough {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-16);
		padding-top: var(--space-12);
		border-top: 1px solid var(--color-border);
	}

	.mini-stepper {
		width: 100%;
		max-width: var(--container-medium);
	}

	.mini-stepper ol {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
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
	#exploration {
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

	.benefits-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-6);
	}

	.benefits-grid h3 {
		margin: 0 0 var(--space-2);
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		color: var(--color-text);
	}

	.benefits-grid p {
		margin: 0;
		font-size: var(--font-size-base);
		line-height: var(--line-height-base);
		color: var(--color-text-muted);
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

		.hero-image {
			transform: none;
		}

		.benefits-grid {
			grid-template-columns: 1fr;
		}

		#cta-dark {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
		}
	}
</style>
