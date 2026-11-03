import { isLocale, type Locale } from './messages';

export const DEFAULT_LOCALE: Locale = 'en';

/** Split "/en/engine" -> { locale: 'en', rest: '/engine' }; "/engine" -> { locale: null, rest: '/engine' }. */
export function splitLocale(pathname: string): { locale: Locale | null; rest: string } {
	const match = /^\/([^/]+)(\/.*)?$/.exec(pathname);
	if (match && isLocale(match[1])) {
		return { locale: match[1], rest: match[2] || '/' };
	}
	return { locale: null, rest: pathname };
}

/** Prefix a flat app path with a locale: ("/engine", "nl") -> "/nl/engine". */
export function localeHref(path: string, locale: Locale): string {
	const clean = path === '/' ? '' : path;
	return `/${locale}${clean}`;
}

/** Choose a locale from an Accept-Language header, defaulting to English. */
export function fromAcceptLanguage(header: string | null): Locale {
	if (header?.startsWith('fr')) return 'fr';
	if (header?.startsWith('nl')) return 'nl';
	return DEFAULT_LOCALE;
}
