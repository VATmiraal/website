<script>
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Blog &mdash; VATmiraal</title>
</svelte:head>

<div id="page">
	<h1>Blog</h1>

	<div id="posts">
		<a class="post" href={resolve('/blog/introducing-vatmiraal')}>
			<h2>Introducing VATmiraal</h2>
			<p class="post-meta">4 min read &middot; March 2026</p>
			<p class="post-excerpt">
				Three tools built on the same rules engine: the Assistant, the Analyser, and Advanced
				Booking Templates. Formal logic and constraint solving for VAT compliance.
			</p>
		</a>
		<a class="post" href={resolve('/blog/from-taxman-to-vatmiraal')}>
			<h2>From TAXMAN to VATmiraal: Fifty Years of Teaching Machines the Law</h2>
			<p class="post-meta">5 min read &middot; March 2026</p>
			<p class="post-excerpt">
				A history of computational legal reasoning, from symbolic AI and expert systems to LLMs and
				neuro-symbolic architectures, and how VATmiraal fits in.
			</p>
		</a>
	</div>

	<a id="back-home" href={resolve('/')}>&#8592; Back to home</a>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: 6rem 2rem 5rem;
		gap: 4rem;
		max-width: 780px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-size: clamp(2rem, 4.5vw, 3.2rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.08;
		margin: 0;
	}

	#posts {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
	}

	.post {
		display: block;
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.09);
		border-radius: 10px;
		box-shadow:
			0 2px 8px rgba(0, 0, 0, 0.06),
			0 1px 2px rgba(0, 0, 0, 0.04);
		padding: 1.75em 2em;
		text-decoration: none;
		color: inherit;
		transition:
			transform 0.22s ease,
			box-shadow 0.22s ease;
	}

	.post:hover {
		transform: translateY(-3px);
		box-shadow:
			0 8px 28px rgba(0, 0, 0, 0.1),
			0 2px 6px rgba(0, 0, 0, 0.06);
	}

	.post h2 {
		font-size: 1.3em;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.25;
		margin: 0 0 0.4em;
	}

	.post-meta {
		font-size: 0.9em;
		color: rgba(15, 15, 15, 0.45);
		margin: 0 0 0.75em;
	}

	.post-excerpt {
		font-size: 1em;
		color: rgba(15, 15, 15, 0.7);
		line-height: 1.65;
		margin: 0;
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
			gap: 3rem;
		}

		.post {
			padding: 1.4em 1.5em;
		}

		.post:hover {
			transform: none;
			box-shadow:
				0 2px 8px rgba(0, 0, 0, 0.06),
				0 1px 2px rgba(0, 0, 0, 0.04);
		}
	}
</style>
