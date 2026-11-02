import type { Handle } from '@sveltejs/kit';
import { isLocale, type Locale } from '$lib/translation/messages';
import {
	splitLocale,
	localeHref,
	fromAcceptLanguage,
	DEFAULT_LOCALE
} from '$lib/translation/locale';

// Content is negotiated on the lang cookie and Accept-Language, so vary on both
// (plus Accept-Encoding) — defensive if CDN caching is ever added.
const VARY = 'Accept-Encoding, Cookie, Accept-Language';

export const handle: Handle = async ({ event, resolve }) => {
	// event.url still carries the /en|/nl|/fr prefix here (reroute only affects routing).
	const { locale, rest } = splitLocale(event.url.pathname);

	if (!locale) {
		// Non-localized endpoints and static files keep their path.
		if (rest === '/robots.txt' || rest === '/sitemap.xml' || /\.[a-z0-9]+$/i.test(rest)) {
			event.locals.lang = DEFAULT_LOCALE;
			return resolve(event, {
				transformPageChunk: ({ html }) => html.replace('%lang%', DEFAULT_LOCALE)
			});
		}
		// Send unprefixed paths to the visitor's language. 302 (not 301) + Vary so a
		// shared cache never pins one locale's redirect onto other visitors.
		const cookieLang = event.cookies.get('lang');
		const chosen: Locale = isLocale(cookieLang)
			? cookieLang
			: fromAcceptLanguage(event.request.headers.get('accept-language'));
		return new Response(null, {
			status: 302,
			headers: { location: localeHref(rest, chosen) + event.url.search, vary: VARY }
		});
	}

	event.locals.lang = locale;
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
	response.headers.set('Vary', VARY);
	return response;
};
