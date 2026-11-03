import type { RequestHandler } from './$types';
import { SITE_URL } from '$lib/site';
import { LOCALES } from '$lib/translation/messages';
import { localeHref, DEFAULT_LOCALE } from '$lib/translation/locale';

// Public pages, one entry per locale with hreflang alternates. Redirect stubs
// (/products*) and the removed demo/waitlist routes are intentionally omitted.
const PATHS = [
	'/',
	'/engine',
	'/engine/dev',
	'/engine/buy',
	'/heimdall',
	'/heimdall/pilot',
	'/team',
	'/custom_solutions',
	'/roadmap',
	'/blog',
	'/blog/introducing-vatmiraal',
	'/blog/from-taxman-to-vatmiraal',
	'/privacy',
	'/impressum'
];

export const GET: RequestHandler = () => {
	const urls = PATHS.map((path) => {
		const alternates = [
			...LOCALES.map((l) => ({ hreflang: l, href: `${SITE_URL}${localeHref(path, l)}` })),
			{ hreflang: 'x-default', href: `${SITE_URL}${localeHref(path, DEFAULT_LOCALE)}` }
		]
			.map((a) => `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
			.join('');
		return LOCALES.map(
			(l) => `<url><loc>${SITE_URL}${localeHref(path, l)}</loc>${alternates}</url>`
		).join('');
	}).join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'max-age=3600' }
	});
};
