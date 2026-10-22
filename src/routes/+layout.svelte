<script lang="ts">
	import '../app.css';
	import Header from '../components/header.svelte';
	import { resolve } from '$app/paths';
	import { tr } from '$lib/translation/i18n';
	import linkedLogo from '$lib/assets/InBug-Black.png';

	let { children } = $props();

	let m = $derived(tr());

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
				'Explainable VAT decisions, ready for just-in-time audit, built for accountants and tax professionals.',
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
	<link rel="icon" type="image/svg+xml" href="/logo_icon_dark.svg" />
	<meta property="og:image" content="https://vatmiraal.be/logo.svg" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schemas)}<${'/script'}>`}
</svelte:head>

<Header />

{@render children()}

<footer>
	<div class="footer-links">
		<a href={resolve('/team')} class="legal-link">{m.nav.team}</a>
		<a href={resolve('/impressum')} class="legal-link">{m.nav.impressum}</a>
		<a href={resolve('/privacy')} class="legal-link">{m.nav.privacy}</a>
		<span class="copyright">{m.common.footer}</span>
	</div>
	<div class="footer-social">
		<a
			href="https://www.linkedin.com/company/vatmiraal"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="VATmiraal on LinkedIn"><img src={linkedLogo} alt="VATmiraal on LinkedIn" /></a
		>
	</div>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--space-4) var(--space-6);
		padding: var(--space-5) 4%;
		border-top: 1px solid var(--color-border);
		background: var(--color-bg-subtle);
		font-size: var(--font-size-sm);
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: var(--space-2) var(--space-6);
		flex-wrap: wrap;
		line-height: 1.4;
	}

	.copyright {
		color: var(--color-text-subtle);
	}

	.legal-link {
		color: var(--color-text-muted);
		font-weight: var(--font-weight-medium);
		text-decoration: none;
	}

	.legal-link:hover {
		color: var(--color-text);
	}

	.footer-social img {
		display: block;
		width: 1.25em;
		height: auto;
	}
</style>
