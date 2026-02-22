<div id="page">
	<div id="heading">
		<h2 id="why-vatmiraal">Why VATmiraal</h2>
		<p id="why-subtitle">Accurate. Explainable. Ready for your stack.</p>
	</div>
	<div id="cards">
		<div class="card">
			<h3>Works with your data as-is</h3>
			<p>
				Upload invoices, email chains, text, or documents. No reformatting required before analysis.
			</p>
		</div>
		<div class="card">
			<h3>Fits your existing stack</h3>
			<p>
				Use our web application or connect to your ERP or accounting software. No vendor lock-in, no
				proprietary formats.
			</p>
		</div>
		<div class="card">
			<h3>Explainable at every step</h3>
			<p>
				Every VAT decision includes a human-readable justification, built for audit trails and
				compliance review.
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

	#why-vatmiraal {
		font-size: 2.6em;
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		margin: 0;
	}

	#why-subtitle {
		font-size: 1.15em;
		color: rgba(15, 15, 15, 0.6);
		margin: 0;
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

		#why-vatmiraal {
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

		#why-vatmiraal {
			font-size: 2.2em;
		}
	}
</style>
