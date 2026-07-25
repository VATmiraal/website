export const messages = {
	heroKicker: 'Products · API',
	heroTitle: 'The VAT engine, as an API.',
	heroSub:
		'Every transaction returns a cited tax grid, with the amount per grid and the legal provision behind it. Deterministic, auditable, yours.',
	heroBuy: 'Buy the API',
	heroDocs: 'Read the docs →',

	deliversKicker: 'What the API delivers',
	deliversTitle: 'Outcomes on every call.',
	delivers: [
		{
			h: 'A cited tax grid',
			p: 'Each grid with its amount and the provisions that put it there, ready for just-in-time audit.'
		},
		{
			h: 'Deduction recovery',
			p: 'Determine the deductible VAT owed through the API, and flag treatments that free up pre-financed cash.'
		},
		{
			h: 'Free text → object',
			p: 'Turn a line description into a typed, structured object before you analyse it.'
		},
		{
			h: 'A strong contract for your frontends',
			p: 'A strong contract to build your UI through the API. Every list (categories, properties, party & transaction types) is a typed route.'
		}
	],

	boxTitle: 'One call. A cited tax grid.',
	boxBody:
		'Send a transaction from the supplier or receiver perspective. Get back each grid, its amount, and the provisions that put it there, plus any warnings and inconsistencies detected.',
	boxPoints: [
		'Perspective decides whose declaration the grid is built for.',
		'Each grid carries its legal justification and reference.',
		'Warnings and inconsistencies surface before you file.'
	],

	infTitle: 'Free text in, structured object out.',
	infBody:
		'Turn a line description into a typed object (its type, the inferred transaction type, and recognised properties), ready to drop into a transaction before analysis.',
	tabReq: 'Request',
	tabRes: 'Response',

	routesKicker: 'Every route you need',
	routesTitle: 'Typed end to end.',
	routesSub:
		'Every list the UI needs is an endpoint. Categories, properties, party and transaction types, transport options, all typed. Drive your interface straight from them and it stays in sync with the engine automatically, with no manual upkeep.',
	routeDesc: {
		'/': 'Liveness check (no auth)',
		'/box-analysis': 'Cited tax grid for a transaction',
		'/inference/object': 'Structured object from free text',
		'/category': 'Object categories, with properties & types',
		'/category/{value}': 'A single object category by value',
		'/category/broad': 'Broad category groupings',
		'/category/broad/{value}': 'A single broad category by value',
		'/property/object': 'Object properties and their arguments',
		'/property/object/{value}': 'A single object property by value',
		'/property/party': 'Party properties and their arguments',
		'/property/party/{value}': 'A single party property by value',
		'/party-type': 'Allowed party types',
		'/transaction-type': 'Allowed transaction types',
		'/transport-by': 'Allowed means of transport'
	},
	routesLink: 'Full reference at api.vatmiraal.be/doc',

	mcpKicker: 'Agent-ready',
	mcpTitle: 'Your AI workflows get a proven answer, not a guess.',
	mcpBody:
		'Exposed over an MCP server, so your agents call the engine and get a deterministic, cited determination instead of a probabilistic guess.',

	priceKicker: 'Pricing',
	priceTitle: 'Priced to your usage.',
	price: 'Custom',
	priceOptions: [
		'REST API & typed OpenAPI schema',
		'MCP server for AI agents',
		'Prebuilt ERP & accounting connectors',
		'Webhooks & e-invoicing',
		'Dedicated support & SLA'
	],
	priceDepends: 'Pricing depends on volume, exposure risk, and the features you need.',
	priceCta: 'Buy the API',

	ctaTitle: 'Build on a determination you can prove.',
	ctaSub: 'Start with the API, or talk to us about MCP and custom terms.',

	soonBadge: 'Coming soon',
	soonTitle: 'The full platform is on its way.',
	soonBody:
		'The full VAT workspace, covering transactions, the tax grid, reporting, a law library and audit trail. The API is available today; the platform follows.',
	soonCta: 'Join the waitlist',
	soonCaption: 'A preview of the VATmiraal platform.'
};
