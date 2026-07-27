<script lang="ts">
	let { code, label }: { code: string; label?: string } = $props();
</script>

<div class="code-block">
	{#if label}
		<div class="code-label">{label}</div>
	{/if}
	<pre><code>{code}</code></pre>
</div>

<style>
	.code-block {
		background: var(--color-bg-inverted);
		border-radius: var(--radius-md);
		overflow: hidden;
		min-width: 0;
		max-width: 100%;
	}

	.code-label {
		padding: var(--space-2) var(--space-4);
		border-bottom: 1px solid var(--color-border-on-dark);
		color: var(--color-text-on-dark-faint);
		font-family: var(--font-family-mono);
		font-size: var(--font-size-xs);
		letter-spacing: var(--letter-spacing-snug);
	}

	pre {
		margin: 0;
		padding: var(--space-5);
		overflow-x: auto;
	}

	code {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-sm);
		line-height: var(--line-height-snug);
		color: var(--color-text-on-dark);
		white-space: pre;
	}
</style>
