<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Snippet } from 'svelte';

	type Route = Parameters<typeof resolve>[0];

	let {
		title,
		meta,
		backHref,
		backLabel,
		children
	}: {
		title: string;
		meta: string;
		backHref: Route;
		backLabel: string;
		children: Snippet;
	} = $props();
</script>

<article id="page">
	<header id="hero">
		<h1>{title}</h1>
		<p id="meta">{meta}</p>
	</header>

	{@render children()}

	<a id="back-blog" href={resolve(backHref)}>&larr; {backLabel}</a>
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

	:global(h2) {
		font-size: 1.5em;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin: 0 0 1rem;
	}

	:global(.prose) {
		margin-bottom: 0;
	}

	:global(.prose p) {
		font-size: 1.05em;
		line-height: 1.75;
		color: rgba(15, 15, 15, 0.85);
		margin: 0 0 1.25em;
	}

	:global(.prose p:last-child) {
		margin-bottom: 0;
	}

	:global(.prose ul) {
		margin: 0 0 1.25em;
		padding: 0 0 0 1.5em;
	}

	:global(.prose li) {
		font-size: 1.05em;
		line-height: 1.75;
		color: rgba(15, 15, 15, 0.85);
		margin-bottom: 0.5em;
	}

	:global(.prose strong) {
		color: #0f0f0f;
	}

	:global(.prose em) {
		font-style: italic;
	}

	:global(.closing p) {
		font-size: 1.1em;
		font-weight: 500;
		color: #0f0f0f;
	}

	:global(.closing a) {
		color: #0f0f0f;
		font-weight: 600;
	}

	:global(hr) {
		border: none;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
		margin: 2.5rem 0;
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

	@media (max-width: 768px) {
		#page {
			padding: 4rem 1.5rem 4rem;
		}

		h1 {
			font-size: clamp(1.6rem, 7vw, 2.2rem);
		}

		:global(h2) {
			font-size: 1.3em;
		}
	}
</style>
