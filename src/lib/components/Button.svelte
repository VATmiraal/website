<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IButtonCommonProps {
		variant?: 'primary' | 'secondary' | 'ghost';
		tone?: 'light' | 'dark';
		size?: 'md' | 'lg';
		onclick?: (e: MouseEvent) => void;
		class?: string;
		children: Snippet;
	}
	type IButtonProps = IButtonCommonProps &
		(
			| { href: string; external?: boolean; type?: never; disabled?: never }
			| { href?: undefined; external?: never; type?: 'button' | 'submit'; disabled?: boolean }
		);

	let {
		variant = 'primary',
		tone = 'light',
		size = 'md',
		href,
		external = false,
		type = 'button',
		disabled = false,
		onclick,
		class: className = '',
		children
	}: IButtonProps = $props();

	const classes = $derived(
		['btn', `btn-${variant}`, `btn-${tone}`, `btn-${size}`, className].filter(Boolean).join(' ')
	);
</script>

{#if href}
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a
		{href}
		class={classes}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
		{onclick}
	>
		{@render children()}
	</a>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
{:else}
	<button class={classes} {type} {disabled} {onclick}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		font-family: var(--font-family);
		font-weight: var(--font-weight-semibold);
		line-height: 1.2;
		text-decoration: none;
		border: 2px solid transparent;
		border-radius: var(--radius-md);
		cursor: pointer;
		transition:
			background-color var(--duration-base) var(--easing),
			color var(--duration-base) var(--easing),
			border-color var(--duration-base) var(--easing),
			transform var(--duration-base) var(--easing),
			box-shadow var(--duration-base) var(--easing);
		white-space: nowrap;
	}

	.btn[disabled] {
		opacity: 0.45;
		cursor: not-allowed;
	}

	.btn-md {
		padding: 0.6em 1.5em;
		font-size: var(--font-size-base);
	}

	.btn-lg {
		padding: 0.75em 1.85em;
		font-size: var(--font-size-md);
	}

	/* Primary — light tone */
	.btn-primary.btn-light {
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
		border-color: var(--color-bg-inverted);
	}
	.btn-primary.btn-light:hover:not([disabled]) {
		background: var(--color-accent);
		border-color: var(--color-accent);
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
	}
	.btn-primary.btn-light:focus-visible {
		outline-color: var(--color-accent);
		outline-offset: 3px;
		box-shadow: 0 0 0 4px var(--color-accent-tint);
	}

	/* Primary — dark tone (inverted) */
	.btn-primary.btn-dark {
		background: var(--color-bg);
		color: var(--color-text);
		border-color: var(--color-bg);
	}
	.btn-primary.btn-dark:hover:not([disabled]) {
		background: var(--color-bg-elevated);
		border-color: var(--color-bg-elevated);
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
	}
	.btn-primary.btn-dark:focus-visible {
		outline-color: var(--color-accent-on-dark);
		outline-offset: 3px;
	}

	/* Secondary — light tone */
	.btn-secondary.btn-light {
		background: transparent;
		color: var(--color-accent);
		border-color: var(--color-accent);
	}
	.btn-secondary.btn-light:hover:not([disabled]) {
		background: var(--color-accent);
		color: var(--color-text-on-dark);
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	/* Secondary — dark tone */
	.btn-secondary.btn-dark {
		background: transparent;
		color: var(--color-text-on-dark);
		border-color: var(--color-text-on-dark);
	}
	.btn-secondary.btn-dark:hover:not([disabled]) {
		background: var(--color-text-on-dark);
		color: var(--color-text);
		transform: translateY(-2px);
	}

	/* Ghost — light tone */
	.btn-ghost.btn-light {
		background: transparent;
		color: var(--color-text-muted);
		border-color: transparent;
		padding-left: var(--space-2);
		padding-right: var(--space-2);
	}
	.btn-ghost.btn-light:hover:not([disabled]) {
		color: var(--color-accent);
	}

	/* Ghost — dark tone */
	.btn-ghost.btn-dark {
		background: transparent;
		color: var(--color-text-on-dark-muted);
		border-color: transparent;
		padding-left: var(--space-2);
		padding-right: var(--space-2);
	}
	.btn-ghost.btn-dark:hover:not([disabled]) {
		color: var(--color-accent-on-dark);
	}

	@media (max-width: 768px) {
		.btn:hover:not([disabled]) {
			transform: none;
		}
	}
</style>
