import { page } from '$app/state';
import { DICT, isLocale, type Messages } from './messages';
import { localeHref } from './locale';

/**
 * Current-locale messages. Reads `page.data.lang` (set per-request in the
 * layout load), so it is SSR-safe and reactive — call it inside `$derived`:
 *
 *   let m = $derived(tr());
 *   {#each m.api.delivers as d}...{/each}
 */
export function tr(): Messages {
	const lang = page.data.lang;
	return DICT[isLocale(lang) ? lang : 'en'];
}

/**
 * Prefix an internal path with the active locale: "/team" -> "/nl/team".
 * Reactive via `page.data.lang`, so it can replace `resolve()` in markup.
 */
export function localePath(path: string): string {
	const lang = page.data.lang;
	return localeHref(path, isLocale(lang) ? lang : 'en');
}
