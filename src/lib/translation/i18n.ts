import { page } from '$app/state';
import { DICT, isLocale, type Messages } from './messages';

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
