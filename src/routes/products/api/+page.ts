import { redirect } from '@sveltejs/kit';
import { splitLocale, localeHref, DEFAULT_LOCALE } from '$lib/translation/locale';
import type { PageLoad } from './$types';

// The API page is now the developer page under the engine.
export const load: PageLoad = ({ url }) => {
	const locale = splitLocale(url.pathname).locale ?? DEFAULT_LOCALE;
	redirect(308, localeHref('/engine/dev', locale));
};
