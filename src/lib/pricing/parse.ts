/** Parse a volume input to an integer, ignoring grouping separators. */
export function num(value: string): number {
	const n = parseInt(String(value).replace(/[^0-9]/g, ''), 10);
	return isFinite(n) ? n : 0;
}

/** Parse a percentage input (0–100, comma or dot) to a fraction in [0, 1]. */
export function pct(value: string): number {
	const n = parseFloat(String(value).replace(',', '.'));
	return isFinite(n) ? Math.min(100, Math.max(0, n)) / 100 : 0;
}
