<script>
	import { resolve } from '$app/paths';
</script>

<div id="page">
	<h1>Blog</h1>
	<p>We're working on it — check back soon.</p>
	<a id="back-home" href={resolve('/')}>← Back to home</a>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		gap: 1.5rem;
	}

	h1 {
		font-size: 3em;
		font-weight: 700;
		margin: 0;
	}

	p {
		font-size: 1.2em;
		color: rgba(15, 15, 15, 0.65);
		margin: 0;
	}

	#back-home {
		color: #0f0f0f;
		text-decoration: none;
		font-weight: 500;
		font-size: 1em;
		transition: opacity 0.2s ease;
		margin-top: 0.5rem;
	}

	#back-home:hover {
		opacity: 0.55;
	}
</style>
