import type { IServiceMessages } from './types';

export const messages: IServiceMessages = {
	title: 'Heimdall service description',
	kicker: 'VATmiraal BV',
	meta: 'Version 12 November 2026',
	back: '← Back to the rates',
	pdfLabel: 'Download PDF',
	definitions: {
		id: 'en-definitions',
		heading: '1. Definitions',
		items: [
			{
				term: 'Heimdall',
				desc: [
					'The service of VATmiraal BV that assesses each invoice against Belgian VAT legislation and shows where the booking proposal of the accounting package deviates from it.'
				]
			},
			{
				term: 'User',
				desc: [
					'A person to whom the client gives access to Heimdall. A user sees only the dossiers assigned to them.'
				]
			},
			{
				term: 'Accounting package',
				desc: ['The accounting package in which the client keeps the dossier.']
			},
			{
				term: 'Booking proposal',
				desc: ['The booking the accounting package proposes for an invoice.']
			},
			{
				term: 'Supported connection',
				desc: [
					'A connection between Heimdall and an accounting package, as listed on the VATmiraal website.'
				]
			},
			{
				term: 'Set criteria',
				desc: [
					'The conditions the user expressly sets in Heimdall for an invoice without deviation to be booked automatically.'
				]
			},
			{
				term: 'Supported Member State',
				desc: [
					'A Member State for which Heimdall supports VAT refund requests, as listed on the VATmiraal website. At the date of this version: the Netherlands, France and Germany.'
				]
			},
			{
				term: 'Dossier context',
				desc: ['The data on the dossier that Heimdall gathers when assessing invoices.']
			}
		]
	},
	clauses: [
		{
			id: 'en-assessment',
			heading: '2. Assessment of invoices',
			clauses: [
				{
					n: '2.1',
					lead: [
						'Heimdall retrieves each invoice through a supported connection, together with the booking proposal.'
					]
				},
				{
					n: '2.2',
					lead: [
						'Heimdall assesses the invoice against Belgian VAT legislation and determines the account from the dossier’s chart of accounts. Each assessment states the legal provision applied.'
					]
				},
				{
					n: '2.3',
					lead: [
						'For a mixed or partial taxable person, Heimdall applies the dossier’s deduction method when booking: the general pro rata or actual use. For this purpose Heimdall uses the pro rata and the data on use provided by the user, and does not determine the pro rata itself.'
					]
				},
				{
					n: '2.4',
					lead: ['Heimdall submits the invoice to the user for approval:'],
					list: [
						[
							'if the booking proposal deviates from the law or uses a different account, stating the deviation;'
						],
						['if data needed to decide is missing (undetermined outcome), stating that data.']
					]
				},
				{
					n: '2.5',
					lead: [
						'An invoice without deviation is booked automatically only if it meets the set criteria. Without set criteria, every invoice requires approval.'
					]
				},
				{
					n: '2.6',
					lead: [
						'Heimdall sends the approved or automatically booked entry back to the accounting package.'
					]
				}
			]
		},
		{
			id: 'en-refund',
			heading: '3. Refund of foreign VAT',
			clauses: [
				{
					n: '3.1',
					lead: [
						'Heimdall prepares the request for a refund of VAT from a supported Member State under ',
						{
							text: 'Directive 2008/9/EC',
							url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32008L0009'
						},
						', based on the assessed invoices. In doing so, Heimdall assesses whether the VAT qualifies for refund under the law of that Member State, and files the request electronically after approval by the user.'
					]
				}
			]
		},
		{
			id: 'en-planned-extensions',
			heading: '4. Planned extensions',
			clauses: [
				{
					n: '4.1',
					lead: ['The following extensions are planned:'],
					list: [
						[
							{ b: 'Income tax:' },
							' assessment against Belgian income tax legislation, insofar as it determines the booking: the deductibility of the expense;'
						],
						[
							{ b: 'Adjustment:' },
							' proposal of the journal entries needed to adjust the VAT deduction, based on the assessed invoices and the changes in use reported by the user;'
						],
						[
							{ b: 'VAT return:' },
							' electronic filing of the periodic VAT return with the FPS Finance, after approval by the user and under a valid mandate;'
						],
						[
							{ b: 'Tasks:' },
							' tasks relevant to VAT legislation, including requesting the data needed for time-dependent parameters, such as the deduction ratio or the mileage reading;'
						],
						[
							{ b: 'Changes in the law:' },
							' a warning when a change in the law affects the dossier, based on the bookings made by Heimdall and the dossier context.'
						]
					]
				},
				{
					n: '4.2',
					lead: [
						'A planned extension forms part of Heimdall from the date on which VATmiraal announces its availability by email. It counts as new functionality within the meaning of ',
						{
							text: 'term and renewal',
							path: '/heimdall/pricing/rates',
							hash: 'en-term-and-renewal'
						},
						' in the Rates. VATmiraal does not commit to an availability date.'
					]
				}
			]
		},
		{
			id: 'en-responsibility',
			heading: '5. Responsibility',
			clauses: [
				{
					n: '5.1',
					lead: [
						'The client remains responsible for every booking, including automatic ones, and for the set criteria.'
					]
				},
				{
					n: '5.2',
					lead: [
						'The client remains responsible for the content and timely filing of each VAT return and refund request, and checks the administration’s acknowledgement of receipt.'
					]
				},
				{
					n: '5.3',
					lead: [
						'VATmiraal is not liable for late filing caused by unavailability of the administration’s systems.'
					]
				},
				{ n: '5.4', lead: ['Heimdall does not provide tax advice.'] }
			]
		},
		{
			id: 'en-not-included',
			heading: '6. Not included',
			clauses: [
				{
					n: '6.1',
					lead: ['Heimdall does not include:'],
					list: [
						[
							'assessment against the law of countries other than Belgium, except for refund requests in supported Member States;'
						],
						[
							'taxes and levies other than VAT, without prejudice to the ',
							{ text: 'planned extensions', hash: 'en-planned-extensions' },
							';'
						],
						['the audit of dossiers;'],
						['implementation and custom work;'],
						['direct access to the VATmiraal engine.']
					]
				}
			]
		},
		{
			id: 'en-rates',
			heading: '7. Rates',
			clauses: [
				{
					n: '7.1',
					lead: [
						'Heimdall is charged per invoice according to the ',
						{ text: 'Rates', path: '/heimdall/pricing/rates', hash: 'en-definitions' },
						'.'
					]
				},
				{
					n: '7.2',
					lead: [
						'Journal entries, VAT returns and refund requests are not invoices and do not count towards the annual volume.'
					]
				},
				{
					n: '7.3',
					lead: [
						'An extension of this description counts as new functionality within the meaning of ',
						{
							text: 'term and renewal',
							path: '/heimdall/pricing/rates',
							hash: 'en-term-and-renewal'
						},
						' in the Rates.'
					]
				}
			]
		}
	]
};
