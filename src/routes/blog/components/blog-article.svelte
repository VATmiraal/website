<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
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

	<div id="back-wrap">
		<Button href={resolve(backHref)} variant="ghost">← {backLabel}</Button>
	</div>
</article>

<style>
	#page {
		max-width: 700px;
		margin: 0 auto;
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		box-sizing: border-box;
	}

	#hero {
		margin-bottom: var(--space-12);
	}

	h1 {
		font-size: clamp(2rem, 4.5vw, 2.8rem);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: 1.12;
		margin: 0 0 var(--space-3);
	}

	#meta {
		font-size: var(--font-size-sm);
		color: var(--color-text-faint);
		margin: 0;
	}

	#back-wrap {
		margin-top: var(--space-8);
	}

	/* Prose styles applied to snippet-rendered article content (defined in the parent page's scope) */
	:global(h2) {
		font-size: 1.5em;
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		line-height: 1.2;
		margin: 0 0 var(--space-4);
	}

	:global(.prose) {
		margin-bottom: 0;
	}

	:global(.prose p) {
		font-size: 1.05em;
		line-height: 1.75;
		color: var(--color-text);
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
		color: var(--color-text);
		margin-bottom: 0.5em;
	}

	:global(.prose strong) {
		color: var(--color-text);
	}

	:global(.prose em) {
		font-style: italic;
	}

	:global(.closing p) {
		font-size: 1.1em;
		font-weight: var(--font-weight-medium);
		color: var(--color-text);
	}

	:global(.closing a) {
		color: var(--color-accent);
		font-weight: var(--font-weight-semibold);
	}

	:global(hr) {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: var(--space-10) 0;
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
		}

		h1 {
			font-size: clamp(1.6rem, 7vw, 2.2rem);
		}

		:global(h2) {
			font-size: 1.3em;
		}
	}
</style>
