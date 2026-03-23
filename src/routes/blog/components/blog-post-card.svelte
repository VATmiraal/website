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

	@media (max-width: 768px) {
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
