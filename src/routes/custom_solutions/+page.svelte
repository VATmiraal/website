<script lang="ts">
	import { resolve } from '$app/paths';
	import { tr } from '$lib/translation/i18n';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	interface ICustomItem {
		h: string;
		p: string;
	}

	let m = $derived(tr());
	let items = $derived(m.cust.items as ICustomItem[]);

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Custom VAT Automation',
		url: 'https://vatmiraal.be/custom_solutions',
		description:
			'ERP and accounting integration, extended rule coverage, agent and MCP workflows, and private deployment — VAT automation built around how you work.',
		serviceType: 'Tax Technology Consulting',
		provider: { '@id': 'https://vatmiraal.be/#organization' },
		contactPoint: {
			'@type': 'ContactPoint',
			email: 'info@vatmiraal.be',
			contactType: 'sales'
		}
	};
</script>

<svelte:head>
	<title>{m.cust.title} — VATmiraal</title>
	<meta name="description" content={m.cust.sub} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
</svelte:head>

<section class="page">
	<SectionHeader level="h1" kicker={m.cust.kicker} title={m.cust.title} subtitle={m.cust.sub} />

	<div class="items">
		{#each items as item (item.h)}
			<Card as="article">
				<h3>{item.h}</h3>
				<p>{item.p}</p>
			</Card>
		{/each}
	</div>

	<div class="cta">
		<h2>{m.cust.ctaTitle}</h2>
		<p>{m.cust.sub}</p>
		<Button href={resolve('/request_a_demo')} variant="primary" size="lg">{m.cust.ctaBtn}</Button>
	</div>
</section>

<style>
	.page {
		max-width: var(--container-medium);
		margin: 0 auto;
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-16);
	}

	.items {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-6);
	}

	.items h3 {
		margin: 0 0 var(--space-2);
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
	}

	.items p {
		margin: 0;
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
	}

	.cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-4);
		max-width: var(--container-narrow);
	}

	.cta h2 {
		margin: 0;
		font-size: var(--h2-section);
		line-height: var(--line-height-tight);
		letter-spacing: var(--letter-spacing-tight);
	}

	.cta p {
		margin: 0;
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
	}

	@media (max-width: 768px) {
		.items {
			grid-template-columns: 1fr;
		}
	}
</style>
