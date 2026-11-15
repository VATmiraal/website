<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import { tr, localePath } from '$lib/translation/i18n';

	let m = $derived(tr());
	let is404 = $derived(page.status === 404);
	let heading = $derived(is404 ? m.common.notFound : m.common.error);
</script>

<svelte:head>
	<title>{page.status} — VATmiraal</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section id="error">
	<span class="status">{page.status}</span>
	<h1>{heading}</h1>
	{#if is404}
		<p>{m.common.notFoundBody}</p>
	{:else}
		<p>
			{m.common.errorReach}
			<a href="mailto:info@vatmiraal.be">info@vatmiraal.be</a>
			{m.common.or}
			<a href="https://www.linkedin.com/company/vatmiraal" target="_blank" rel="noopener noreferrer"
				>LinkedIn</a
			>.
		</p>
	{/if}
	<Button href={localePath('/')} variant="primary">{m.common.backHome}</Button>
</section>

<style>
	#error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: var(--space-5);
		min-height: calc(100vh - var(--header-total-height));
		padding: var(--space-24) var(--section-padding-x);
	}

	.status {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		color: var(--color-text-faint);
	}

	h1 {
		margin: 0;
		max-width: 640px;
		font-size: var(--h2-section);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
	}

	p {
		margin: 0;
		max-width: 480px;
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
	}
</style>
