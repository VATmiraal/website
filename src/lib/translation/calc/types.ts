/** The runtime string table used by the calculator breakdown and copy-text (source `S`). */
export interface ICalcStrings {
	pr: string;
	std: string;
	prem: string;
	vol: string;
	over: string;
	a: string;
	surch: string;
	tot: string;
	per: string;
	tier: string;
	inv: string;
	price: string;
	amt: string;
	altG: string;
	altC: string;
	altCv: string;
	more: string;
	below: string;
	save: string;
	copy: string;
	copied: string;
	link: string;
	linkOk: string;
	sel: string;
	head: string;
	mode: string;
	mC: string;
	mG: string;
	iC: string;
	iV: string;
	iS: string;
}

/** One calculation-rule bullet: a bold lead and the following text. */
export interface ICalcRule {
	lead: string;
	text: string;
}

export interface ICalcTableHead {
	volume: string;
	standard: string;
	premium: string;
}

export interface ICalcDefaults {
	committed: string;
	actual: string;
	share: string;
}

export interface ICalcMessages {
	title: string;
	intro: string;
	back: string;
	committed: string;
	notCommitted: string;
	committedVolume: string;
	actualVolume: string;
	premiumShare: string;
	ratesHeading: string;
	ratesId: string;
	rulesHeading: string;
	rulesId: string;
	rules: ICalcRule[];
	fullTerms: string;
	note: string;
	tableHead: ICalcTableHead;
	/** The calculator wrapper's anchor id, e.g. "en-calculator" / "fr-calculateur". */
	calcId: string;
	defaults: ICalcDefaults;
	s: ICalcStrings;
}
