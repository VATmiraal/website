import type { Reroute } from '@sveltejs/kit';
import { splitLocale } from '$lib/translation/locale';

// Strip the /en|/nl|/fr prefix so the existing flat routes match. Runs on both
// server and client, so it must stay pure. Unprefixed paths are left untouched
// for the server hook to redirect.
export const reroute: Reroute = ({ url }) => {
	const { locale, rest } = splitLocale(url.pathname);
	return locale ? rest : undefined;
};
