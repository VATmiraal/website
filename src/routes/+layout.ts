import { browser } from '$app/environment';
import type { LayoutLoad } from './$types';
import { isLocale } from '$lib/translation/messages';

export const load: LayoutLoad = async ({ url, data }) => {
	const serverLang = (data as { lang?: string } | null)?.lang;
	const override = url.searchParams.get('lang');

	const lang = isLocale(override) ? override : isLocale(serverLang) ? serverLang : 'en';

	// Persist a URL override so it survives later navigations.
	if (browser && isLocale(override) && override !== serverLang) {
		document.cookie = `lang=${override}; path=/; max-age=31536000; SameSite=Lax`;
	}

	return { lang };
};
