<script lang="ts">
	import { resolve } from '$app/paths';
	import { tr } from '$lib/translation/i18n';
	import Button from '$lib/components/Button.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';

	let m = $derived(tr());

	const API_SNIPPET = `{
  "box": "44",
  "amount": 7200,
  "legal_reference": {
    "code": "WBTW", "article": "21"
  }
}`;
</script>

<svelte:head>
	<title>{m.prod.title} — VATmiraal</title>
	<meta name="description" content={m.prod.sub} />
</svelte:head>

<section class="page">
	<SectionHeader kicker={m.prod.kicker} level="h1" title={m.prod.title} subtitle={m.prod.sub} />

	<div class="cards">
		<article class="card">
			<div class="media">
				<CodeBlock label="POST /box-analysis → 200 OK" code={API_SNIPPET} />
			</div>
			<Badge tone="available">{m.prod.apiBadge}</Badge>
			<h2>{m.prod.apiTitle}</h2>
			<p>{m.prod.apiDesc}</p>
			<Button href={resolve('/products/api')} variant="primary" size="lg">{m.prod.apiCta}</Button>
		</article>

		<article class="card">
			<div class="media">
				<img src="/images/vatmiraal_platform/platform.png" alt={m.prod.platTitle} />
			</div>
			<Badge tone="soon">{m.prod.platBadge}</Badge>
			<h2>{m.prod.platTitle}</h2>
			<p>{m.prod.platDesc}</p>
			<Button href={resolve('/waitlist')} variant="secondary" size="lg">{m.prod.platCta}</Button>
		</article>
	</div>
</section>

<style>
	.page {
		max-width: var(--container-wide);
		margin: 0 auto;
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-16);
	}

	.cards {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-8);
		align-items: stretch;
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-4);
		padding: var(--space-8);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border-strong);
		box-shadow: var(--shadow-md);
		min-width: 0;
	}

	.media {
		width: 100%;
		min-width: 0;
		margin-bottom: var(--space-2);
	}

	.media img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
	}

	h2 {
		margin: 0;
		font-size: var(--h2-section);
		line-height: var(--line-height-tight);
		letter-spacing: var(--letter-spacing-tight);
	}

	p {
		margin: 0;
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
		flex: 1;
	}

	@media (max-width: 900px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}
</style>
