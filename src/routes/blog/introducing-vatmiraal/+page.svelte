<script lang="ts">
	import BlogArticle from '../components/blog-article.svelte';
	import type { IBlogPostData } from '$lib/types';

	let { data }: { data: IBlogPostData } = $props();

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

<BlogArticle
	title="Introducing VATmiraal"
	meta={`${data.readingTime} min read · March 2026`}
	backHref="/blog"
	backLabel="Back to blog"
>
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
			exemption, debtor, and declaration boxes. Every conclusion cites the specific national VAT
			article and its EU Directive equivalent.
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
</BlogArticle>

<style>
	.disclaimer {
		margin-top: var(--space-10);
		padding: var(--space-4) var(--space-5);
		background: var(--color-bg-subtle);
		border-left: 3px solid var(--color-border-strong);
		font-size: var(--font-size-sm);
		color: var(--color-text-subtle);
		line-height: var(--line-height-base);
	}

	.example-intro {
		font-style: italic;
		color: var(--color-text-subtle);
	}

	.demo {
		font-size: 0.82rem;
		color: var(--color-text);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
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

	@media (max-width: 768px) {
		.a-columns {
			grid-template-columns: 1fr;
		}

		.a-vatid-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
