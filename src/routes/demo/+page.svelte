<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';

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
	<meta
		name="description"
		content="Interactive demo of the VATmiraal rules engine. Analyse VAT transactions with full legal justification, entirely in the browser."
	/>
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
			<Button href={resolve('/demo/coming-soon')} variant="primary">Launch the Analyser</Button>
			<Button href={resolve('/request_a_demo')} variant="ghost">
				Or book a demo call with us →
			</Button>
		</div>
	</div>

	<div id="modes">
		<Card interactive>
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
		</Card>
		<Card interactive>
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
		</Card>
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
		max-width: var(--container-medium);
		margin: 0 auto;
		box-sizing: border-box;
	}

	#hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-6);
		text-align: center;
	}

	h1 {
		font-size: var(--h1-secondary);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
		margin: 0;
	}

	#intro {
		font-size: var(--font-size-md);
		color: var(--color-text-muted);
		max-width: 560px;
		line-height: var(--line-height-base);
		margin: 0;
	}

	#hero-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
		margin-top: var(--space-2);
	}

	#modes {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-6);
		width: 100%;
	}

	#modes h3 {
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		margin: 0 0 var(--space-2);
	}

	#modes p {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
		margin: 0 0 var(--space-4);
	}

	#modes ul {
		margin: 0;
		padding: 0 0 0 var(--space-5);
		list-style: disc;
	}

	#modes li {
		font-size: var(--font-size-sm);
		color: var(--color-text-subtle);
		line-height: var(--line-height-base);
		padding: 0.15em 0;
	}

	#example {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-6);
		width: 100%;
	}

	#example h2 {
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		margin: 0;
	}

	#example-intro {
		font-size: var(--font-size-base);
		color: var(--color-text-subtle);
		margin: 0;
		text-align: center;
	}

	/* ── Embedded analyser mock (kept on its own local palette — mimics the product UI) ── */
	.demo-full {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		font-size: 0.85rem;
		color: var(--color-text);
	}

	.a-card {
		padding: 0.85rem 1rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-sm);
	}

	.a-card h4 {
		margin: 0 0 0.5rem;
		font-size: 0.65rem;
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-faint);
	}

	.a-banner {
		background: var(--color-bg-subtle);
		border-color: var(--color-border-strong);
	}

	.a-banner h4 {
		color: var(--color-text-muted);
	}

	.a-desc {
		color: var(--color-text-subtle);
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
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-faint);
	}

	.a-val {
		color: var(--color-text);
	}

	.a-columns {
		display: grid;
		grid-template-columns: 210px 1fr;
		gap: 0.75rem;
		align-items: start;
	}

	.a-sidebar {
		background: var(--color-bg-subtle);
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-lg);
		padding: 0.6rem 0.75rem;
	}

	.a-sb-section + .a-sb-section {
		border-top: 1px solid var(--color-border);
		margin-top: 0.4rem;
		padding-top: 0.4rem;
	}

	.a-sidebar h5 {
		margin: 0 0 0.25rem;
		font-size: 0.65rem;
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-subtle);
	}

	.a-sb-val {
		display: block;
		font-weight: var(--font-weight-semibold);
		color: var(--color-text);
	}

	.a-sb-detail {
		display: block;
		color: var(--color-text-faint);
	}

	.a-party + .a-party {
		border-top: 1px dashed var(--color-border);
		margin-top: 0.3rem;
		padding-top: 0.3rem;
	}

	.a-role {
		display: block;
		font-size: 0.65rem;
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-faint);
	}

	.a-vatcode {
		color: var(--color-text-faint);
		font-size: 0.8rem;
	}

	.a-analysis {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.a-result {
		font-weight: var(--font-weight-semibold);
		color: var(--color-text);
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
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background: var(--color-bg-subtle);
	}

	.a-table {
		width: 100%;
		border-collapse: collapse;
	}

	.a-table thead {
		border-bottom: 2px solid var(--color-border);
	}

	.a-table th {
		text-align: left;
		font-size: 0.65rem;
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-faint);
		padding: 0.3rem 0.4rem;
	}

	.a-table td {
		padding: 0.35rem 0.4rem;
		border-bottom: 1px solid var(--color-border);
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
		font-weight: var(--font-weight-semibold);
		font-family: var(--font-family-mono);
	}

	.at-desc {
		color: var(--color-text-muted);
	}

	.box-num {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.8rem;
		padding: 0.05rem 0.35rem;
		border-radius: var(--radius-sm);
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
		font-weight: var(--font-weight-bold);
		font-family: var(--font-family-mono);
		font-size: 0.8rem;
	}

	#footer-note {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		text-align: center;
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
			gap: var(--space-14, 3.5rem);
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
	}
</style>
