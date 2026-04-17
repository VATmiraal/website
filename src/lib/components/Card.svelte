<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ICardProps {
		as?: 'div' | 'article';
		padding?: 'md' | 'lg';
		interactive?: boolean;
		class?: string;
		children: Snippet;
	}

	let {
		as = 'div',
		padding = 'lg',
		interactive = false,
		class: className = '',
		children
	}: ICardProps = $props();

	const classes = $derived(
		['card', `card-pad-${padding}`, interactive ? 'card-interactive' : '', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if as === 'article'}
	<article class={classes}>
		{@render children()}
	</article>
{:else}
	<div class={classes}>
		{@render children()}
	</div>
{/if}

<style>
	.card {
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		transition:
			transform var(--duration-base) var(--easing),
			box-shadow var(--duration-base) var(--easing),
			border-color var(--duration-base) var(--easing);
	}

	.card-pad-md {
		padding: 1.4em 1.5em;
	}

	.card-pad-lg {
		padding: 1.75em 2em;
	}

	.card-interactive:hover {
		transform: translateY(-3px);
		border-color: var(--color-border-strong);
		box-shadow: var(--shadow-lg);
	}

	@media (max-width: 768px) {
		.card-interactive:hover {
			transform: none;
		}
	}
</style>
