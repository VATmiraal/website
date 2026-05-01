<script lang="ts">
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<div id="page">
	<SectionHeader
		title="How it works"
		subtitle="From a raw transaction to a cited VAT decision in four steps."
	/>
	<div id="steps">
		<div class="step">
			<span class="step-number">1</span>
			<h3>Submit the transaction</h3>
			<p>
				Upload an invoice or CSV, pull directly from your ERP, or answer a few guided questions.
			</p>
		</div>
		<div class="step">
			<span class="step-number">2</span>
			<h3>Extract the facts</h3>
			<p>
				The system identifies parties, countries, object type, and VAT identifiers from whatever you
				submitted.
			</p>
		</div>
		<div class="step">
			<span class="step-number">3</span>
			<h3>Apply the law</h3>
			<p>
				A knowledge base of national VAT law determines classification, place of supply, exemptions,
				and the VAT debtor.
			</p>
		</div>
		<div class="step">
			<span class="step-number">4</span>
			<h3>Return a cited result</h3>
			<p>
				Each conclusion is paired with the specific national article or EU Directive provision it
				rests on.
			</p>
		</div>
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

	#steps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-8);
		width: 100%;
		max-width: var(--container-wide);
	}

	.step {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-3);
		position: relative;
	}

	.step:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 1em;
		left: calc(50% + 1.5em);
		width: calc(100% - 3em);
		height: 2px;
		background: var(--color-border-strong);
	}

	.step-number {
		flex-shrink: 0;
		width: 2em;
		height: 2em;
		border-radius: var(--radius-pill);
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
		font-size: 0.9em;
		font-weight: var(--font-weight-bold);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.step h3 {
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		margin: 0;
	}

	.step p {
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

		#steps {
			grid-template-columns: 1fr;
			gap: var(--space-6);
		}

		.step:not(:last-child)::after {
			display: none;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#page {
			gap: var(--space-12);
			padding-bottom: var(--space-12);
		}

		#steps {
			grid-template-columns: repeat(2, 1fr);
		}

		.step:nth-child(2)::after {
			display: none;
		}

		.step:not(:last-child)::after {
			display: none;
		}
	}
</style>
