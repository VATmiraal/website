import type { IRatesMessages } from './types';

export const messages: IRatesMessages = {
	title: 'Tarieven',
	kicker: 'VATmiraal BV',
	meta: 'Versie 12 november 2026 · Bedragen exclusief btw',
	pdfLabel: 'PDF downloaden',
	definitions: {
		id: 'nl-definities',
		heading: '1. Definities',
		items: [
			{
				term: 'Heimdall',
				desc: [
					{
						text: 'De dienst zoals omschreven in de Dienstbeschrijving Heimdall.',
						path: '/heimdall/service-description',
						hash: 'nl-definities'
					}
				]
			},
			{
				term: 'Factuur',
				desc: [
					"Eén unieke inkomende of uitgaande factuur die Heimdall toetst, creditnota's inbegrepen, ongeacht de uitkomst van de toetsing."
				]
			},
			{
				term: 'Jaarvolume',
				desc: ['Het aantal facturen per contractjaar, standaard- en premiumfacturen samen.']
			},
			{
				term: 'Vastlegging',
				desc: [
					'Het jaarvolume dat de klant bij aanvang van het contractjaar contractueel vastlegt.'
				]
			},
			{
				term: 'Premiumfactuur',
				desc: [
					'Een factuur waarvan de afleiding een ',
					{ text: 'premiumregel', hash: 'nl-premium' },
					' bereikt.'
				]
			}
		]
	},
	tracks: {
		id: 'nl-sporen',
		cards: [
			{
				k: 'Spoor A',
				title: 'Met vastlegging',
				items: [
					'Jaarvolume vooraf vastgelegd.',
					'Eén prijs voor alle facturen: de schijf van het vastgelegde volume.',
					'Gebruik boven de vastlegging blijft aan de prijs van de vastgelegde schijf, ook als het volume een schijf met een lagere prijs bereikt.'
				],
				href: 'nl-met-vastlegging'
			},
			{
				k: 'Spoor B',
				title: 'Zonder vastlegging',
				items: [
					'Geen vastlegging, geen inschatting.',
					'Elke factuur aan de prijs van de schijf waarin zij valt.',
					'Geen minimumbedrag, geen correctie achteraf.'
				],
				href: 'nl-zonder-vastlegging'
			}
		],
		calcText: 'Bereken je jaarbedrag voor beide sporen in de prijscalculator'
	},
	rates: {
		id: 'nl-tarieven',
		heading: '2. Tarieven per factuur',
		tableHead: { volume: 'Jaarvolume', standard: 'Standaard', premium: 'Premium (2×)' }
	},
	clauses: [
		{
			id: 'nl-met-vastlegging',
			heading: '3. Met vastlegging',
			clauses: [
				{
					n: '3.1',
					lead: [
						'De schijf van de vastlegging bepaalt de prijs van elke factuur van het contractjaar.'
					]
				},
				{
					n: '3.2',
					lead: [
						'Een factuurvolume boven de vastlegging wordt aangerekend aan de prijs van de vastgelegde schijf, ook als het jaarvolume daardoor een schijf met een lagere prijs bereikt. Een lagere prijs geldt pas nadat de vastlegging is verhoogd overeenkomstig 3.4.'
					]
				},
				{
					n: '3.3',
					lead: [
						'Is het jaarvolume op het einde van het contractjaar lager dan de vastlegging, dan geldt de vastgelegde prijs niet. De klant betaalt voor het werkelijke jaarvolume tegen de prijs zonder vastlegging (zie 4.1), verhoogd met 10%, met een minimum van 80% en een maximum van 100% van het vastgelegde bedrag (vastgelegd volume × prijs van de vastgelegde schijf).'
					]
				},
				{
					n: '3.4',
					lead: [
						'De klant kan de vastlegging eenmaal per contractjaar verhogen. De prijs van de nieuwe schijf geldt vanaf de datum van verhoging, zonder terugwerkende kracht.'
					]
				},
				{
					n: '3.5',
					lead: [
						'Voor het eerste contractjaar bedraagt de vastlegging ten hoogste het aantoonbare jaarvolume van het voorgaande jaar. Voor partners zonder historiek loopt de vastlegging op over drie contractjaren.'
					]
				},
				{
					n: '3.6',
					lead: [
						'Bij verlenging wordt de vastlegging bepaald op basis van het werkelijke jaarvolume van het voorgaande contractjaar.'
					]
				},
				{
					n: '3.7',
					lead: ['De prijs van een reeds aangerekende factuur wordt achteraf niet verlaagd.']
				}
			]
		},
		{
			id: 'nl-zonder-vastlegging',
			heading: '4. Zonder vastlegging',
			clauses: [
				{
					n: '4.1',
					lead: [
						'Elke factuur wordt aangerekend aan de prijs van de schijf waarin zij valt volgens het cumulatieve jaarvolume.'
					]
				},
				{ n: '4.2', lead: ['Er volgt geen correctie achteraf.'] }
			]
		},
		{
			id: 'nl-premium',
			heading: '5. Premiumfacturen',
			clauses: [
				{
					n: '5.1',
					lead: ['Premiumregels:'],
					list: [
						['ABC-transacties;'],
						['invoer;'],
						['uitvoer;'],
						['diensten met een bijzondere plaatsbepalingsregel;'],
						['facturen van gemengde en gedeeltelijke btw-plichtigen.']
					]
				},
				{
					n: '5.2',
					lead: [
						'Het gebruiksrapport vermeldt per premiumfactuur de wetsbepaling die de premie uitlokte.'
					]
				},
				{
					n: '5.3',
					lead: [
						'Bij een onbepaalde uitkomst is de factuur premium als de afleiding een premiumregel heeft bereikt.'
					]
				}
			]
		},
		{
			id: 'nl-algemeen',
			heading: '6. Algemeen',
			clauses: [
				{
					n: '6.1',
					lead: [
						'Elke factuur wordt één keer aangerekend. Een hercontrole na correctie of na aanvulling van gegevens wordt niet aangerekend.'
					]
				},
				{ n: '6.2', lead: ['Er geldt geen minimumbedrag per contract.'] }
			]
		},
		{
			id: 'nl-duur-en-verlenging',
			heading: '7. Duur en verlenging',
			clauses: [
				{
					n: '7.1',
					lead: [
						'De overeenkomst loopt voor één contractjaar en wordt stilzwijgend verlengd voor telkens één contractjaar, tenzij een partij haar opzegt uiterlijk twee maanden vóór het einde van het lopende contractjaar.'
					]
				},
				{
					n: '7.2',
					lead: [
						'De tarieven liggen vast voor de duur van het contractjaar, onverminderd een verhoging van de vastlegging door de klant.'
					]
				},
				{
					n: '7.3',
					lead: [
						'Op elke verjaardag van de overeenkomst worden de tarieven aangepast volgens de formule P = P₀ × (0,2 + 0,8 × S / S₀). P₀ is het tarief bij aanvang van de overeenkomst of, na het vaststellen van nieuwe tarieven, het nieuwe tarief. S₀ is de Agoria Digital-index op dat ogenblik en S de laatst gepubliceerde Agoria Digital-index vóór de verjaardag. Het variabele deel van 80% stemt overeen met het aandeel van de loonkosten in de kostprijs van de dienst. De aanpassing geldt zowel bij stijging als bij daling en het resultaat wordt afgerond op drie decimalen. Deze indexering vereist geen voorafgaande kennisgeving.'
					]
				},
				{
					n: '7.4',
					lead: [
						'VATmiraal kan nieuwe tarieven vaststellen voor het volgende contractjaar. Zij deelt die per e-mail mee uiterlijk drie maanden vóór het einde van het lopende contractjaar. Zegt de klant de overeenkomst niet tijdig op, dan wordt zij verlengd tegen de nieuwe tarieven.'
					]
				},
				{
					n: '7.5',
					lead: [
						'Worden de nieuwe tarieven later meegedeeld, dan blijven de lopende tarieven, geïndexeerd volgens de formule hierboven, gelden voor het volgende contractjaar.'
					]
				},
				{
					n: '7.6',
					lead: ['Nieuwe tarieven steunen op objectieve redenen, onder meer:'],
					list: [
						['nieuwe of uitgebreide functionaliteit of een ruimer toepassingsgebied;'],
						['wijzigingen in wetgeving of administratieve praktijk die aanpassingen vereisen;'],
						['wijzigingen in personeels-, infrastructuur- of andere kosten van derden.']
					]
				},
				{
					n: '7.7',
					lead: [
						'Nieuwe modules of diensten worden afzonderlijk aangeboden en enkel aangerekend na aanvaarding door de klant.'
					]
				},
				{
					n: '7.8',
					lead: [
						'De lijst van regels die onder het premiumtarief vallen, kan enkel bij verlenging en volgens dezelfde procedure worden gewijzigd.'
					]
				}
			]
		}
	]
};
