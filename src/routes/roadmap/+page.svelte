<script lang="ts">
	import { resolve } from '$app/paths';
	import RoadmapItem from './components/roadmap-item.svelte';

	const items = [
		{
			title: 'Constraint-based audit checking',
			description:
				'Define arithmetic relationships between accounts and let the engine verify them during audit. Catch inconsistencies that spreadsheet reviews miss.'
		},
		{
			title: 'Booking-time enforcement',
			description:
				'The same constraint engine, applied at the moment of entry. Flag errors before they reach the ledger.'
		},
		{
			title: 'Multi-jurisdiction support',
			description: 'Extending the support for additional EU member states.'
		},
		{
			title: 'Cross-border filing',
			description: 'Filing VAT declarations in multiple EU jurisdictions from a single system.'
		},
		{
			title: 'ERP integration',
			description:
				'Direct connections to accounting and ERP software like Exact Online, Yuki, and Odoo. Import transaction data, export justified results and declaration-ready output.'
		},
		{
			title: 'API access',
			description:
				'Programmatic access to the rules engine for teams that want to embed VAT reasoning in their own systems.'
		},
		{
			title: 'Agentic Workflow',
			description: 'Add support for AI agent to perform VAT validation using an MCP server'
		}
	];
</script>

<svelte:head>
	<title>Roadmap &mdash; VATmiraal</title>
</svelte:head>

<div id="page">
	<div id="hero">
		<h1>Where we're heading</h1>
		<p id="intro">VATmiraal is in active development. Here is what we're building toward.</p>
	</div>

	<div id="items">
		{#each items as item, i (item.title)}
			<RoadmapItem number={i + 1} title={item.title} description={item.description} />
		{/each}
	</div>

	<div id="cta">
		<p>Want to shape what comes next?</p>
		<a id="contact-link" href="mailto:info@vatmiraal.be">Get in touch</a>
		<a id="back-home" href={resolve('/')}>&#8592; Back to home</a>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: 6rem 2rem 5rem;
		gap: 5rem;
		max-width: 780px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	#hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		text-align: center;
	}

	h1 {
		font-size: clamp(2rem, 4.5vw, 3.2rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.08;
		margin: 0;
	}

	#intro {
		font-size: 1.2em;
		color: rgba(15, 15, 15, 0.65);
		max-width: 560px;
		line-height: 1.65;
		margin: 0;
	}

	#items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	#cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
		text-align: center;
	}

	#cta > p {
		font-size: 1.15em;
		font-weight: 500;
		margin: 0;
	}

	#contact-link {
		background: #0f0f0f;
		color: #f8f8f6;
		border: 2px solid #0f0f0f;
		border-radius: 6px;
		padding: 0.55em 1.5em;
		font-weight: 600;
		font-size: 1em;
		text-decoration: none;
		transition:
			background-color 0.22s ease,
			color 0.22s ease;
	}

	#contact-link:hover {
		background: transparent;
		color: #0f0f0f;
	}

	#back-home {
		color: rgba(15, 15, 15, 0.5);
		text-decoration: none;
		font-size: 0.95em;
		transition: color 0.2s ease;
	}

	#back-home:hover {
		color: #0f0f0f;
	}

	@media (max-width: 768px) {
		#page {
			padding: 4rem 1.5rem 4rem;
			gap: 3.5rem;
		}
	}
</style>
