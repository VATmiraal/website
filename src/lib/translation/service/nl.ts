import type { IServiceMessages } from './types';

export const messages: IServiceMessages = {
	title: 'Dienstbeschrijving Heimdall',
	kicker: 'VATmiraal BV',
	meta: 'Versie 12 november 2026',
	back: '← Terug naar de tarieven',
	pdfLabel: 'PDF downloaden',
	definitions: {
		id: 'nl-definities',
		heading: '1. Definities',
		items: [
			{
				term: 'Heimdall',
				desc: [
					'De dienst van VATmiraal BV die elke factuur toetst aan de Belgische btw-wetgeving en toont waar het boekingsvoorstel van het boekhoudpakket daarvan afwijkt.'
				]
			},
			{
				term: 'Gebruiker',
				desc: [
					'Een persoon aan wie de klant toegang tot Heimdall geeft. Een gebruiker ziet alleen de dossiers die hem zijn toegewezen.'
				]
			},
			{
				term: 'Boekhoudpakket',
				desc: ['Het boekhoudpakket waarin de klant het dossier voert.']
			},
			{
				term: 'Boekingsvoorstel',
				desc: ['De boeking die het boekhoudpakket voor een factuur voorstelt.']
			},
			{
				term: 'Ondersteunde koppeling',
				desc: [
					'Een koppeling tussen Heimdall en een boekhoudpakket, zoals vermeld op de website van VATmiraal.'
				]
			},
			{
				term: 'Ingestelde criteria',
				desc: [
					'De voorwaarden die de gebruiker in Heimdall uitdrukkelijk instelt om een factuur zonder afwijking automatisch te laten boeken.'
				]
			},
			{
				term: 'Ondersteunde lidstaat',
				desc: [
					'Een lidstaat waarvoor Heimdall verzoeken om teruggaaf van btw ondersteunt, zoals vermeld op de website van VATmiraal. Op de datum van deze versie: Nederland, Frankrijk en Duitsland.'
				]
			},
			{
				term: 'Dossiercontext',
				desc: ['De gegevens over het dossier die Heimdall verzamelt bij de toetsing van facturen.']
			}
		]
	},
	clauses: [
		{
			id: 'nl-toetsing',
			heading: '2. Toetsing van facturen',
			clauses: [
				{
					n: '2.1',
					lead: [
						'Heimdall haalt elke factuur op via een ondersteunde koppeling, samen met het boekingsvoorstel.'
					]
				},
				{
					n: '2.2',
					lead: [
						'Heimdall toetst de factuur aan de Belgische btw-wetgeving en bepaalt de rekening uit het rekeningschema van het dossier. Elke beoordeling vermeldt de toegepaste wetsbepaling.'
					]
				},
				{
					n: '2.3',
					lead: [
						'Voor een gemengde of gedeeltelijke btw-plichtige past Heimdall bij het boeken de aftrekregeling van het dossier toe: het algemeen verhoudingsgetal of het werkelijk gebruik. Heimdall gebruikt daarvoor het verhoudingsgetal en de gegevens over het gebruik die de gebruiker opgeeft, en bepaalt het verhoudingsgetal niet zelf.'
					]
				},
				{
					n: '2.4',
					lead: ['Heimdall legt de factuur ter goedkeuring voor aan de gebruiker:'],
					list: [
						[
							'als het boekingsvoorstel afwijkt van de wet of een andere rekening gebruikt, met vermelding van de afwijking;'
						],
						[
							'als een gegeven ontbreekt om te beslissen (onbepaalde uitkomst), met vermelding van dat gegeven.'
						]
					]
				},
				{
					n: '2.5',
					lead: [
						'Een factuur zonder afwijking wordt alleen automatisch geboekt als zij voldoet aan de ingestelde criteria. Zonder ingestelde criteria vraagt elke factuur goedkeuring.'
					]
				},
				{
					n: '2.6',
					lead: [
						'Heimdall stuurt de goedgekeurde of automatisch geboekte boeking terug naar het boekhoudpakket.'
					]
				}
			]
		},
		{
			id: 'nl-teruggaaf',
			heading: '3. Teruggaaf van buitenlandse btw',
			clauses: [
				{
					n: '3.1',
					lead: [
						'Heimdall stelt het verzoek om teruggaaf van btw uit een ondersteunde lidstaat op volgens ',
						{
							text: 'Richtlijn 2008/9/EG',
							url: 'https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32008L0009'
						},
						', op basis van de getoetste facturen. Heimdall toetst daarbij of de btw volgens het recht van die lidstaat voor teruggaaf in aanmerking komt, en dient het verzoek na goedkeuring door de gebruiker elektronisch in.'
					]
				}
			]
		},
		{
			id: 'nl-geplande-uitbreidingen',
			heading: '4. Geplande uitbreidingen',
			clauses: [
				{
					n: '4.1',
					lead: ['De volgende uitbreidingen zijn gepland:'],
					list: [
						[
							{ b: 'Inkomstenbelasting:' },
							' toetsing aan de Belgische inkomstenbelastingwetgeving, voor zover die de boeking bepaalt: de aftrekbaarheid van de kost;'
						],
						[
							{ b: 'Herziening:' },
							' voorstel van de diverse boekingen voor de herziening van de btw-aftrek, op basis van de getoetste facturen en de wijzigingen in gebruik die de gebruiker meldt;'
						],
						[
							{ b: 'Btw-aangifte:' },
							' elektronische indiening van de periodieke btw-aangifte bij de FOD Financiën, na goedkeuring door de gebruiker en op grond van een geldig mandaat;'
						],
						[
							{ b: 'Taken:' },
							' taken die relevant zijn voor de btw-wetgeving, onder meer het opvragen van de gegevens voor tijdsafhankelijke parameters, zoals het verhoudingsgetal of de kilometerstand;'
						],
						[
							{ b: 'Wetswijzigingen:' },
							' een waarschuwing wanneer een wetswijziging gevolgen heeft voor het dossier, op basis van de boekingen die Heimdall heeft uitgevoerd en de dossiercontext.'
						]
					]
				},
				{
					n: '4.2',
					lead: [
						'Een geplande uitbreiding maakt deel uit van Heimdall vanaf de datum waarop VATmiraal haar beschikbaarheid per e-mail meedeelt. Zij geldt als nieuwe functionaliteit in de zin van ',
						{
							text: 'duur en verlenging',
							path: '/heimdall/pricing',
							hash: 'nl-duur-en-verlenging'
						},
						' in de Tarieven. VATmiraal verbindt zich niet tot een datum van beschikbaarheid.'
					]
				}
			]
		},
		{
			id: 'nl-verantwoordelijkheid',
			heading: '5. Verantwoordelijkheid',
			clauses: [
				{
					n: '5.1',
					lead: [
						'De klant blijft verantwoordelijk voor elke boeking, ook een automatische, en voor de ingestelde criteria.'
					]
				},
				{
					n: '5.2',
					lead: [
						'De klant blijft verantwoordelijk voor de inhoud en de tijdige indiening van elke btw-aangifte en elk teruggaafverzoek, en controleert de ontvangstbevestiging van de administratie.'
					]
				},
				{
					n: '5.3',
					lead: [
						'VATmiraal is niet aansprakelijk voor een laattijdige indiening door onbeschikbaarheid van de systemen van de administratie.'
					]
				},
				{ n: '5.4', lead: ['Heimdall verstrekt geen fiscaal advies.'] }
			]
		},
		{
			id: 'nl-niet-inbegrepen',
			heading: '6. Niet inbegrepen',
			clauses: [
				{
					n: '6.1',
					lead: ['Heimdall omvat niet:'],
					list: [
						[
							'de toetsing aan het recht van andere landen dan België, behalve voor teruggaafverzoeken in ondersteunde lidstaten;'
						],
						[
							'andere belastingen en heffingen dan de btw, onverminderd de ',
							{ text: 'geplande uitbreidingen', hash: 'nl-geplande-uitbreidingen' },
							';'
						],
						['de audit van dossiers;'],
						['implementatie en maatwerk;'],
						['rechtstreekse toegang tot de VATmiraal-engine.']
					]
				}
			]
		},
		{
			id: 'nl-tarieven',
			heading: '7. Tarieven',
			clauses: [
				{
					n: '7.1',
					lead: [
						'Heimdall wordt per factuur aangerekend volgens de ',
						{ text: 'Tarieven', path: '/heimdall/pricing', hash: 'nl-definities' },
						'.'
					]
				},
				{
					n: '7.2',
					lead: [
						'Diverse boekingen, btw-aangiftes en teruggaafverzoeken zijn geen facturen en tellen niet mee voor het jaarvolume.'
					]
				},
				{
					n: '7.3',
					lead: [
						'Een uitbreiding van deze dienstbeschrijving geldt als nieuwe functionaliteit in de zin van ',
						{
							text: 'duur en verlenging',
							path: '/heimdall/pricing',
							hash: 'nl-duur-en-verlenging'
						},
						' in de Tarieven.'
					]
				}
			]
		}
	]
};
