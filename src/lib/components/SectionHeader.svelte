<script lang="ts">
	interface ISectionHeaderProps {
		kicker?: string;
		title: string;
		subtitle?: string;
		align?: 'center' | 'start';
		level?: 'h1' | 'h2';
		tone?: 'light' | 'dark';
		size?: 'hero' | 'secondary' | 'section';
		class?: string;
	}

	let {
		kicker,
		title,
		subtitle,
		align = 'center',
		level = 'h2',
		tone = 'light',
		size,
		class: className = ''
	}: ISectionHeaderProps = $props();

	const resolvedSize = $derived(size ?? (level === 'h1' ? 'hero' : 'section'));
	const classes = $derived(
		['section-header', `align-${align}`, `tone-${tone}`, `size-${resolvedSize}`, className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<header class={classes}>
	{#if kicker}
		<span class="kicker">{kicker}</span>
	{/if}
	{#if level === 'h1'}
		<h1>{title}</h1>
	{:else}
		<h2>{title}</h2>
	{/if}
	{#if subtitle}
		<p class="subtitle">{subtitle}</p>
	{/if}
</header>

<style>
	.section-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: var(--container-narrow);
	}

	.align-center {
		align-items: center;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.align-start {
		align-items: flex-start;
		text-align: left;
	}

	.kicker {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.tone-dark .kicker {
		color: var(--color-text-on-dark-faint);
	}

	h1,
	h2 {
		margin: 0;
		font-weight: var(--font-weight-heavy);
		line-height: var(--line-height-tight);
		color: var(--color-text);
	}

	.tone-dark h1,
	.tone-dark h2 {
		color: var(--color-text-on-dark);
	}

	.size-hero h1 {
		font-size: var(--h1-hero);
	}

	.size-secondary h1 {
		font-size: var(--h1-secondary);
	}

	.size-section h2 {
		font-size: var(--h2-section);
	}

	.subtitle {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		max-width: 42rem;
	}

	.tone-dark .subtitle {
		color: var(--color-text-on-dark-muted);
	}
</style>
