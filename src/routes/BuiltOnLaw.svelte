<div id="page">
	<div id="heading">
		<span class="kicker">Foundations</span>
		<h2>Built on VAT law</h2>
		<p id="subtitle">
			Not a statistical model. A rules engine that encodes the actual legislation.
		</p>
	</div>

	<div id="columns">
		<div class="column">
			<h3>Rule-based, not probabilistic</h3>
			<p>
				No LLM hallucination risk. The engine applies deterministic logic rules to structured facts.
			</p>
		</div>
		<div class="column">
			<h3>Full audit trail</h3>
			<p>Every result includes the legal provisions applied. Reviewable by any tax professional.</p>
		</div>
		<div class="column">
			<h3>EU Directive mappings</h3>
			<p>
				National provisions are linked to their EU VAT Directive equivalents for cross-border
				reasoning.
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
		gap: 3.5rem;
		padding: 6rem 2rem;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	#heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;
		max-width: 720px;
	}

	.kicker {
		font-size: 0.75em;
		font-weight: 600;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: rgba(15, 15, 15, 0.45);
	}

	h2 {
		font-size: 2.6em;
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		margin: 0;
	}

	#subtitle {
		font-size: 1.15em;
		color: rgba(15, 15, 15, 0.6);
		margin: 0;
	}

	#columns {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		width: 100%;
		max-width: 1100px;
		border-top: 1px solid rgba(0, 0, 0, 0.14);
		border-bottom: 1px solid rgba(0, 0, 0, 0.14);
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 0.55em;
		padding: 2.25em 2em;
		position: relative;
	}

	.column + .column {
		border-left: 1px solid rgba(0, 0, 0, 0.09);
	}

	.column h3 {
		font-size: 1.1em;
		font-weight: 700;
		letter-spacing: -0.01em;
		margin: 0;
	}

	.column p {
		font-size: 0.95em;
		color: rgba(15, 15, 15, 0.65);
		line-height: 1.65;
		margin: 0;
	}

	#poweredBy {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
		width: 100%;
		max-width: 1100px;
	}

	.powered-label {
		font-size: 0.75em;
		font-weight: 600;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: rgba(15, 15, 15, 0.45);
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
		gap: 0.65rem;
		padding: 0.25rem 1.75rem;
		color: inherit;
		text-decoration: none;
		opacity: 0.85;
		transition: opacity 0.2s ease;
	}

	.partner + .partner {
		border-left: 1px solid rgba(0, 0, 0, 0.12);
	}

	.partner:hover {
		opacity: 1;
	}

	.partner-logo {
		height: 26px;
		width: auto;
	}

	.partner-name {
		font-size: 0.88em;
		font-weight: 500;
		color: rgba(15, 15, 15, 0.78);
	}

	@media (max-width: 768px) {
		#page {
			gap: 2.5rem;
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 1.8em;
		}

		#columns {
			grid-template-columns: 1fr;
			border-bottom: none;
		}

		.column {
			padding: 1.75em 0.5em;
		}

		.column + .column {
			border-left: none;
			border-top: 1px solid rgba(0, 0, 0, 0.09);
		}

		.partners {
			flex-direction: column;
			gap: 1rem;
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
			gap: 2.75rem;
			padding-bottom: 4rem;
		}

		h2 {
			font-size: 2.2em;
		}
	}
</style>
