<script>
	import { MAINTENANCE_MODE } from '$lib/maintenance';
	import FirstPage from './FirstPage.svelte';
	import HowItWorks from './HowItWorks.svelte';
	import BuiltOnLaw from './BuiltOnLaw.svelte';
	import CustomSolution from './CustomSolution.svelte';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'VATmiraal',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		url: 'https://vatmiraal.be',
		description:
			'Explainable AI for confident VAT decisions, built for accountants and tax professionals.',
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/PreOrder',
			price: '0',
			priceCurrency: 'EUR'
		},
		provider: { '@id': 'https://vatmiraal.be/#organization' }
	};
</script>

<svelte:head>
	{#if MAINTENANCE_MODE}
		<title>VATmiraal — We'll be back soon</title>
		<meta
			name="description"
			content="VATmiraal is updating its website and will be back online soon."
		/>
	{:else}
		<title>VATmiraal — Explainable VAT decisions, ready for audit</title>
		<meta
			name="description"
			content="Explainable VAT decisions, ready for just-in-time audit. Built for accountants and tax professionals."
		/>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
	{/if}
</svelte:head>

{#if MAINTENANCE_MODE}
	<section id="maintenance">
		<h1 id="maintenance-heading">Something new is on the way.</h1>
		<p id="maintenance-note">
			Back online soon.
			<a
				href="https://www.linkedin.com/company/vatmiraal"
				target="_blank"
				rel="noopener noreferrer">Reach out anytime.</a
			>
		</p>
	</section>
{:else}
	<FirstPage />
	<BuiltOnLaw />
	<HowItWorks />
	<CustomSolution />
{/if}

<style>
	#maintenance {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - var(--header-total-height));
		padding-bottom: 14vh;
	}

	#maintenance-heading {
		font-size: var(--h1-hero);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.04em;
		line-height: 1.05;
		text-align: center;
		margin: 0;
		max-width: 820px;
		opacity: 0;
		animation: fade-up 2s ease-out forwards;
	}

	#maintenance-note {
		max-width: min(620px, 70vw);
		font-weight: var(--font-weight-regular);
		text-align: center;
		font-size: var(--font-size-md);
		margin: var(--space-6) 0 0;
		letter-spacing: var(--letter-spacing-snug);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		opacity: 0;
		animation: fade-up 2s ease-out forwards;
		animation-delay: 0.8s;
	}

	#maintenance-note a {
		color: var(--color-text);
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: opacity var(--duration-base) var(--easing);
	}

	#maintenance-note a:hover {
		opacity: 0.6;
	}

	@keyframes fade-up {
		0% {
			opacity: 0;
			transform: translateY(16px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		#maintenance {
			padding-bottom: 0;
		}

		#maintenance-heading {
			font-size: clamp(1.8rem, 8vw, 2.8rem);
		}

		#maintenance-note {
			max-width: 85vw;
			font-size: var(--font-size-base);
			margin-top: var(--space-4);
		}
	}
</style>
