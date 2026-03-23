<script lang="ts">
	import { resolve } from '$app/paths';
	import BlogPostCard from './components/blog-post-card.svelte';

	import type { IBlogIndexData } from '$lib/types';

	let { data }: { data: IBlogIndexData } = $props();
</script>

<svelte:head>
	<title>Blog &mdash; VATmiraal</title>
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
	}
</style>
