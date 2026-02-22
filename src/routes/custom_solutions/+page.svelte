<script>
	import { resolve } from '$app/paths';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Custom VAT Automation Solutions',
		url: 'https://vatmiraal.be/custom_solutions',
		description:
			'Tailored VAT automation for organisations needing deep ERP integration, bespoke rule engines, and explainable VAT decisions.',
		serviceType: 'Tax Technology Consulting',
		provider: { '@id': 'https://vatmiraal.be/#organization' },
		contactPoint: {
			'@type': 'ContactPoint',
			email: 'info@vatmiraal.be',
			contactType: 'sales'
		}
	};
</script>

<svelte:head>
	<title>Custom Solutions — VATmiraal</title>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
</svelte:head>

<div id="page">
	<div id="hero">
		<h1>Custom VAT Automation Solutions</h1>
		<p id="intro">
			We partner directly with organisations that need VAT automation tailored to their stack,
			jurisdiction, and scale.
		</p>
	</div>

	<div id="process">
		<div id="steps">
			<div class="step">
				<span class="step-number">1</span>
				<div class="step-body">
					<h3>Discovery</h3>
					<p>
						We start with a call to understand your transaction types, data sources, and VAT pain
						points, no commitment required.
					</p>
				</div>
			</div>
			<div class="step">
				<span class="step-number">2</span>
				<div class="step-body">
					<h3>Scoped proposal</h3>
					<p>
						We define the scope, deliverables, and timeline together. Pricing is variable and tied
						to the complexity of your use case.
					</p>
				</div>
			</div>
			<div class="step">
				<span class="step-number">3</span>
				<div class="step-body">
					<h3>Build and iterate</h3>
					<p>
						We build alongside your team with regular reviews. You see progress at every stage and
						can steer the direction as requirements evolve.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div id="cta">
		<p>Pricing is scoped per engagement, reach out to start the conversation.</p>
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

	#process {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 100%;
		text-align: center;
	}

	#steps {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 1.25em;
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.09);
		border-radius: 10px;
		box-shadow:
			0 2px 8px rgba(0, 0, 0, 0.06),
			0 1px 2px rgba(0, 0, 0, 0.04);
		padding: 1.75em 2em;
		text-align: left;
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

	.step-body h3 {
		font-size: 1.15em;
		font-weight: 700;
		letter-spacing: -0.01em;
		margin: 0 0 0.4em;
	}

	.step-body p {
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
		transition:
			background-color 0.22s ease,
			color 0.22s ease;
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

		.step {
			padding: 1.4em 1.5em;
		}
	}
</style>
