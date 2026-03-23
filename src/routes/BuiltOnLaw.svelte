<div id="page">
	<div id="heading">
		<h2>Built on VAT law</h2>
		<p id="subtitle">
			Not a statistical model. A rules engine that encodes the actual legislation.
		</p>
	</div>

	<div id="content">
		<p>
			VATmiraal's knowledge base encodes national VAT codes and the EU VAT Directive as formal logic
			rules. Every conclusion traces back to a specific article, paragraph, and point.
		</p>
		<p>
			The engine doesn't predict &mdash; it applies the law as written and shows you exactly which
			provisions led to each decision.
		</p>
	</div>

	<div id="cards">
		<div class="card">
			<h3>Rule-based, not probabilistic</h3>
			<p>
				No LLM hallucination risk. The engine applies deterministic logic rules to structured facts.
			</p>
		</div>
		<div class="card">
			<h3>Full audit trail</h3>
			<p>Every result includes the legal provisions applied. Reviewable by any tax professional.</p>
		</div>
		<div class="card">
			<h3>EU Directive mappings</h3>
			<p>
				National provisions are linked to their EU VAT Directive equivalents for cross-border
				reasoning.
			</p>
		</div>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4rem;
		padding: 6rem 2rem;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	#heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;
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

	#content {
		max-width: 700px;
		text-align: center;
	}

	#content p {
		font-size: 1.05em;
		color: rgba(15, 15, 15, 0.7);
		line-height: 1.65;
		margin: 0 0 1.25em;
	}

	#content p:last-child {
		margin-bottom: 0;
	}

	#cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		width: 100%;
		max-width: 1200px;
	}

	.card {
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.09);
		border-radius: 10px;
		box-shadow:
			0 2px 8px rgba(0, 0, 0, 0.06),
			0 1px 2px rgba(0, 0, 0, 0.04);
		padding: 1.75em 2em;
	}

	.card h3 {
		font-size: 1.15em;
		font-weight: 700;
		letter-spacing: -0.01em;
		margin: 0 0 0.5em;
	}

	.card p {
		font-size: 1em;
		color: rgba(15, 15, 15, 0.7);
		line-height: 1.65;
		margin: 0;
	}

	@media (max-width: 768px) {
		#page {
			gap: 2.5rem;
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 1.8em;
		}

		#cards {
			grid-template-columns: 1fr;
		}

		.card {
			padding: 1.4em 1.5em;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#page {
			gap: 3rem;
			padding-bottom: 3rem;
		}

		h2 {
			font-size: 2.2em;
		}
	}
</style>
