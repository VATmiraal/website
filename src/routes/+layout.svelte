<script lang="ts">
	import '../app.css';
	import Header from '../components/header.svelte';

	let { children } = $props();

	const year = new Date().getFullYear();

	const schemas = [
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			'@id': 'https://vatmiraal.be/#organization',
			name: 'VATmiraal',
			url: 'https://vatmiraal.be',
			logo: 'https://vatmiraal.be/logo.svg',
			email: 'info@vatmiraal.be',
			description:
				'Explainable VAT decisions, ready for just-in-time audit — built for accountants and tax professionals.',
			sameAs: ['https://www.linkedin.com/company/vatmiraal']
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			'@id': 'https://vatmiraal.be/#website',
			name: 'VATmiraal',
			url: 'https://vatmiraal.be',
			publisher: { '@id': 'https://vatmiraal.be/#organization' }
		}
	];
</script>

<svelte:head>
	<title>VATmiraal — Explainable VAT decisions, ready for audit</title>
	<meta
		name="description"
		content="Explainable VAT decisions, ready for just-in-time audit — built for accountants and tax professionals."
	/>
	<meta
		property="og:title"
		content="VATmiraal — Explainable VAT decisions, ready for audit"
	/>
	<meta
		property="og:description"
		content="Explainable VAT decisions, ready for just-in-time audit — built for accountants and tax professionals."
	/>
	<link rel="icon" type="image/svg+xml" href="/logo_icon_dark.svg" />
	<meta property="og:image" content="https://vatmiraal.be/logo.svg" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schemas)}<${'/script'}>`}
</svelte:head>

<Header />

{@render children()}

<footer>
	<p>© {year} VATmiraal. All rights reserved.</p>
</footer>

<style>
	footer {
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark-faint);
		text-align: center;
		padding: var(--space-5) var(--space-8);
		font-size: var(--font-size-sm);
	}

	footer p {
		margin: 0;
	}
</style>
