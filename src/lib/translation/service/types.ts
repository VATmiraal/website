import type { IDefinitionSection, IClauseSection } from '$lib/doc/content';

export interface IServiceMessages {
	title: string;
	kicker: string;
	meta: string;
	back: string;
	pdfLabel: string;
	definitions: IDefinitionSection;
	clauses: IClauseSection[];
}
