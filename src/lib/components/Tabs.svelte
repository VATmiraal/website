<script lang="ts">
	interface ITab {
		id: string;
		label: string;
	}

	let {
		tabs,
		active = $bindable(tabs[0]?.id),
		label = 'View'
	}: { tabs: ITab[]; active?: string; label?: string } = $props();

	let buttons: HTMLButtonElement[] = $state([]);

	function onKeydown(event: KeyboardEvent, index: number) {
		if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
		event.preventDefault();
		const delta = event.key === 'ArrowRight' ? 1 : -1;
		const next = (index + delta + tabs.length) % tabs.length;
		active = tabs[next].id;
		buttons[next]?.focus();
	}
</script>

<div class="tabs" role="tablist" aria-label={label}>
	{#each tabs as tab, i (tab.id)}
		<button
			bind:this={buttons[i]}
			role="tab"
			type="button"
			aria-selected={active === tab.id}
			tabindex={active === tab.id ? 0 : -1}
			class:active={active === tab.id}
			onclick={() => (active = tab.id)}
			onkeydown={(e) => onKeydown(e, i)}
		>
			{tab.label}
		</button>
	{/each}
</div>

<style>
	.tabs {
		display: inline-flex;
		gap: var(--space-1);
		padding: var(--space-1);
		background: var(--color-bg-subtle);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
	}

	button {
		border: none;
		background: transparent;
		padding: 0.35em 0.9em;
		border-radius: var(--radius-sm);
		font-family: var(--font-family);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-muted);
		cursor: pointer;
		transition:
			background var(--duration-base) var(--easing),
			color var(--duration-base) var(--easing);
	}

	button:hover {
		color: var(--color-text);
	}

	button.active {
		background: var(--color-bg-elevated);
		color: var(--color-text);
		box-shadow: var(--shadow-sm);
	}
</style>
