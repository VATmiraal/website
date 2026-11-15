// Typed content model for the Heimdall legal documents (rates, service description).
// A small set of Svelte components renders these into the exact source DOM so the
// DOM-driven PDF generator works unchanged.

/** An inline link inside body text. One of `url` (external), `path` (+optional `hash`,
 *  in-site), or `hash` alone (same-page anchor). */
export interface ILink {
	text: string;
	/** External absolute URL (opens in a new tab). */
	url?: string;
	/** In-site flat path, localised at render time, e.g. "/heimdall/pricing/service-description". */
	path?: string;
	/** Anchor id (already language-prefixed, e.g. "nl-premium"). */
	hash?: string;
}

/** A bold run of body text (e.g. the lead-in of a list item). */
export interface IBold {
	b: string;
}

/** A run of body text: a plain string, a bold run, or an inline link. */
export type ISegment = string | ILink | IBold;

/** One numbered clause: lead text, an optional a/b/c list, and optional trailing text. */
export interface IClause {
	n: string;
	lead: ISegment[];
	list?: ISegment[][];
	after?: ISegment[];
}

/** A numbered article made of clauses (`.cl`). */
export interface IClauseSection {
	id: string;
	heading: string;
	clauses: IClause[];
}

/** One definition-list entry. */
export interface IDefinition {
	term: string;
	desc: ISegment[];
}

/** A definitions article (`dl`). */
export interface IDefinitionSection {
	id: string;
	heading: string;
	items: IDefinition[];
}

/** One track card (rates page). `href` is a same-page anchor id. */
export interface ITrackCard {
	k: string;
	title: string;
	items: string[];
	href: string;
}

/** The two track cards plus the calculator call-to-action bar. */
export interface ITracksBlock {
	id: string;
	cards: ITrackCard[];
	calcText: string;
}
