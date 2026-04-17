<script lang="ts">
	import { resolve } from '$app/paths';

	type Route = Parameters<typeof resolve>[0];

	let {
		href,
		title,
		meta,
		excerpt
	}: { href: Route; title: string; meta: string; excerpt: string } = $props();
</script>

<a class="post" href={resolve(href)}>
	<h2>{title}</h2>
	<p class="post-meta">{meta}</p>
	<p class="post-excerpt">{excerpt}</p>
</a>

<style>
	.post {
		display: block;
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		padding: 1.75em 2em;
		text-decoration: none;
		color: inherit;
		transition:
			transform var(--duration-base) var(--easing),
			box-shadow var(--duration-base) var(--easing),
			border-color var(--duration-base) var(--easing);
	}

	.post:hover {
		transform: translateY(-3px);
		border-color: var(--color-border-strong);
		box-shadow: var(--shadow-lg);
	}

	.post h2 {
		font-size: 1.3em;
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		line-height: 1.25;
		margin: 0 0 var(--space-2);
	}

	.post-meta {
		font-size: var(--font-size-sm);
		color: var(--color-text-faint);
		margin: 0 0 var(--space-3);
	}

	.post-excerpt {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
		margin: 0;
	}

	@media (max-width: 768px) {
		.post {
			padding: 1.4em 1.5em;
		}

		.post:hover {
			transform: none;
			box-shadow: var(--shadow-md);
		}
	}
</style>
