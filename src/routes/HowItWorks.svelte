<div id="page">
	<div id="heading">
		<h2>How it works</h2>
		<p id="subtitle">From raw transaction to justified VAT decision in four steps.</p>
	</div>
	<div id="steps">
		<div class="step">
			<span class="step-number">1</span>
			<h3>Input your transaction</h3>
			<p>Upload an invoice, enter ledger data, or answer a few questions.</p>
		</div>
		<div class="step">
			<span class="step-number">2</span>
			<h3>Data extraction</h3>
			<p>The system identifies the parties, countries, object type, and VAT identifiers.</p>
		</div>
		<div class="step">
			<span class="step-number">3</span>
			<h3>Rules engine analysis</h3>
			<p>
				A knowledge base encoding Belgian VAT law determines classification, place of supply,
				exemptions, and debtor.
			</p>
		</div>
		<div class="step">
			<span class="step-number">4</span>
			<h3>Justified result</h3>
			<p>
				Every conclusion cites the specific W.BTW articles and EU Directive provisions that apply.
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

	#steps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		width: 100%;
		max-width: 1200px;
	}

	.step {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.75em;
		position: relative;
	}

	.step:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 1em;
		left: calc(50% + 1.5em);
		width: calc(100% - 3em);
		height: 2px;
		background: rgba(0, 0, 0, 0.12);
	}

	.step-number {
		flex-shrink: 0;
		width: 2em;
		height: 2em;
		border-radius: 50%;
		background: #0f0f0f;
		color: #f8f8f6;
		font-size: 0.9em;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.step h3 {
		font-size: 1.15em;
		font-weight: 700;
		letter-spacing: -0.01em;
		margin: 0;
	}

	.step p {
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

		#steps {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.step:not(:last-child)::after {
			display: none;
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
