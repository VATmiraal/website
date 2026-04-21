<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	interface IRoadmapCard {
		title: string;
		body: string;
	}

	const roadmap: IRoadmapCard[] = [
		{
			title: 'Chat box',
			body: 'Ask a VAT question, drop in the document, get a cited answer.'
		},
		{
			title: 'ERP integration',
			body: 'Your ERP, with VAT answers built in.'
		},
		{
			title: 'Pre-audit automation',
			body: "A guardrail in front of Peppol. We flag faulty VAT, hand it back to you to validate, and keep bad transactions out of the authority's inbox."
		},
		{
			title: 'JSON API & MCP',
			body: 'Plug our VAT engine into anything: a REST call for your services, an MCP server for your AI agents.'
		}
	];
</script>

<svelte:head>
	<title>Products — VATmiraal</title>
	<meta
		name="description"
		content="The VATmiraal product line. Cited VAT analysis, built for just-in-time auditing."
	/>
</svelte:head>

<div id="page">
	<section id="hero">
		<SectionHeader
			kicker="PRODUCTS"
			level="h1"
			title="VAT tools, built for just-in-time auditing."
			subtitle="Every tool returns a cited answer. Rule-based, EU-wide, defensible on the day the auditor asks."
		/>
	</section>

	<section id="featured">
		<div class="featured-copy">
			<span class="kicker">AVAILABLE NOW</span>
			<h2>CSV General Ledger Analyser</h2>
			<p>
				Drop in a ledger extract. Get the VAT boxes, classifications, and legal basis for each line.
				Change a field, and the analysis updates on the spot.
			</p>
			<div class="featured-actions">
				<Button href={resolve('/products/general_ledger_analyser')} variant="primary">
					Learn more →
				</Button>
				<Button href="mailto:billing@vatmiraal.be" variant="ghost">Request a demo</Button>
			</div>
		</div>
		<div class="featured-image">
			<img
				src="/images/general_ledger_analyzer/home.png"
				alt="CSV General Ledger Analyser interface"
			/>
		</div>
	</section>

	<section id="roadmap">
		<div class="roadmap-header">
			<SectionHeader kicker="COMING SOON" title="On the roadmap" />
			<a class="roadmap-link" href={resolve('/roadmap')}>See the full roadmap →</a>
		</div>
		<div class="roadmap-grid">
			{#each roadmap as item (item.title)}
				<Card as="article" interactive>
					<span class="card-tag">COMING SOON</span>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
				</Card>
			{/each}
		</div>
	</section>
</div>

<section id="cta-dark">
	<div class="cta-dark-inner">
		<SectionHeader level="h2" title="Ready for just-in-time auditing?" tone="dark" />
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
		justify-content: center;
	}

	#featured {
		width: 100%;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
		gap: var(--space-16);
		align-items: center;
		padding-top: var(--space-8);
		border-top: 1px solid var(--color-border);
	}

	.featured-copy {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.featured-copy .kicker {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.featured-copy h2 {
		margin: 0;
		font-size: var(--h2-section);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
		color: var(--color-text);
	}

	.featured-copy p {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		max-width: 36rem;
	}

	.featured-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-3);
	}

	.featured-image {
		width: 100%;
	}

	.featured-image img {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
	}

	#roadmap {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-12);
		padding-top: var(--space-12);
		border-top: 1px solid var(--color-border);
	}

	.roadmap-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-4);
	}

	.roadmap-link {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		color: var(--color-accent);
		text-decoration: none;
		transition: color var(--duration-base) var(--easing);
	}

	.roadmap-link:hover {
		color: var(--color-accent-hover);
	}

	.roadmap-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-6);
	}

	.card-tag {
		display: inline-block;
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
		margin-bottom: var(--space-3);
	}

	.roadmap-grid h3 {
		margin: 0 0 var(--space-2);
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
	}

	.roadmap-grid p {
		margin: 0;
		font-size: var(--font-size-base);
		line-height: var(--line-height-base);
		color: var(--color-text-muted);
	}

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

	@media (max-width: 1024px) {
		#featured {
			grid-template-columns: 1fr;
			gap: var(--space-10);
		}
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile) var(--space-16);
			gap: var(--space-16);
		}

		.roadmap-grid {
			grid-template-columns: 1fr;
		}

		#cta-dark {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
		}
	}
</style>
