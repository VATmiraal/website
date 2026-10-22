export const messages = {
	// ── Engine landing (/engine) ──
	heroKicker: 'VATmiraal API',
	heroTitle: 'Een veelzijdige engine om je btw te doen kloppen.',
	heroSub: 'VATmiraal versterkt je ViDA-transformatie, binnen je huidige workflow.',
	heroBuy: 'Koop de engine & agent',
	heroDocs: 'Lees de docs →',

	featKicker: 'Gebouwd voor fiscale professionals',
	featTitle: 'De one-stop-shop voor btw.',
	featSub:
		'Met de wet als basis leveren we de btw-functionaliteiten die ertoe doen, op een deterministische, flexibele en betrouwbare manier.',
	fg: [
		{
			tag: 'Bepalen',
			items: [
				{
					n: 'Btw-determinatie',
					d: 'Tarief, plaats van levering, vrijstelling en btw-schuldenaar voor elke transactie'
				},
				{
					n: 'Verlegging van heffing',
					d: 'Correct toegewezen, binnenlands en grensoverschrijdend'
				},
				{
					n: 'Gemengde en gedeeltelijke btw-plicht',
					d: 'Gemengde activiteiten en pro-rata, verdedigbaar gehouden'
				},
				{ n: 'Recht op aftrek', d: 'Te weinig en te veel aftrek gevat voor het je geld kost' },
				{ n: 'Auditbestendig', d: 'Een volledig juridisch spoor achter elk besluit' },
				{ n: 'Reverse audit', d: 'Btw-consistentie van je geboekte facturen' }
			]
		},
		{
			tag: 'Controleren',
			items: [
				{ n: 'VIES-integratie', d: 'EU-btw-nummers live gevalideerd via VIES' },
				{ n: 'Officiële registers', d: 'Verbonden met officiële fiscale informatieregisters' },
				{
					n: 'Consistentiecontrole',
					d: 'Dezelfde levering krijgt dezelfde behandeling, doorheen je historiek'
				}
			]
		},
		{
			tag: 'Rapporteren & recupereren',
			items: [
				{ n: 'Aangifte', d: 'Bedragen toegewezen aan de roosters van de btw-aangifte' },
				{
					n: 'Btw-herziening',
					d: 'Herziening van aftrek op bedrijfsmiddelen, opgevolgd in de tijd'
				},
				{ n: 'Btw-teruggave', d: 'Teruggaveverzoeken voorbereid met hun rechtsgrond' },
				{
					n: 'OSS-aangifte',
					d: 'Grensoverschrijdende B2C-verkopen voorbereid voor de OSS-aangifte'
				}
			]
		},
		{
			tag: 'Koppelen',
			items: [
				{ n: 'Pdf-ondersteuning', d: 'Factuurgegevens rechtstreeks uit een pdf gehaald' },
				{ n: 'E-facturatie', d: 'Integreert met gestructureerde e-facturen' },
				{ n: 'VATEX-codes', d: 'Vrijstellingsredenen uitgedrukt als standaard VATEX-codes' }
			]
		}
	],

	// ── Developer page (/engine/dev) ──
	docsKicker: 'Voor developers',
	docsTitle: 'Zo werkt de API.',
	docsSub:
		'Requests, responses en routes, met echte voorbeelden. Voor de volledige endpoint-referentie open je de API-referentie.',
	docsRefLink: 'Open de API-referentie →',
	docsSpecLink: 'OpenAPI-spec (JSON)',

	deliversKicker: 'Wat de API oplevert',
	deliversTitle: 'Uitkomsten bij elke call.',
	delivers: [
		{
			h: 'Een geciteerd btw-rooster',
			p: 'Elk rooster met zijn bedrag en de bepalingen die het daar plaatsten, klaar voor just-in-time audit.'
		},
		{
			h: 'Aftrekrecuperatie',
			p: 'Bepaal de aftrekbare btw die verschuldigd is via de API, en signaleer behandelingen die voorgefinancierde cash vrijmaken.'
		},
		{
			h: 'Vrije tekst → object',
			p: 'Zet een lijnomschrijving om in een getypeerd, gestructureerd object voor je analyseert.'
		},
		{
			h: 'Een sterk contract voor je frontends',
			p: 'Een sterk contract om je UI te bouwen via de API. Elke lijst (categorieën, eigenschappen, partij- & transactietypes) is een getypeerde route.'
		}
	],

	boxTitle: 'Eén call. Een geciteerd btw-rooster.',
	boxBody:
		'Stuur een transactie vanuit het perspectief van leverancier of afnemer. Krijg elk rooster, zijn bedrag en de bepalingen die het daar plaatsten, plus gedetecteerde waarschuwingen en inconsistenties.',
	boxPoints: [
		'Het perspectief bepaalt wiens aangifte het rooster opbouwt.',
		'Elk rooster draagt zijn juridische verantwoording en referentie.',
		'Waarschuwingen en inconsistenties komen boven voor je indient.'
	],
	infTitle: 'Vrije tekst in, gestructureerd object uit.',
	infBody:
		'Zet een lijnomschrijving om in een getypeerd object (het type, het afgeleide transactietype en herkende eigenschappen), klaar om in een transactie te plaatsen voor analyse.',
	tabReq: 'Request',
	tabRes: 'Response',

	pdfKicker: 'Factuurextractie',
	pdfTitle: 'Sleep een pdf, krijg de feiten.',
	pdfSub:
		'Stuur een pdf-factuur en krijg de transactiefeiten die erop staan terug, elk met de zekerheid van de extractie. Geef ze meteen door aan de analyse.',
	pdfCardHead: 'Gehaald uit je factuur',
	pdfFields: [
		'Factuur- en leveringsdatum',
		'Bedragen',
		'Leverancier en klant',
		'Het geclassificeerde object',
		'Elke gefactureerde lijn'
	],
	pdfFoot: 'Elk veld draagt zijn extractiezekerheid.',

	routesKicker: 'Elke route die je nodig hebt',
	routesTitle: 'Getypeerd van begin tot eind.',
	routesSub:
		'Analyse, factuurextractie, validatie van btw-nummers en elk vocabularium dat een transactie nodig heeft, elk als getypeerd endpoint. Elke route vereist een bearer token.',
	routeGroups: [
		{
			name: 'Analyse',
			desc: 'Btw-roosters en hun rechtsgrond',
			routes: [
				{
					m: 'POST',
					path: '/box-analysis',
					d: 'Btw-roosters voor een transactie, met bedragen, juridische verantwoording, waarschuwingen en inconsistenties'
				}
			]
		},
		{
			name: 'Factuur',
			desc: 'Van pdf naar transactiefeiten',
			routes: [
				{
					m: 'POST',
					path: '/parse-invoice',
					d: 'Data, bedragen, beide partijen, het geclassificeerde object en de gefactureerde lijnen uit een pdf-factuur, elk met zijn zekerheid'
				}
			]
		},
		{
			name: 'Inferentie',
			desc: 'Van vrije tekst naar structuur',
			routes: [
				{
					m: 'POST',
					path: '/inference/object',
					d: 'Objecttype, transactietype en herkende eigenschappen uit een vrije beschrijving'
				}
			]
		},
		{
			name: 'Btw-nummers',
			desc: 'Validatie en formaten',
			routes: [
				{
					m: 'POST',
					path: '/vat-validation',
					d: 'Valideer een EU-btw-nummer tegen een officieel register, of enkel op formaat, met elke reden waarom het faalde'
				},
				{
					m: 'GET',
					path: '/vat-template',
					d: 'Verwacht btw-nummerformaat voor elk ondersteund land'
				},
				{ m: 'GET', path: '/vat-template/{country}', d: 'Verwacht btw-nummerformaat voor één land' }
			]
		},
		{
			name: 'Categorieën',
			desc: 'Objectcategorieën en groeperingen',
			routes: [
				{
					m: 'GET',
					path: '/category',
					d: 'Objectcategorieën, met brede categorie, transactietypes en aanvaarde eigenschappen'
				},
				{ m: 'GET', path: '/category/{value}', d: 'Eén objectcategorie' },
				{ m: 'GET', path: '/category/broad', d: 'Brede categoriegroeperingen' },
				{
					m: 'GET',
					path: '/category/broad/{value}',
					d: 'Eén brede categorie, met de categorieën die ze groepeert'
				}
			]
		},
		{
			name: 'Eigenschappen',
			desc: 'Wat objecten en partijen kunnen dragen',
			routes: [
				{ m: 'GET', path: '/property/object', d: 'Objecteigenschappen en hun argumenten' },
				{ m: 'GET', path: '/property/object/{value}', d: 'Eén objecteigenschap' },
				{ m: 'GET', path: '/property/party', d: 'Partijeigenschappen en hun argumenten' },
				{ m: 'GET', path: '/property/party/{value}', d: 'Eén partijeigenschap' }
			]
		},
		{
			name: 'Enums',
			desc: 'Toegelaten waarden voor transactie-input',
			routes: [
				{ m: 'GET', path: '/transaction-type', d: 'Transactietypes' },
				{ m: 'GET', path: '/party-type', d: 'Partijtypes' },
				{ m: 'GET', path: '/transport-by', d: 'Transportopties' },
				{ m: 'GET', path: '/country', d: 'Herkende landen' }
			]
		}
	],
	routesLink: 'Volledige referentie op api.vatmiraal.be/doc',

	sdkKicker: 'TypeScript-SDK',
	sdkTitle: 'Integreer in enkele minuten, volledig getypeerd.',
	sdkSub:
		'De officiële VATmiraal-SDK omhult elke route met volledige types, zodat je editor elke request en response kent nog voor je ze uitvoert.',
	sdkInstall: '$ npm install @vatmiraal/vatmiraal-sdk',
	sdkCopy: 'Kopieer',
	sdkCopied: 'Gekopieerd',
	sdkLink: 'Bekijk de SDK op npm →',

	mcpKicker: 'Klaar voor agents',
	mcpTitle: 'Je AI-workflows krijgen een bewezen antwoord, geen gok.',
	mcpBody:
		'Verbind Claude, ChatGPT of je eigen agent met de VATmiraal-MCP-server. De agent verzamelt de feiten in gesprek; de deterministische engine, niet het model, berekent de btw-roosters en hun rechtsgrond.',
	mcpEndpoint: 'POST /mcp · Streamable HTTP · bearer token',
	mcpPoints: [
		{
			h: 'Raadt nooit',
			p: 'Ingebouwde instructies verbieden de agent een waarde te verzinnen. Wat ontbreekt of onduidelijk is, vraagt hij aan de gebruiker.'
		},
		{
			h: 'Bevestigt vóór de analyse',
			p: 'De agent valideert elk btw-nummer en legt de volledige transactie ter bevestiging voor, voor hij de analyse uitvoert.'
		},
		{
			h: 'Rapporteert in gewone taal',
			p: 'Elk btw-rooster komt terug met bedrag en rechtsgrond, plus eventuele waarschuwingen, in zakelijke taal, nooit ruwe JSON.'
		}
	],
	mcpToolsLabel: 'Belangrijkste tools',
	mcpTools: ['get_tax_grid_analysis', 'parse_invoice', 'validate_vat_number', 'infer_object'],
	mcpToolsMore: 'Plus referentietools, resources en een kant-en-klare analyseprompt.'
};
