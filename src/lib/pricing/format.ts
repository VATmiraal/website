export type Lang = 'nl' | 'fr' | 'en';

/** Intl locale per language, matching the source calculator. */
export function localeOf(lang: Lang): string {
	return lang === 'nl' ? 'nl-BE' : lang === 'fr' ? 'fr-BE' : 'en-GB';
}

/** Decimal separator for the premium-share input (NL/FR comma, EN dot). */
export function decimalSeparator(lang: Lang): string {
	return lang === 'en' ? '.' : ',';
}

/** Integer with grouping, e.g. 288000 -> "288.000" (nl) / "288 000" (fr) / "288,000" (en). */
export function formatInt(value: number, lang: Lang): string {
	return new Intl.NumberFormat(localeOf(lang), { maximumFractionDigits: 0 }).format(
		Math.round(value)
	);
}

/** Euro amount to the cent, e.g. "€28,800.00" (en) / "28 800,00 €" (fr), rounded half-up. */
export function euro2(value: number, lang: Lang): string {
	const x = value.toLocaleString(localeOf(lang), {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	return lang === 'fr' ? `${x} €` : `€${x}`;
}

/** Three-decimal euro price, e.g. "€0.150" (en) / "0,150 €" (fr) / "€0,150" (nl). */
export function euro3(value: number, lang: Lang): string {
	const x = value.toLocaleString(localeOf(lang), {
		minimumFractionDigits: 3,
		maximumFractionDigits: 3
	});
	return lang === 'fr' ? `${x} €` : `€${x}`;
}
