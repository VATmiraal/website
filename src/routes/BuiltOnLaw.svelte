<script lang="ts">
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<div id="page">
	<SectionHeader
		kicker="Foundations"
		title="Not another LLM"
		subtitle="A flexible, explainable, deterministic law expert system — not a language model guessing from training data."
	/>

	<div id="columns">
		<div class="column">
			<h3>Rule-based, not probabilistic</h3>
			<p>
				No hallucination risk. The engine applies deterministic logic to structured facts, and
				returns the same answer every time.
			</p>
		</div>
		<div class="column">
			<h3>Full audit trail</h3>
			<p>
				Every output lists the legal provisions it applied. Any tax professional can review the
				reasoning step by step.
			</p>
		</div>
		<div class="column">
			<h3>EU Directive mappings</h3>
			<p>
				National provisions link to their EU VAT Directive equivalents, so cross-border reasoning is
				explicit rather than inferred.
			</p>
		</div>
	</div>

	<div id="poweredBy">
		<span class="powered-label">Powered by Prolog, an ISO standard</span>
		<div class="partners">
			<a
				class="partner"
				href="https://www.iso.org/standard/21413.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/iso-logo.svg" alt="" class="partner-logo" />
				<span class="partner-name">ISO/IEC 13211, the Prolog standard</span>
			</a>
			<a class="partner" href="https://www.scryer.pl/" target="_blank" rel="noopener noreferrer">
				<img src="/scryer-logo.png" alt="" class="partner-logo" />
				<span class="partner-name">Scryer Prolog, an ISO-compliant implementation</span>
			</a>
		</div>
	</div>
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

	#columns {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		width: 100%;
		max-width: var(--container-wide);
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

	#poweredBy {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		width: 100%;
		max-width: var(--container-wide);
	}

	.powered-label {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.partners {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		flex-wrap: wrap;
	}

	.partner {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-1) var(--space-6);
		color: inherit;
		text-decoration: none;
		opacity: 0.85;
		transition: opacity var(--duration-base) var(--easing);
	}

	.partner + .partner {
		border-left: 1px solid var(--color-border);
	}

	.partner:hover {
		opacity: 1;
	}

	.partner-logo {
		height: 26px;
		width: auto;
	}

	.partner-name {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		color: var(--color-text);
	}

	@media (max-width: 768px) {
		#page {
			gap: var(--space-10);
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
		}

		#columns {
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

		.partners {
			flex-direction: column;
			gap: var(--space-4);
		}

		.partner {
			padding: 0;
		}

		.partner + .partner {
			border-left: none;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#page {
			gap: var(--space-12);
			padding-bottom: var(--space-16);
		}
	}
</style>
