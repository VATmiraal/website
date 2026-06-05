<script lang="ts">
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	const sectors = [
		{
			name: 'Hospitals & healthcare',
			detail:
				'Exempt medical care alongside taxable supplies, with pro-rata deduction on every shared cost.'
		},
		{
			name: 'Local government',
			detail:
				'Public-authority acts outside VAT, mixed with taxable activity and the special regimes that govern them.'
		},
		{
			name: 'Insurance brokers',
			detail:
				'Exempt intermediation under art. 44, where input VAT rarely deducts cleanly and the lines are easy to cross.'
		}
	];
</script>

<div id="page">
	<section class="block">
		<SectionHeader
			align="start"
			kicker="For advisors"
			title="For accountants & tax advisors"
			subtitle="One defensible answer per transaction — across every client file."
		/>

		<div class="columns">
			<div class="column">
				<h3>Hand over, don't re-derive</h3>
				<p>
					Cited reasoning you can give a client — or the taxman — without rebuilding the argument from
					scratch.
				</p>
			</div>
			<div class="column">
				<h3>Consistent across your book</h3>
				<p>
					The same treatment for the same facts, every reviewer, every file — not per-reviewer
					judgement.
				</p>
			</div>
			<div class="column">
				<h3>Catch the hard cases early</h3>
				<p>
					Mixed taxpayers, pro-rata and art. 44 exemptions surfaced before the audit is the one to
					find them.
				</p>
			</div>
		</div>
	</section>

	<section class="block">
		<SectionHeader
			align="start"
			kicker="For VAT-complex sectors"
			title="For VAT-complex sectors"
			subtitle="Built for organisations with both exempt and taxable activity — where VAT is genuinely hard."
		/>

		<div class="columns">
			{#each sectors as sector}
				<div class="column">
					<h3>{sector.name}</h3>
					<p>{sector.detail}</p>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-14, 3.5rem);
		padding: var(--section-padding-y) var(--section-padding-x);
		border-top: 1px solid var(--color-border);
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		width: 100%;
		max-width: var(--container-wide);
	}

	.columns {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		width: 100%;
		border-top: 1px solid var(--color-border-strong);
		border-bottom: 1px solid var(--color-border-strong);
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-8) var(--space-8);
		position: relative;
	}

	.column + .column {
		border-left: 1px solid var(--color-border);
	}

	.column h3 {
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		margin: 0;
		color: var(--color-text);
	}

	.column p {
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

		.columns {
			grid-template-columns: 1fr;
			border-bottom: none;
		}

		.column {
			padding: var(--space-6) var(--space-2);
		}

		.column + .column {
			border-left: none;
			border-top: 1px solid var(--color-border);
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#page {
			gap: var(--space-12);
		}
	}
</style>
