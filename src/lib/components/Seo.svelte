<script lang="ts">
	import { page } from '$app/state';
	import { LOCALES, isLocale } from '$lib/translation/messages';
	import { splitLocale, localeHref, DEFAULT_LOCALE } from '$lib/translation/locale';
	import { SITE_URL, SITE_NAME, OG_IMAGE } from '$lib/site';

	let {
		title,
		description,
		type = 'website',
		image = OG_IMAGE
	}: { title: string; description: string; type?: string; image?: string } = $props();

	// The locale-independent path, shared by every language variant of this page.
	let rest = $derived(splitLocale(page.url.pathname).rest);
	let lang = $derived(isLocale(page.data.lang) ? page.data.lang : DEFAULT_LOCALE);
	let canonical = $derived(`${SITE_URL}${localeHref(rest, lang)}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<link rel="canonical" href={canonical} />
	{#each LOCALES as l (l)}
		<link rel="alternate" hreflang={l} href={`${SITE_URL}${localeHref(rest, l)}`} />
	{/each}
	<link
		rel="alternate"
		hreflang="x-default"
		href={`${SITE_URL}${localeHref(rest, DEFAULT_LOCALE)}`}
	/>

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
