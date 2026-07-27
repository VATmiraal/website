<script lang="ts">
	import { page } from '$app/state';
	import { invalidateAll } from '$app/navigation';

	let { lang }: { lang: string } = $props();

	let code = $derived(lang.toLowerCase());
	let active = $derived(page.data.lang === code);

	async function setLanguage(): Promise<void> {
		document.cookie = `lang=${code}; path=/; max-age=31536000; SameSite=Lax`;
		await invalidateAll();
	}
</script>

<button type="button" class:active aria-pressed={active} onclick={setLanguage}>{lang}</button>

<style>
	button {
		border: none;
		padding: 0.4em 0.85em;
		font-family: var(--font-family);
		font-size: 0.8rem;
		font-weight: var(--font-weight-bold);
		letter-spacing: 0.04em;
		cursor: pointer;
		background: transparent;
		color: var(--color-text-muted);
		transition:
			background var(--duration-base) var(--easing),
			color var(--duration-base) var(--easing);
	}

	button:hover {
		color: var(--color-text);
	}

	button.active {
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
	}
</style>
