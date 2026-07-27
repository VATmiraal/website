export const messages = {
	heroKicker: 'Producten · API',
	heroTitle: 'De btw-engine, als API.',
	heroSub:
		'Elke transactie geeft een geciteerd btw-rooster terug, met het bedrag per rooster en de wetsbepaling erachter. Deterministisch, controleerbaar, van jou.',
	heroBuy: 'Koop de API',
	heroDocs: 'Lees de docs →',

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

	routesKicker: 'Elke route die je nodig hebt',
	routesTitle: 'Getypeerd van begin tot eind.',
	routesSub:
		'Elke lijst die de UI nodig heeft is een endpoint. Categorieën, eigenschappen, partij- en transactietypes, transportopties, allemaal getypeerd. Bouw je interface er rechtstreeks op en ze blijft automatisch in sync met de engine, zonder manueel onderhoud.',
	routeDesc: {
		'/': 'Liveness-check (geen auth)',
		'/box-analysis': 'Geciteerd btw-rooster voor een transactie',
		'/inference/object': 'Gestructureerd object uit vrije tekst',
		'/category': 'Objectcategorieën, met eigenschappen & types',
		'/category/{value}': 'Eén objectcategorie op waarde',
		'/category/broad': 'Brede categoriegroepen',
		'/category/broad/{value}': 'Eén brede categorie op waarde',
		'/property/object': 'Objecteigenschappen en hun argumenten',
		'/property/object/{value}': 'Eén objecteigenschap op waarde',
		'/property/party': 'Partijeigenschappen en hun argumenten',
		'/property/party/{value}': 'Eén partijeigenschap op waarde',
		'/party-type': 'Toegelaten partijtypes',
		'/transaction-type': 'Toegelaten transactietypes',
		'/transport-by': 'Toegelaten transportmiddelen'
	},
	routesLink: 'Volledige referentie op api.vatmiraal.be/doc',

	mcpKicker: 'Klaar voor agents',
	mcpTitle: 'Je AI-workflows krijgen een bewezen antwoord, geen gok.',
	mcpBody:
		'Beschikbaar via een MCP-server, zodat je agents de engine aanroepen en een deterministische, geciteerde determinatie krijgen in plaats van een probabilistische gok.',

	priceKicker: 'Prijzen',
	priceTitle: 'Afgestemd op je gebruik.',
	price: 'Op maat',
	priceOptions: [
		'REST API & getypeerd OpenAPI-schema',
		'MCP-server voor AI-agents',
		'Kant-en-klare ERP- & boekhoudconnectoren',
		'Webhooks & e-facturatie',
		'Dedicated support & SLA'
	],
	priceDepends:
		'De prijs hangt af van volume, blootstellingsrisico en de functies die je nodig hebt.',
	priceCta: 'Koop de API',

	ctaTitle: 'Bouw op een determinatie die je kunt bewijzen.',
	ctaSub: 'Start met de API, of praat met ons over MCP en maatwerk.',

	soonBadge: 'Binnenkort',
	soonTitle: 'Het volledige platform komt eraan.',
	soonBody:
		'De volledige btw-werkruimte met transacties, het btw-rooster, aangiften, een wetsbibliotheek en audittraject. De API is vandaag beschikbaar; het platform volgt.',
	soonCta: 'Kom op de wachtlijst',
	soonCaption: 'Een voorproef van het VATmiraal-platform.'
};
