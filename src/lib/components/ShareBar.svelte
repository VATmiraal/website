<script lang="ts">
	import ShareButton from './ShareButton.svelte';

	interface IShareBarProps {
		title: string;
		url: string;
		label?: string;
		compact?: boolean;
		hideLabel?: boolean;
		layout?: 'horizontal' | 'vertical';
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

	let { title, url, label, compact, hideLabel, layout = 'horizontal' }: IShareBarProps = $props();
</script>

<aside
	class="colophon"
	class:compact
	class:no-label={hideLabel}
	class:vertical={layout === 'vertical'}
	aria-label={label}
	data-testid="share-bar"
>
	{#if !hideLabel}
		<span class="label">Share.</span>
		{#if !compact}
			<hr class="rule" aria-hidden="true" />
		{/if}
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

	.colophon.vertical {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		gap: var(--space-3);
		align-items: start;
	}

	.colophon.vertical .rule {
		display: none;
	}

	.colophon.vertical .label {
		justify-self: center;
	}

	.colophon.vertical .channels {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-2);
	}

	.colophon.vertical .channels li:last-child:nth-child(odd) {
		grid-column: 1 / -1;
		justify-self: center;
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

	.colophon.no-label {
		grid-template-columns: auto;
		gap: var(--space-2);
	}
</style>
