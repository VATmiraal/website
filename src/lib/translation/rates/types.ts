import type { IDefinitionSection, IClauseSection, ITracksBlock } from '$lib/doc/content';

export interface IRatesTableHead {
	volume: string;
	standard: string;
	premium: string;
}

export interface IRatesSection {
	id: string;
	heading: string;
	tableHead: IRatesTableHead;
}

export interface IRatesMessages {
	title: string;
	kicker: string;
	meta: string;
	pdfLabel: string;
	definitions: IDefinitionSection;
	tracks: ITracksBlock;
	rates: IRatesSection;
	clauses: IClauseSection[];
}
