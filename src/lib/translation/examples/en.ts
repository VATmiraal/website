import type { IExamplesMessages } from './types';

export const messages: IExamplesMessages = {
	id: 'en-examples',
	title: 'Working examples',
	intro:
		'How the rates work in practice, step by step. Each example follows one clause of the rates. Amounts excluding VAT.',
	back: '← Back to the rates',
	clause: 'Clause',
	newTab: 'Open this clause on the rates page in a new tab',
	totalLabel: 'Annual amount',
	perLabel: 'Per invoice',
	stepFlat: 'Committed tier price × volume',
	stepTiers: 'Each tier at its own price',
	stepBase: 'Use at the price without a commitment',
	stepPenalty: 'Plus 10%',
	stepFloor: 'Floor: 80% of the committed amount',
	stepCap: 'Cap: the committed amount',
	stepResult: 'Within the band',
	examples: [
		{
			n: '3.1',
			section: 'with-commitment',
			kind: 'at',
			title: 'At the commitment',
			setup:
				'You commit to {committed} invoices and use exactly that. The committed volume sets one price for every invoice.'
		},
		{
			n: '4.1',
			section: 'without-commitment',
			kind: 'without',
			title: 'Without a commitment',
			setup:
				'You make no commitment and process {actual} invoices. Each invoice is billed at the tier it falls in.'
		},
		{
			n: '3.3',
			section: 'with-commitment',
			kind: 'below',
			title: 'Below the commitment',
			setup:
				'You commit to {committed} invoices but process only {actual}. The committed price falls away and the charge is clamped.'
		},
		{
			n: '3.2',
			section: 'with-commitment',
			kind: 'above',
			title: 'Above the commitment',
			setup:
				'You commit to {committed} invoices but process {actual}. The extra invoices stay at the committed tier price.'
		}
	]
};
