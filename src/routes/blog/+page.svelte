<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import BlogPostCard from './components/blog-post-card.svelte';

	import type { IBlogIndexData } from '$lib/types';

	let { data }: { data: IBlogIndexData } = $props();
</script>

<svelte:head>
	<title>Blog — VATmiraal</title>
	<meta
		name="description"
		content="Articles on explainable VAT, computational legal reasoning, and the tools we're building at VATmiraal."
	/>
</svelte:head>

<div id="page">
	<h1>Blog</h1>

	<div id="posts">
		{#each data.posts as { slug, title, date, excerpt, readingTime } (slug)}
			<BlogPostCard
				href={`/blog/${slug}` as Parameters<typeof resolve>[0]}
				{title}
				meta={`${readingTime} min read · ${date}`}
				{excerpt}
			/>
		{/each}
	</div>

	<Button href={resolve('/')} variant="ghost">← Back to home</Button>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		gap: var(--space-16);
		max-width: var(--container-narrow);
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-size: var(--h1-secondary);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
		margin: 0;
	}

	#posts {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		width: 100%;
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
			gap: var(--space-12);
		}
	}
</style>
