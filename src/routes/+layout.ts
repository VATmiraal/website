import type { LayoutLoad } from './$types';
import { splitLocale, DEFAULT_LOCALE } from '$lib/translation/locale';
import { isLocale } from '$lib/translation/messages';

export const load: LayoutLoad = ({ url, data }) => {
	// Derive from the (prefixed) URL so client-side navigations get the right
	// language without a server round-trip; fall back to the server value.
	const fromUrl = splitLocale(url.pathname).locale;
	const serverLang = (data as { lang?: string } | null)?.lang;
	const lang = fromUrl ?? (isLocale(serverLang) ? serverLang : DEFAULT_LOCALE);
	return { lang };
};
