<script>
	import { resolve } from '$app/paths';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'VATmiraal Demo',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		url: 'https://vatmiraal.be/demo',
		description:
			'Interactive demo of the VATmiraal rules engine — analyse VAT transactions with full legal justification, entirely in the browser.',
		provider: { '@id': 'https://vatmiraal.be/#organization' }
	};
</script>

<svelte:head>
	<title>Demo — VATmiraal</title>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
</svelte:head>

<div id="page">
	<div id="hero">
		<h1>See VATmiraal in action</h1>
		<p id="intro">
			Explore how the rules engine analyses real VAT transactions entirely in your browser.
		</p>
		<div id="hero-actions">
			<a class="btn-primary" href={resolve('/demo/coming-soon')}> Launch the Analyser </a>
			<a class="btn-secondary" href={resolve('/demo/coming-soon')}>
				Or try the guided Assistant &rarr;
			</a>
		</div>
	</div>

	<div id="modes">
		<div class="card">
			<h3>Analyser</h3>
			<p>
				Select a ledger entry from the built-in dataset, run analysis, and get the full VAT
				determination with legal references.
			</p>
			<ul>
				<li>Pre-loaded realistic entries</li>
				<li>One-click analysis</li>
				<li>Full legal justification</li>
			</ul>
		</div>
		<div class="card">
			<h3>Assistant</h3>
			<p>
				Answer questions about your transaction. The engine adapts dynamically, skipping irrelevant
				questions. At the end, you get the same detailed result.
			</p>
			<ul>
				<li>Guided step-by-step</li>
				<li>Adapts to your answers</li>
				<li>No prior knowledge needed</li>
			</ul>
		</div>
	</div>

	<div id="example">
		<h2>What you get</h2>
		<p id="example-intro">Here is the actual output for a single domestic sale at 21%.</p>

		<!-- GL Entry banner -->
		<div class="demo-full">
			<div class="a-card a-banner">
				<h4>GL Entry — TechParts NV</h4>
				<p class="a-desc">Domestic sale of goods — standard 21% rate (Box 03)</p>
				<div class="a-meta">
					<div class="a-field">
						<span class="a-key">Date</span><span class="a-val">2025-02-15</span>
					</div>
					<div class="a-field">
						<span class="a-key">Counterparty</span><span class="a-val">Bouwbedrijf Janssens</span>
					</div>
					<div class="a-field">
						<span class="a-key">Object</span><span class="a-val">Machine parts</span>
					</div>
					<div class="a-field">
						<span class="a-key">Amount</span><span class="a-val">&euro;5,000</span>
					</div>
					<div class="a-field">
						<span class="a-key">VAT charged</span><span class="a-val">&euro;1,050</span>
					</div>
					<div class="a-field"><span class="a-key">Tariff</span><span class="a-val">21%</span></div>
				</div>
			</div>

			<div class="a-columns">
				<!-- Sidebar -->
				<aside class="a-sidebar">
					<div class="a-sb-section">
						<h5>Object</h5>
						<span class="a-sb-val">Physical Good</span>
						<span class="a-sb-detail">Parts</span>
					</div>
					<div class="a-sb-section">
						<h5>Parties</h5>
						<div class="a-party">
							<span class="a-role">Supplier</span>
							<span class="a-sb-val">TechParts NV</span>
							<code class="a-vatcode">BE0456789012</code>
							<span class="a-sb-detail">Belgium &middot; Company</span>
						</div>
						<div class="a-party">
							<span class="a-role">Receiver</span>
							<span class="a-sb-val">Bouwbedrijf Janssens</span>
							<code class="a-vatcode">BE0111222333</code>
							<span class="a-sb-detail">Belgium &middot; Company</span>
						</div>
					</div>
				</aside>

				<!-- Analysis cards -->
				<div class="a-analysis">
					<div class="a-card">
						<h4>Transaction</h4>
						<span class="a-result">Supply of Goods</span>
					</div>

					<div class="a-card">
						<h4>Taxability</h4>
						<div class="a-kv">
							<div class="a-field">
								<span class="a-key">Result</span><span class="a-val">Taxable</span>
							</div>
						</div>
					</div>

					<div class="a-card">
						<h4>Place of Supply</h4>
						<div class="a-kv">
							<div class="a-field">
								<span class="a-key">Country</span><span class="a-val">Belgium</span>
							</div>
							<div class="a-field">
								<span class="a-key">Legal basis</span><span class="a-val"
									>Art. 14 &sect;1 W.BTW</span
								>
							</div>
						</div>
					</div>

					<div class="a-card">
						<h4>VAT Debtor</h4>
						<div class="a-kv">
							<div class="a-field">
								<span class="a-key">Debtor</span><span class="a-val">Supplier</span>
							</div>
							<div class="a-field">
								<span class="a-key">Legal basis</span><span class="a-val"
									>Art. 51 &sect;1, 1&deg; W.BTW</span
								>
							</div>
						</div>
					</div>

					<div class="a-card">
						<h4>VAT ID Validation</h4>
						<div class="a-vatid-grid">
							<div class="a-vatid-col">
								<div class="a-field">
									<span class="a-key">Party</span><span class="a-val">Supplier — TechParts NV</span>
								</div>
								<div class="a-field">
									<span class="a-key">VAT ID</span><code class="a-val">BE0456789012</code>
								</div>
								<div class="a-field">
									<span class="a-key">Validity</span><span class="a-val">Valid</span>
								</div>
							</div>
							<div class="a-vatid-col">
								<div class="a-field">
									<span class="a-key">Party</span><span class="a-val"
										>Receiver — Bouwbedrijf Janssens</span
									>
								</div>
								<div class="a-field">
									<span class="a-key">VAT ID</span><code class="a-val">BE0111222333</code>
								</div>
								<div class="a-field">
									<span class="a-key">Validity</span><span class="a-val">Valid</span>
								</div>
							</div>
						</div>
					</div>

					<div class="a-card">
						<h4>VAT Declaration Boxes</h4>
						<table class="a-table">
							<thead>
								<tr
									><th class="at-box">Box</th><th>Description</th><th class="at-amt">Amount</th></tr
								>
							</thead>
							<tbody>
								<tr
									><td><span class="box-num">03</span></td><td class="at-desc">Taxable at 21%</td
									><td class="at-amt">&euro;5,000</td></tr
								>
								<tr
									><td><span class="box-num">54</span></td><td class="at-desc"
										>VAT due on boxes 01–03</td
									><td class="at-amt">&euro;1,050</td></tr
								>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="footer-note">
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
		max-width: 960px;
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

	#hero-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}

	.btn-primary {
		background: #0f0f0f;
		color: #ffffff;
		border: 2px solid #0f0f0f;
		border-radius: 6px;
		padding: 0.55em 1.5em;
		font-weight: 600;
		font-size: 1em;
		text-decoration: none;
		transition:
			background-color 0.22s ease,
			color 0.22s ease,
			transform 0.22s ease,
			box-shadow 0.22s ease;
	}

	.btn-primary:hover {
		background: #ffffff;
		color: #0f0f0f;
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}

	.btn-secondary {
		color: rgba(15, 15, 15, 0.5);
		text-decoration: none;
		font-size: 0.95em;
		transition: color 0.2s ease;
	}

	.btn-secondary:hover {
		color: #0f0f0f;
	}

	#modes {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		width: 100%;
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
		margin: 0 0 1em;
	}

	.card ul {
		margin: 0;
		padding: 0 0 0 1.2em;
		list-style: disc;
	}

	.card li {
		font-size: 0.95em;
		color: rgba(15, 15, 15, 0.6);
		line-height: 1.65;
		padding: 0.15em 0;
	}

	#example {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		width: 100%;
	}

	#example h2 {
		font-size: 1.6em;
		font-weight: 700;
		letter-spacing: -0.02em;
		margin: 0;
	}

	#example-intro {
		font-size: 1em;
		color: rgba(15, 15, 15, 0.6);
		margin: 0;
		text-align: center;
	}

	/* ── Full analyser example ── */
	.demo-full {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		font-size: 0.85rem;
		color: #111827;
	}

	.a-card {
		padding: 0.85rem 1rem;
		border: 1px solid rgba(0, 0, 0, 0.09);
		border-radius: 10px;
		background: #ffffff;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
	}

	.a-card h4 {
		margin: 0 0 0.5rem;
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: rgba(15, 15, 15, 0.45);
	}

	.a-banner {
		background: #fafafa;
		border-color: rgba(0, 0, 0, 0.12);
	}

	.a-banner h4 {
		color: rgba(15, 15, 15, 0.7);
	}

	.a-desc {
		color: rgba(15, 15, 15, 0.6);
		margin: 0.15rem 0 0.4rem;
		font-size: 0.85rem;
	}

	.a-meta,
	.a-kv {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem 1.25rem;
	}

	.a-field {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.a-key {
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: rgba(15, 15, 15, 0.4);
	}

	.a-val {
		color: #111827;
	}

	.a-columns {
		display: grid;
		grid-template-columns: 210px 1fr;
		gap: 0.75rem;
		align-items: start;
	}

	.a-sidebar {
		background: #fafafa;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 0.6rem 0.75rem;
	}

	.a-sb-section + .a-sb-section {
		border-top: 1px solid rgba(0, 0, 0, 0.07);
		margin-top: 0.4rem;
		padding-top: 0.4rem;
	}

	.a-sidebar h5 {
		margin: 0 0 0.25rem;
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: rgba(15, 15, 15, 0.55);
	}

	.a-sb-val {
		display: block;
		font-weight: 600;
		color: #111827;
	}

	.a-sb-detail {
		display: block;
		color: rgba(15, 15, 15, 0.45);
	}

	.a-party + .a-party {
		border-top: 1px dashed rgba(0, 0, 0, 0.07);
		margin-top: 0.3rem;
		padding-top: 0.3rem;
	}

	.a-role {
		display: block;
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: rgba(15, 15, 15, 0.4);
	}

	.a-vatcode {
		color: rgba(15, 15, 15, 0.45);
		font-size: 0.8rem;
	}

	.a-analysis {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.a-result {
		font-weight: 600;
		color: #111827;
	}

	.a-vatid-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.6rem;
	}

	.a-vatid-col {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		padding: 0.4rem 0.6rem;
		border: 1px solid rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		background: #fafafa;
	}

	.a-table {
		width: 100%;
		border-collapse: collapse;
	}

	.a-table thead {
		border-bottom: 2px solid rgba(0, 0, 0, 0.08);
	}

	.a-table th {
		text-align: left;
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: rgba(15, 15, 15, 0.4);
		padding: 0.3rem 0.4rem;
	}

	.a-table td {
		padding: 0.35rem 0.4rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.04);
	}

	.a-table tr:last-child td {
		border-bottom: none;
	}

	.at-box {
		width: 3rem;
	}

	.at-amt {
		text-align: right;
		width: 5rem;
		font-weight: 600;
		font-family: monospace;
	}

	.at-desc {
		color: rgba(15, 15, 15, 0.65);
	}

	.box-num {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.8rem;
		padding: 0.05rem 0.35rem;
		border-radius: 0.25rem;
		background: #0f0f0f;
		color: #ffffff;
		font-weight: 700;
		font-family: monospace;
		font-size: 0.8rem;
	}

	#footer-note {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
		text-align: center;
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

		#modes {
			grid-template-columns: 1fr;
		}

		.a-columns {
			grid-template-columns: 1fr;
		}

		.a-vatid-grid {
			grid-template-columns: 1fr;
		}

		.card {
			padding: 1.4em 1.5em;
		}

		.btn-primary:hover {
			transform: none;
			box-shadow: none;
		}
	}
</style>
