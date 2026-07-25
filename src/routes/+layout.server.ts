import type { Cookies } from '@sveltejs/kit';

export const load = async ({ cookies, request }: { cookies: Cookies; request: Request }) => {
	let lang = cookies.get('lang');

	if (!lang) {
		const acceptLang = request.headers.get('accept-language');
		if (acceptLang) {
			if (acceptLang.startsWith('fr')) {
				lang = 'fr';
			} else if (acceptLang.startsWith('nl')) {
				lang = 'nl';
			} else {
				lang = 'en';
			}
		} else {
			lang = 'en';
		}
	}

	return { lang };
};
