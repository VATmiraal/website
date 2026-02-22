<script>
	import { resolve } from '$app/paths';
</script>

<div id="page">
	<h2 id="custom-heading">Need a custom solution?</h2>
	<p id="custom-body">
		We work directly with organisations that need tailored VAT automation.
		Get in touch or explore what we offer.
	</p>
	<div id="cta-actions">
		<a id="contact-link" href="mailto:info@vatmiraal.be">Contact us</a>
		<a id="solutions-link" href={resolve('/custom_solutions')}>Learn more →</a>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		gap: 1.5rem;
		padding: 5rem 2rem;
		background: #0f0f0f;
		color: #f8f8f6;
	}

	#custom-heading {
		font-size: clamp(1.8rem, 3.5vw, 2.8rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		text-align: center;
		margin: 0;
		max-width: 600px;
	}

	#custom-body {
		font-size: 1.1em;
		text-align: center;
		color: rgba(248, 248, 246, 0.65);
		margin: 0;
		max-width: 480px;
		line-height: 1.65;
	}

	#cta-actions {
		display: flex;
		gap: 1.5rem;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}

	#contact-link {
		background: #f8f8f6;
		color: #0f0f0f;
		border: 2px solid #f8f8f6;
		border-radius: 6px;
		padding: 0.5em 1.4em;
		font-weight: 600;
		font-size: 1em;
		text-decoration: none;
		transition: background-color 0.22s ease, color 0.22s ease;
	}

	#contact-link:hover {
		background: transparent;
		color: #f8f8f6;
	}

	#solutions-link {
		color: rgba(248, 248, 246, 0.7);
		text-decoration: none;
		font-size: 1em;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	#solutions-link:hover {
		color: #f8f8f6;
	}

	@media (max-width: 768px) {
		#page {
			padding: 4rem 1.5rem;
		}
	}
</style>
