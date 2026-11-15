import { describe, expect, it } from 'vitest';
import { encodeToken, decodeToken } from '$lib/pricing';

describe('encodeToken', () => {
	it('encodes committed inputs, ignoring grouping separators', () => {
		expect(
			encodeToken({
				lang: 'nl',
				mode: 'committed',
				committedInput: '288.000',
				actualInput: '288.000',
				shareInput: '0'
			})
		).toBe('nl-calc-c288000-v288000-s0');
	});

	it('drops the committed volume in graduated mode and encodes a decimal share', () => {
		expect(
			encodeToken({
				lang: 'en',
				mode: 'graduated',
				committedInput: '0',
				actualInput: '500,000',
				shareInput: '2.5'
			})
		).toBe('en-calc-g-v500000-s2p5');
	});
});

describe('decodeToken', () => {
	it('round-trips a committed token', () => {
		expect(decodeToken('nl-calc-c288000-v288000-s0')).toEqual({
			lang: 'nl',
			mode: 'committed',
			committed: 288000,
			actual: 288000,
			shareRaw: '0'
		});
	});

	it('round-trips a graduated token with a decimal share', () => {
		expect(decodeToken('en-calc-g-v500000-s2p5')).toEqual({
			lang: 'en',
			mode: 'graduated',
			committed: 0,
			actual: 500000,
			shareRaw: '2p5'
		});
	});

	it('returns null for a non-matching hash', () => {
		expect(decodeToken('en-definitions')).toBeNull();
		expect(decodeToken('')).toBeNull();
	});
});
