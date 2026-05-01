<script>
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
	<title>VATmiraal — Explainable VAT decisions, ready for audit</title>
	<meta
		name="description"
		content="Explainable VAT decisions, ready for just-in-time audit. Built for accountants and tax professionals."
	/>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
</svelte:head>

<FirstPage />
<BuiltOnLaw />
<HowItWorks />
<CustomSolution />
