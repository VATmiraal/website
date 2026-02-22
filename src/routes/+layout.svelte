<script lang="ts">
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
			email: 'info@vatmiraal.be',
			description:
				'Explainable AI for confident VAT decisions, built for accountants and tax professionals.',
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
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schemas)}<${'/script'}>`}
</svelte:head>

<Header />

{@render children()}

<footer>
	<p>© {year} VATmiraal. All rights reserved.</p>
</footer>

<style>
	@font-face {
		font-family: 'Inter';
		src: url('/Inter-VariableFont_opsz,wght.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
		margin: 0;
		background-color: #f8f8f6;
		color: #0f0f0f;
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
	}

	footer {
		background: #0f0f0f;
		color: rgba(248, 248, 246, 0.35);
		text-align: center;
		padding: 1.25rem 2rem;
		font-size: 0.85em;
	}

	footer p {
		margin: 0;
	}
</style>
