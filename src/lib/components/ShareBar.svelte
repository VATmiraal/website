<script lang="ts">
	import ShareButton from './ShareButton.svelte';

	interface IShareBarProps {
		title: string;
		url: string;
		label?: string;
		compact?: boolean;
	}

	const PLATFORMS = [
		'linkedin',
		'bluesky',
		'mastodon',
		'reddit',
		'hackernews',
		'whatsapp',
		'email'
	] as const;

	let { title, url, label, compact }: IShareBarProps = $props();
</script>

<aside class="colophon" class:compact aria-label={label}>
	<span class="label">Share.</span>
	{#if !compact}
		<hr class="rule" aria-hidden="true" />
	{/if}
	<ul class="channels">
		{#each PLATFORMS as platform, i (platform)}
			<li style="--i: {i};">
				<ShareButton {platform} {title} {url} />
			</li>
		{/each}
	</ul>
</aside>

<style>
	.colophon {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: var(--space-4);
		padding: var(--space-6) 0;
		margin: var(--space-8) 0 var(--space-10);
	}

	.label {
		font-size: var(--font-size-xs);
		letter-spacing: var(--letter-spacing-wide);
		font-weight: var(--font-weight-semibold);
		text-transform: uppercase;
		color: var(--color-text-faint);
		white-space: nowrap;
	}

	.rule {
		border: none;
		border-top: 1px solid var(--color-border-strong);
		margin: 0;
		width: 100%;
	}

	.channels {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: var(--space-2);
	}

	.channels li {
		animation: rise var(--duration-slow) var(--easing) both;
		animation-delay: calc(var(--i) * 60ms);
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 640px) {
		.colophon {
			grid-template-columns: 1fr;
			gap: var(--space-3);
		}

		.rule {
			display: none;
		}

		.channels {
			flex-wrap: wrap;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.channels li {
			animation: none;
		}
	}

	.colophon.compact {
		grid-template-columns: auto;
		padding: 0;
		margin: 0;
		gap: var(--space-2);
	}

	.colophon.compact .label {
		justify-self: center;
	}

	.colophon.compact .channels {
		flex-wrap: nowrap;
	}
</style>
