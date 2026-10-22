export const messages = {
	// ── Engine landing (/engine) ──
	heroKicker: 'VATmiraal API',
	heroTitle: 'A versatile engine to nail your VAT.',
	heroSub: 'VATmiraal powers your ViDA transformation, inside your current workflow.',
	heroBuy: 'Buy the engine & agent',
	heroDocs: 'Read the docs →',

	featKicker: 'Built for tax professionals',
	featTitle: 'The one-stop shop for VAT.',
	featSub:
		'With the law as our basis, we deliver the VAT features that matter in a deterministic, flexible and reliable way.',
	fg: [
		{
			tag: 'Determine',
			items: [
				{
					n: 'VAT determination',
					d: 'Rate, place of supply, exemption and VAT debtor for every transaction'
				},
				{ n: 'Reverse charge', d: 'Correctly attributed, domestic and cross-border' },
				{ n: 'Partial exemption', d: 'Mixed activities and pro-rata, kept defensible' },
				{ n: 'Right to deduct', d: 'Under- and over-deduction caught before they cost you' },
				{ n: 'Audit proof', d: 'A complete legal trail behind every conclusion' },
				{ n: 'Reverse audit', d: 'VAT consistency of your booked invoices' }
			]
		},
		{
			tag: 'Verify',
			items: [
				{ n: 'VIES integration', d: 'EU VAT numbers validated live against VIES' },
				{ n: 'Official registries', d: 'Connected to official tax information registries' },
				{
					n: 'Consistency checking',
					d: 'The same supply gets the same treatment, across your history'
				}
			]
		},
		{
			tag: 'Report & recover',
			items: [
				{ n: 'Return reporting', d: 'Amounts mapped to the declaration tax grids' },
				{ n: 'VAT revision', d: 'Revision of deductions on capital goods, tracked over time' },
				{ n: 'VAT refund', d: 'Refund claims prepared with their legal basis' },
				{ n: 'OSS reporting', d: 'Cross-border B2C sales prepared for the OSS return' }
			]
		},
		{
			tag: 'Connect',
			items: [
				{ n: 'PDF support', d: 'Invoice facts extracted straight from a PDF' },
				{ n: 'E-invoicing', d: 'Integrates with structured e-invoices' },
				{ n: 'VATEX codes', d: 'Exemption reasons expressed as standard VATEX codes' }
			]
		}
	],

	// ── Developer page (/engine/dev) ──
	docsKicker: 'For developers',
	docsTitle: 'How the API works.',
	docsSub:
		'Requests, responses and routes, with real examples. For the complete endpoint reference, open the API reference.',
	docsRefLink: 'Open the API reference →',
	docsSpecLink: 'OpenAPI spec (JSON)',

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

	pdfKicker: 'Invoice extraction',
	pdfTitle: 'Drop a PDF, get the facts.',
	pdfSub:
		'Send an invoice PDF and get back the transaction facts it states, each with the certainty of its extraction. Feed them straight into the analysis.',
	pdfCardHead: 'Extracted from your invoice',
	pdfFields: [
		'Invoice and supply dates',
		'Amounts',
		'Supplier and customer',
		'The classified object',
		'Each billed line'
	],
	pdfFoot: 'Every field carries its extraction certainty.',

	routesKicker: 'Every route you need',
	routesTitle: 'Typed end to end.',
	routesSub:
		'Analysis, invoice extraction, VAT-number validation and every vocabulary a transaction needs, each as a typed endpoint. Every route requires a bearer token.',
	routeGroups: [
		{
			name: 'Analysis',
			desc: 'Tax grids and their legal grounds',
			routes: [
				{
					m: 'POST',
					path: '/box-analysis',
					d: 'Tax grids for a transaction, with amounts, legal justifications, warnings and inconsistencies'
				}
			]
		},
		{
			name: 'Invoice',
			desc: 'From PDF to transaction facts',
			routes: [
				{
					m: 'POST',
					path: '/parse-invoice',
					d: 'Dates, amounts, both parties, the classified object and the billed lines from a PDF invoice, each with its certainty'
				}
			]
		},
		{
			name: 'Inference',
			desc: 'From free text to structure',
			routes: [
				{
					m: 'POST',
					path: '/inference/object',
					d: 'Object type, transaction type and recognised properties from a free-text description'
				}
			]
		},
		{
			name: 'VAT numbers',
			desc: 'Validation and formats',
			routes: [
				{
					m: 'POST',
					path: '/vat-validation',
					d: 'Validate an EU VAT number against an official registry, or by format only, with every reason it failed'
				},
				{
					m: 'GET',
					path: '/vat-template',
					d: 'Expected VAT number format for every supported country'
				},
				{
					m: 'GET',
					path: '/vat-template/{country}',
					d: 'Expected VAT number format for one country'
				}
			]
		},
		{
			name: 'Categories',
			desc: 'Object categories and groupings',
			routes: [
				{
					m: 'GET',
					path: '/category',
					d: 'Object categories, with broad category, transaction types and accepted properties'
				},
				{ m: 'GET', path: '/category/{value}', d: 'One object category' },
				{ m: 'GET', path: '/category/broad', d: 'Broad category groupings' },
				{
					m: 'GET',
					path: '/category/broad/{value}',
					d: 'One broad category, with the categories it groups'
				}
			]
		},
		{
			name: 'Properties',
			desc: 'What objects and parties can carry',
			routes: [
				{ m: 'GET', path: '/property/object', d: 'Object properties and their arguments' },
				{ m: 'GET', path: '/property/object/{value}', d: 'One object property' },
				{ m: 'GET', path: '/property/party', d: 'Party properties and their arguments' },
				{ m: 'GET', path: '/property/party/{value}', d: 'One party property' }
			]
		},
		{
			name: 'Enums',
			desc: 'Allowed values for transaction inputs',
			routes: [
				{ m: 'GET', path: '/transaction-type', d: 'Transaction types' },
				{ m: 'GET', path: '/party-type', d: 'Party types' },
				{ m: 'GET', path: '/transport-by', d: 'Transport-by options' },
				{ m: 'GET', path: '/country', d: 'Recognised countries' }
			]
		}
	],
	routesLink: 'Full reference at api.vatmiraal.be/doc',

	sdkKicker: 'TypeScript SDK',
	sdkTitle: 'Integrate in minutes, typed end to end.',
	sdkSub:
		'The official VATmiraal SDK wraps every route with full types, so your editor knows each request and response before you run it.',
	sdkInstall: '$ npm install @vatmiraal/vatmiraal-sdk',
	sdkCopy: 'Copy',
	sdkCopied: 'Copied',
	sdkLink: 'View the SDK on npm →',

	mcpKicker: 'Agent-ready',
	mcpTitle: 'Your AI workflows get a proven answer, not a guess.',
	mcpBody:
		'Connect Claude, ChatGPT or your own agent to the VATmiraal MCP server. The agent gathers the facts in conversation; the deterministic engine, not the model, computes the tax grids and their legal grounds.',
	mcpEndpoint: 'POST /mcp · Streamable HTTP · bearer token',
	mcpPoints: [
		{
			h: 'Never guesses',
			p: 'Built-in instructions forbid the agent from inventing a value. Anything missing or ambiguous, it asks the user.'
		},
		{
			h: 'Confirms before it analyses',
			p: 'The agent validates each VAT number, then plays the full transaction back for confirmation before running the analysis.'
		},
		{
			h: 'Reports in plain language',
			p: 'Each tax grid comes back with its amount and legal ground, plus any warnings, in business language, never raw JSON.'
		}
	],
	mcpToolsLabel: 'Key tools',
	mcpTools: ['get_tax_grid_analysis', 'parse_invoice', 'validate_vat_number', 'infer_object'],
	mcpToolsMore: 'Plus reference tools, resources and a ready-made analysis prompt.'
};
