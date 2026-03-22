<script>
	import { resolve } from '$app/paths';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: 'Introducing VATmiraal',
		datePublished: '2026-03-22',
		author: {
			'@type': 'Person',
			name: 'Jan De Meyer'
		},
		publisher: { '@id': 'https://vatmiraal.be/#organization' },
		url: 'https://vatmiraal.be/blog/introducing-vatmiraal',
		description:
			'Three tools built on the same rules engine: the Assistant, the Analyser, and Advanced Booking Templates. Formal logic and constraint solving for VAT compliance.'
	};
</script>

<svelte:head>
	<title>Introducing VATmiraal &mdash; VATmiraal Blog</title>
	<meta
		name="description"
		content="Three tools built on the same rules engine: the Assistant, the Analyser, and Advanced Booking Templates."
	/>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
</svelte:head>

<article id="page">
	<header id="hero">
		<h1>Introducing VATmiraal</h1>
		<p id="meta">4 min read &middot; March 2026</p>
	</header>

	<section class="prose">
		<p>
			Every VAT determination is a chain of legal reasoning. Transaction type, place of supply,
			exemptions, debtor, declaration box. Each step depends on the last, and each must trace back
			to a specific article of the law.
		</p>
		<p>
			In practice, that reasoning lives in people&rsquo;s heads. Or in spreadsheets. Or in tools
			that give you an answer but not the &ldquo;why.&rdquo;
		</p>
		<p>
			That&rsquo;s the problem we&rsquo;re solving with VATmiraal. Today we&rsquo;re announcing
			three tools built on the same rules engine:
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The Assistant</h2>
		<p>
			A guided questionnaire that walks you through a VAT scenario step by step. It adapts
			dynamically: your answers determine which questions come next, skipping what&rsquo;s
			irrelevant. At the end, you get a full VAT determination with legal references. No VAT
			expertise needed to start. The engine knows which questions to ask.
		</p>
	</section>

	<section class="prose">
		<h2>The Analyser</h2>
		<p>
			Takes structured transaction data and works with what&rsquo;s there. When critical facts are
			missing (party establishments, transport details, object classification), it asks for them.
			Given complete input, it returns the full analysis: classification, place of supply,
			exemption, debtor, and declaration boxes. Every conclusion cites the specific national VAT article
			and its EU Directive equivalent.
		</p>

		<p class="example-intro">Here is what the analyser produces for a single transaction:</p>

		<!-- ═══ STATIC ANALYSER EXAMPLE ═══ -->
		<div class="demo">
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
										>VAT due on boxes 01&ndash;03</td
									><td class="at-amt">&euro;1,050</td></tr
								>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="prose">
		<h2>Advanced Booking Templates</h2>
		<p>
			Define linear relations between any set of accounts. Instead of fixed amounts, you express the
			relationship as a formula: if one value changes, the others should adjust accordingly. During
			audit, the engine checks whether the actual bookings satisfy these constraints, flagging any
			inconsistencies. This also applies to deductibility calculations for mixed or partial taxable
			entities. Conventional accounting software doesn&rsquo;t support this.
		</p>
	</section>

	<hr />

	<section class="prose">
		<p>
			All three tools run on the same foundation: formal logic and constraint solving. Not a
			statistical model. Deterministic rules that can be reviewed, audited, and challenged. The same
			constraint engine that powers the booking templates also supports consistency checking across
			taxable amounts, tariffs, pro-rata deduction rates, margin scheme calculations, and capital
			goods adjustments.
		</p>
	</section>

	<section class="prose closing">
		<p>
			Beta is open. If you work in VAT compliance and want to try any of these tools,
			<a href="mailto:info@vatmiraal.be">reach out</a>.
		</p>
	</section>

	<div class="disclaimer">
		Disclaimer: The tools and outputs presented on this site are for informational and demonstration
		purposes only and do not constitute legally binding tax advice. Always consult a qualified tax
		advisor for decisions regarding your specific situation.
	</div>

	<a id="back-blog" href={resolve('/blog')}>&larr; Back to blog</a>
</article>

<style>
	#page {
		max-width: 700px;
		margin: 0 auto;
		padding: 6rem 2rem 5rem;
		box-sizing: border-box;
	}

	#hero {
		margin-bottom: 3rem;
	}

	h1 {
		font-size: clamp(2rem, 4.5vw, 2.8rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.12;
		margin: 0 0 0.75rem;
	}

	#meta {
		font-size: 0.95em;
		color: rgba(15, 15, 15, 0.45);
		margin: 0;
	}

	h2 {
		font-size: 1.5em;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin: 0 0 1rem;
	}

	.prose {
		margin-bottom: 0;
	}

	.prose p {
		font-size: 1.05em;
		line-height: 1.75;
		color: rgba(15, 15, 15, 0.85);
		margin: 0 0 1.25em;
	}

	.prose p:last-child {
		margin-bottom: 0;
	}

	.prose strong {
		color: #0f0f0f;
	}

	.closing p {
		font-size: 1.1em;
		font-weight: 500;
		color: #0f0f0f;
	}

	.closing a {
		color: #0f0f0f;
		font-weight: 600;
	}

	hr {
		border: none;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
		margin: 2.5rem 0;
	}

	.disclaimer {
		margin-top: 2.5rem;
		padding: 1rem 1.25rem;
		background: rgba(0, 0, 0, 0.03);
		border-left: 3px solid rgba(0, 0, 0, 0.15);
		font-size: 0.85em;
		color: rgba(15, 15, 15, 0.5);
		line-height: 1.6;
	}

	#back-blog {
		display: inline-block;
		margin-top: 2rem;
		color: rgba(15, 15, 15, 0.5);
		text-decoration: none;
		font-size: 0.95em;
		transition: color 0.2s ease;
	}

	#back-blog:hover {
		color: #0f0f0f;
	}

	/* ── Analyser example ── */
	.example-intro {
		font-style: italic;
		color: rgba(15, 15, 15, 0.5);
	}

	.demo {
		font-size: 0.82rem;
		color: #111827;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
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

	@media (max-width: 768px) {
		#page {
			padding: 4rem 1.5rem 4rem;
		}

		h1 {
			font-size: clamp(1.6rem, 7vw, 2.2rem);
		}

		h2 {
			font-size: 1.3em;
		}

		.a-columns {
			grid-template-columns: 1fr;
		}

		.a-vatid-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
