/** One worked example: a scenario tied to a contract clause, its figures computed live. */
export interface IExample {
	/** Clause number, e.g. "3.1" — also builds the rates-page anchor. */
	n: string;
	/** Clause section slug on the rates page: 'with-commitment' | 'without-commitment'. */
	section: 'with-commitment' | 'without-commitment';
	/** Which scenario to compute and render. */
	kind: 'at' | 'without' | 'below' | 'above';
	title: string;
	/** Framing line; `{committed}` and `{actual}` are replaced with the sample volumes. */
	setup: string;
}

export interface IExamplesMessages {
	id: string;
	title: string;
	intro: string;
	back: string;
	/** Prefix for the clause link, e.g. "Clause" → "Clause 3.1". */
	clause: string;
	/** Title attribute on the clause link. */
	newTab: string;
	totalLabel: string;
	perLabel: string;
	stepFlat: string;
	stepTiers: string;
	stepBase: string;
	stepPenalty: string;
	stepFloor: string;
	stepCap: string;
	stepResult: string;
	examples: IExample[];
}
