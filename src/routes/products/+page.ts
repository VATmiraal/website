import { redirect } from '@sveltejs/kit';
import { splitLocale, localeHref, DEFAULT_LOCALE } from '$lib/translation/locale';
import type { PageLoad } from './$types';

// Products overview is replaced by the product portal at the home page.
export const load: PageLoad = ({ url }) => {
	const locale = splitLocale(url.pathname).locale ?? DEFAULT_LOCALE;
	redirect(308, localeHref('/', locale));
};
