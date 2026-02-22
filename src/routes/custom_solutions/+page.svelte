<script>
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Custom Solutions — VATmiraal</title>
</svelte:head>

<div id="page">
	<div id="hero">
		<h1>Custom VAT Automation Solutions</h1>
		<p id="intro">
			We partner directly with organisations that need VAT automation
			tailored to their stack, jurisdiction, and scale.
		</p>
	</div>

	<div id="features">
		<div class="feature">
			<h3>Deep Integration</h3>
			<p>Connect VATmiraal to your existing ERP, accounting software, or data pipeline — no rip-and-replace required.</p>
		</div>
		<div class="feature">
			<h3>Bespoke Rule Engines</h3>
			<p>We build jurisdiction-specific and transaction-specific VAT logic tuned to your business model.</p>
		</div>
		<div class="feature">
			<h3>Explainable at Every Step</h3>
			<p>Every VAT decision comes with a human-readable explanation — critical for audit trails and compliance teams.</p>
		</div>
	</div>

	<div id="cta">
		<p>Ready to explore a custom engagement?</p>
		<a id="contact-link" href="mailto:info@vatmiraal.be">Get in touch</a>
		<a id="back-home" href={resolve('/')}>← Back to home</a>
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
		max-width: 780px;
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

	#features {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
	}

	.feature {
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.09);
		border-radius: 10px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
		padding: 1.75em 2em;
	}

	.feature h3 {
		font-size: 1.15em;
		font-weight: 700;
		letter-spacing: -0.01em;
		margin: 0 0 0.5em;
	}

	.feature p {
		font-size: 1em;
		color: rgba(15, 15, 15, 0.7);
		line-height: 1.65;
		margin: 0;
	}

	#cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
		text-align: center;
	}

	#cta > p {
		font-size: 1.15em;
		font-weight: 500;
		margin: 0;
	}

	#contact-link {
		background: #0f0f0f;
		color: #f8f8f6;
		border: 2px solid #0f0f0f;
		border-radius: 6px;
		padding: 0.55em 1.5em;
		font-weight: 600;
		font-size: 1em;
		text-decoration: none;
		transition: background-color 0.22s ease, color 0.22s ease;
	}

	#contact-link:hover {
		background: transparent;
		color: #0f0f0f;
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

		.feature {
			padding: 1.4em 1.5em;
		}
	}
</style>
