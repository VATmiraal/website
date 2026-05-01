<script>
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Coming Soon — VATmiraal</title>
	<meta
		name="description"
		content="The interactive VATmiraal demo is on its way. Get in touch for early access."
	/>
</svelte:head>

<div id="page">
	<h1>Coming soon!</h1>
	<p>
		The interactive demo is not yet publicly available. We're putting the finishing touches on it.
	</p>
	<p>
		Want early access? <a href={resolve('/request_a_demo')}>Request a demo</a> or
		<a href="mailto:info@vatmiraal.be">get in touch</a>.
	</p>
	<a id="back" href={resolve('/demo')}>&larr; Back to demo overview</a>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: 4rem 2rem;
		text-align: center;
		max-width: 560px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 800;
		letter-spacing: -0.04em;
		margin: 0 0 1rem;
	}

	p {
		font-size: 1.1em;
		color: rgba(15, 15, 15, 0.6);
		line-height: 1.65;
		margin: 0 0 0.75rem;
	}

	p a {
		color: #0f0f0f;
		font-weight: 600;
	}

	#back {
		margin-top: 2rem;
		color: rgba(15, 15, 15, 0.45);
		text-decoration: none;
		font-size: 0.95em;
		transition: color 0.2s ease;
	}

	#back:hover {
		color: #0f0f0f;
	}
</style>
