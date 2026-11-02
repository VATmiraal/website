import type { LayoutServerLoad } from './$types';

// Locale is resolved from the URL prefix in hooks.server.ts and handed down here.
export const load: LayoutServerLoad = async ({ locals }) => {
	return { lang: locals.lang };
};
