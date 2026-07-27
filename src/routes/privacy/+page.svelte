<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { tr } from '$lib/translation/i18n';

	let m = $derived(tr());
</script>

<svelte:head>
	<title>{m.priv.metaTitle}</title>
	<meta name="description" content={m.priv.metaDescription} />
</svelte:head>

<div id="page">
	<SectionHeader level="h1" kicker={m.priv.kicker} title={m.priv.title} subtitle={m.priv.intro} />

	<p id="updated">{m.priv.updatedLabel}: {m.priv.updated}</p>

	<div id="content">
		{#each m.priv.sections as section (section.heading)}
			<section>
				<h2>{section.heading}</h2>
				{#if section.body}<p>{section.body}</p>{/if}
				{#if section.items}
					<ul>
						{#each section.items as item (item.name)}
							<li><strong>{item.name}</strong> {item.body}</li>
						{/each}
					</ul>
				{/if}
				{#if section.note}<p>{section.note}</p>{/if}
			</section>
		{/each}
	</div>

	<div id="cta">
		<Button href={resolve('/')} variant="ghost">{m.priv.back}</Button>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		gap: var(--space-8);
		max-width: var(--container-narrow);
		margin: 0 auto;
		box-sizing: border-box;
	}

	#updated {
		margin: 0;
		align-self: flex-start;
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	#content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space-10);
	}

	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	h2 {
		margin: 0;
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-tight);
	}

	p {
		margin: 0;
		font-size: var(--font-size-base);
		line-height: var(--line-height-base);
		color: var(--color-text);
	}

	ul {
		margin: 0;
		padding-left: var(--space-6);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	li {
		font-size: var(--font-size-base);
		line-height: var(--line-height-base);
	}

	li strong {
		font-weight: var(--font-weight-semibold);
	}

	#cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		text-align: center;
		margin-top: var(--space-4);
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
			gap: var(--space-6);
		}
	}
</style>
