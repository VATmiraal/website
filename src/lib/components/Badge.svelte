<script lang="ts">
	import type { Snippet } from 'svelte';

	type Tone = 'neutral' | 'available' | 'soon' | 'accent';

	let { tone = 'neutral', children }: { tone?: Tone; children: Snippet } = $props();
</script>

<span class="badge {tone}">{@render children()}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: 0.3em 0.75em;
		border-radius: var(--radius-pill);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-snug);
		white-space: nowrap;
		line-height: 1;
	}

	.neutral {
		background: var(--color-bg-subtle);
		color: var(--color-text-muted);
		border: 1px solid var(--color-border-strong);
	}

	.available {
		background: var(--color-proof-tint);
		color: var(--color-proof);
	}

	.soon {
		background: var(--color-attention-tint);
		color: var(--color-attention);
	}

	.accent {
		background: var(--color-accent-tint);
		color: var(--color-accent);
	}
</style>
