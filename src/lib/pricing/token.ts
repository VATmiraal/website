import { num, pct } from './parse';
import type { ITokenInput, ITokenState } from './types';

const TOKEN_RE = /^([a-z]{2})-calc-(?:c([0-9]+)|g)-v([0-9]+)-s([0-9]+(?:p[0-9]+)?)$/;

/** Encode the calculator inputs into a copy-link token, e.g. "nl-calc-c288000-v288000-s0". */
export function encodeToken(input: ITokenInput): string {
	const { lang, mode, committedInput, actualInput, shareInput } = input;
	const c = num(committedInput);
	const v = num(actualInput);
	const sv = String(pct(shareInput) * 100)
		.replace(/[^0-9.]/g, '')
		.replace('.', 'p');
	return `${lang}-calc-${mode === 'committed' ? 'c' + c : 'g'}-v${v}-s${sv || '0'}`;
}

/** Decode a hash token back to calculator state, or null if it does not match. */
export function decodeToken(hash: string): ITokenState | null {
	const m = TOKEN_RE.exec(hash);
	if (!m) return null;
	return {
		lang: m[1],
		mode: m[2] !== undefined ? 'committed' : 'graduated',
		committed: m[2] !== undefined ? +m[2] : 0,
		actual: +m[3],
		shareRaw: m[4]
	};
}
