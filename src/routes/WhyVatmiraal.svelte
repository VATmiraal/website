<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<div id="page">
	<SectionHeader
		title="Why VATmiraal"
		subtitle="Accurate, citable, and ready to drop into your existing stack."
	/>
	<div id="cards">
		<Card interactive>
			<h3>Flexible with your data</h3>
			<p>
				Works with invoices, ledger extracts, and structured exports. The cleaner the input, the
				more directly the engine applies — but you don't need a rigid schema to start.
			</p>
		</Card>
		<Card interactive>
			<h3>Fits your existing stack</h3>
			<p>
				Use the web app, or plug in through a REST API, native ERP integration, or an MCP server for
				AI-agent workflows.
			</p>
		</Card>
		<Card interactive>
			<h3>Defensible at every step</h3>
			<p>
				Each decision cites the national article and the EU Directive provision that produced it.
				Paste it into a working paper, hand it to an auditor, and move on.
			</p>
		</Card>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-16);
		padding: var(--section-padding-y) var(--section-padding-x);
		border-top: 1px solid var(--color-border);
	}

	#cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-6);
		width: 100%;
		max-width: var(--container-wide);
	}

	#cards h3 {
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		margin: 0 0 var(--space-2);
	}

	#cards p {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
		margin: 0;
	}

	@media (max-width: 768px) {
		#page {
			gap: var(--space-10);
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
		}

		#cards {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#page {
			gap: var(--space-12);
			padding-bottom: var(--space-12);
		}
	}
</style>
