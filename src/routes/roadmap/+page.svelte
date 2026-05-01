<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import RoadmapTree, { type IRoadmapBranch } from '$lib/components/RoadmapTree.svelte';

	interface IBranchWithDetails extends IRoadmapBranch {
		rootDescription: string;
		leaves: Array<{ title: string; description: string }>;
	}

	const branches: IBranchWithDetails[] = [
		{
			root: 'Logic engine',
			rootDescription:
				'Rule-based, explainable reasoning over VAT law. The core that every feature builds on.',
			leaves: [
				{
					title: 'Audit checking',
					description:
						'Define arithmetic relationships between accounts and let the engine verify them during audit. Catch inconsistencies that spreadsheet reviews miss.'
				},
				{
					title: 'ABC / chain transactions',
					description:
						'VAT treatment for A→B→C supply chains where goods ship directly to the end customer.'
				}
			]
		},
		{
			root: 'Multi-jurisdiction',
			rootDescription: 'Coverage of additional EU member states.',
			leaves: [
				{
					title: 'Cross-border filing',
					description: 'Filing VAT declarations in multiple EU jurisdictions from a single system.'
				}
			]
		},
		{
			root: 'Integration',
			rootDescription: 'Ways to plug VATmiraal into your existing systems and workflows.',
			leaves: [
				{
					title: 'ERP connectors',
					description:
						'Direct connections to accounting and ERP software like Exact Online, Yuki, and Odoo.'
				},
				{
					title: 'API access',
					description:
						'Programmatic access to the rules engine for teams that want to embed VAT reasoning in their own systems.'
				},
				{
					title: 'Agentic / MCP workflow',
					description: 'MCP server for AI agents to perform VAT validation end-to-end.'
				},
				{
					title: 'Chat bot',
					description:
						'Conversational interface for asking VAT questions in natural language, answered with cited reasoning.'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Roadmap — VATmiraal</title>
	<meta
		name="description"
		content="What's next for VATmiraal: logic engine extensions, multi-jurisdiction support, and integration paths (ERP, API, agentic, chat bot)."
	/>
</svelte:head>

<div id="page">
	<SectionHeader
		level="h1"
		title="What's next"
		subtitle="VATmiraal is in active development. The tree below shows where we're extending the engine. Each branch is a planned feature anchored to one of three foundations."
	/>

	<RoadmapTree {branches} />

	<div id="details">
		{#each branches as branch (branch.root)}
			<section class="branch-details">
				<h2>{branch.root}</h2>
				<p class="root-desc">{branch.rootDescription}</p>
				<ul>
					{#each branch.leaves as leaf (leaf.title)}
						<li>
							<h3>{leaf.title}</h3>
							<p>{leaf.description}</p>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>

	<div id="cta">
		<p>Missing something you need?</p>
		<Button href="mailto:info@vatmiraal.be" variant="primary">Get in touch</Button>
		<Button href={resolve('/')} variant="ghost">← Back to home</Button>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		gap: var(--space-20);
		max-width: var(--container-wide);
		margin: 0 auto;
		box-sizing: border-box;
	}

	#details {
		display: flex;
		flex-direction: column;
		gap: var(--space-16);
		width: 100%;
		max-width: var(--container-narrow);
	}

	.branch-details h2 {
		font-size: var(--h2-section);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
		margin: 0 0 var(--space-3);
	}

	.root-desc {
		font-size: var(--font-size-md);
		color: var(--color-text-muted);
		line-height: var(--line-height-snug);
		margin: 0 0 var(--space-8);
		max-width: 42rem;
	}

	.branch-details ul {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.branch-details li {
		padding-left: var(--space-5);
		border-left: 2px solid var(--color-accent);
	}

	.branch-details li h3 {
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		margin: 0 0 var(--space-2);
	}

	.branch-details li p {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
		margin: 0;
	}

	#cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		text-align: center;
	}

	#cta > p {
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-medium);
		margin: 0;
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
			gap: var(--space-14, 3.5rem);
		}
	}
</style>
