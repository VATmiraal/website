import type { IRatesMessages } from './types';

export const messages: IRatesMessages = {
	title: 'Rates',
	kicker: 'VATmiraal BV',
	meta: 'Version 12 November 2026 · Amounts excluding VAT',
	pdfLabel: 'Download PDF',
	definitions: {
		id: 'en-definitions',
		heading: '1. Definitions',
		items: [
			{
				term: 'Heimdall',
				desc: [
					{
						text: 'The service as set out in the Heimdall service description.',
						path: '/heimdall/pricing/service-description',
						hash: 'en-definitions'
					}
				]
			},
			{
				term: 'Invoice',
				desc: [
					'One unique incoming or outgoing invoice assessed by Heimdall, credit notes included, whatever the outcome of the assessment.'
				]
			},
			{
				term: 'Annual volume',
				desc: ['The number of invoices per contract year, standard and premium together.']
			},
			{
				term: 'Commitment',
				desc: [
					'The annual volume the client commits to contractually at the start of the contract year.'
				]
			},
			{
				term: 'Premium invoice',
				desc: [
					'An invoice whose derivation reaches a ',
					{ text: 'premium rule', hash: 'en-premium' },
					'.'
				]
			}
		]
	},
	tracks: {
		id: 'en-tracks',
		cards: [
			{
				k: 'Track A',
				title: 'With a commitment',
				items: [
					'Annual volume committed in advance.',
					'One price for all invoices: the tier of the committed volume.',
					'Use above the commitment stays at the price of the committed tier, even if the volume reaches a tier with a lower price.'
				],
				href: 'en-with-commitment'
			},
			{
				k: 'Track B',
				title: 'Without a commitment',
				items: [
					'No commitment, no estimate.',
					'Each invoice at the price of the tier it falls in.',
					'No minimum amount, no correction afterwards.'
				],
				href: 'en-without-commitment'
			}
		],
		calcText: 'Calculate your annual amount for both tracks in the price calculator'
	},
	rates: {
		id: 'en-rates',
		heading: '2. Rates per invoice',
		tableHead: { volume: 'Annual volume', standard: 'Standard', premium: 'Premium (2×)' }
	},
	clauses: [
		{
			id: 'en-with-commitment',
			heading: '3. With a commitment',
			clauses: [
				{
					n: '3.1',
					lead: ['The tier of the commitment sets the price of every invoice in the contract year.']
				},
				{
					n: '3.2',
					lead: [
						'Invoice volume above the commitment is charged at the price of the committed tier, even if the annual volume thereby reaches a tier with a lower price. A lower price applies only after the commitment is raised under 3.4.'
					]
				},
				{
					n: '3.3',
					lead: [
						'If, at the end of the contract year, the annual volume is below the commitment, the commitment price does not apply. The client pays for the actual annual volume at the price without a commitment (see 4.1), increased by 10%, with a minimum of 80% and a maximum of 100% of the committed amount (committed volume × price of the committed tier).'
					]
				},
				{
					n: '3.4',
					lead: [
						'The client may raise the commitment once per contract year. The price of the new tier applies from the date of the increase, without retroactive effect.'
					]
				},
				{
					n: '3.5',
					lead: [
						'For the first contract year the commitment may not exceed the demonstrable annual volume of the preceding year. For partners without history the commitment ramps up over three contract years.'
					]
				},
				{
					n: '3.6',
					lead: [
						'On renewal the commitment is set on the basis of the actual annual volume of the preceding contract year.'
					]
				},
				{ n: '3.7', lead: ['The price of an invoice already charged is not lowered afterwards.'] }
			]
		},
		{
			id: 'en-without-commitment',
			heading: '4. Without a commitment',
			clauses: [
				{
					n: '4.1',
					lead: [
						'Each invoice is charged at the price of the tier it falls in according to the cumulative annual volume.'
					]
				},
				{ n: '4.2', lead: ['No correction follows afterwards.'] }
			]
		},
		{
			id: 'en-premium',
			heading: '5. Premium invoices',
			clauses: [
				{
					n: '5.1',
					lead: ['Premium rules:'],
					list: [
						['ABC transactions;'],
						['imports;'],
						['exports;'],
						['services with a special place-of-supply rule;'],
						['invoices of mixed and partial VAT taxpayers.']
					]
				},
				{
					n: '5.2',
					lead: [
						'The usage report states, per premium invoice, the legal provision that triggered the premium.'
					]
				},
				{
					n: '5.3',
					lead: [
						'For an undetermined outcome the invoice is premium if the derivation reached a premium rule.'
					]
				}
			]
		},
		{
			id: 'en-general',
			heading: '6. General',
			clauses: [
				{
					n: '6.1',
					lead: [
						'Each invoice is charged once. A recheck after a correction or after missing data is supplied is not charged.'
					]
				},
				{ n: '6.2', lead: ['No minimum amount per contract applies.'] }
			]
		},
		{
			id: 'en-term-and-renewal',
			heading: '7. Term and renewal',
			clauses: [
				{
					n: '7.1',
					lead: [
						'The contract runs for one contract year and is tacitly renewed for successive periods of one contract year, unless either party terminates it no later than two months before the end of the current contract year.'
					]
				},
				{
					n: '7.2',
					lead: [
						'Rates are fixed for the contract year, without prejudice to an increase of the commitment by the client.'
					]
				},
				{
					n: '7.3',
					lead: [
						'On each anniversary of the contract, the rates are adjusted according to the formula P = P₀ × (0.2 + 0.8 × S / S₀). P₀ is the rate at the start of the contract or, after new rates have been set, the new rate. S₀ is the Agoria Digital index at that time and S the latest Agoria Digital index published before the anniversary. The variable part of 80% corresponds to the share of labour costs in the cost price of the service. The adjustment applies to both increases and decreases, and the result is rounded to three decimals. This indexation requires no prior notice.'
					]
				},
				{
					n: '7.4',
					lead: [
						'VATmiraal may set new rates for the next contract year. It notifies them by email no later than three months before the end of the current contract year. If the client does not terminate the contract in time, it is renewed at the new rates.'
					]
				},
				{
					n: '7.5',
					lead: [
						'If the new rates are notified later, the current rates, indexed according to the formula above, remain applicable for the next contract year.'
					]
				},
				{
					n: '7.6',
					lead: ['New rates rest on objective reasons, including:'],
					list: [
						['new or extended functionality or a wider scope;'],
						['changes in legislation or administrative practice that require adaptations;'],
						['changes in personnel, infrastructure or other third-party costs.']
					]
				},
				{
					n: '7.7',
					lead: [
						'New modules or services are offered separately and charged only after acceptance by the client.'
					]
				},
				{
					n: '7.8',
					lead: [
						'The list of rules subject to the premium rate may only be changed at renewal, following the same procedure.'
					]
				}
			]
		}
	]
};
