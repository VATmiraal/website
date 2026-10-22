export const messages = {
	// ── Engine landing (/engine) ──
	heroKicker: 'API VATmiraal',
	heroTitle: 'Un moteur polyvalent pour une TVA sans faille.',
	heroSub: 'VATmiraal propulse votre transformation ViDA, au sein de vos processus actuels.',
	heroBuy: "Acheter le moteur & l'agent",
	heroDocs: 'Lire la doc →',

	featKicker: 'Conçu pour les fiscalistes',
	featTitle: 'Le guichet unique de la TVA.',
	featSub:
		'En nous fondant sur la loi, nous offrons les fonctionnalités TVA essentielles de manière déterministe, flexible et fiable.',
	fg: [
		{
			tag: 'Déterminer',
			items: [
				{
					n: 'Détermination TVA',
					d: 'Taux, lieu de prestation, exonération et redevable pour chaque transaction'
				},
				{ n: 'Autoliquidation', d: 'Correctement attribuée, en national comme en transfrontalier' },
				{ n: 'Exonération partielle', d: 'Activités mixtes et prorata, restés défendables' },
				{ n: 'Droit à déduction', d: "Sous- et sur-déduction détectées avant qu'elles ne coûtent" },
				{
					n: "À l'épreuve de l'audit",
					d: 'Une trace juridique complète derrière chaque conclusion'
				},
				{ n: 'Audit inversé', d: 'Cohérence TVA de vos factures comptabilisées' }
			]
		},
		{
			tag: 'Vérifier',
			items: [
				{ n: 'Intégration VIES', d: 'Numéros de TVA UE validés en direct via VIES' },
				{ n: 'Registres officiels', d: "Connecté aux registres officiels d'information fiscale" },
				{
					n: 'Contrôle de cohérence',
					d: 'La même opération reçoit le même traitement, sur tout votre historique'
				}
			]
		},
		{
			tag: 'Déclarer & récupérer',
			items: [
				{ n: 'Déclaration', d: 'Montants répartis dans les grilles de la déclaration TVA' },
				{
					n: 'Révision TVA',
					d: "Révision des déductions sur biens d'investissement, suivie dans le temps"
				},
				{ n: 'Remboursement TVA', d: 'Demandes de remboursement préparées avec leur base légale' },
				{
					n: 'Déclaration OSS',
					d: 'Ventes B2C transfrontalières préparées pour la déclaration OSS'
				}
			]
		},
		{
			tag: 'Connecter',
			items: [
				{ n: 'Support PDF', d: "Données de facture extraites directement d'un PDF" },
				{ n: 'Facturation électronique', d: "S'intègre aux factures électroniques structurées" },
				{ n: 'Codes VATEX', d: "Motifs d'exonération exprimés en codes VATEX standard" }
			]
		}
	],

	// ── Developer page (/engine/dev) ──
	docsKicker: 'Pour les développeurs',
	docsTitle: "Comment fonctionne l'API.",
	docsSub:
		'Requêtes, réponses et routes, avec de vrais exemples. Pour la référence complète des endpoints, ouvrez la référence API.',
	docsRefLink: 'Ouvrir la référence API →',
	docsSpecLink: 'Spécification OpenAPI (JSON)',

	deliversKicker: "Ce que l'API livre",
	deliversTitle: 'Des résultats à chaque appel.',
	delivers: [
		{
			h: 'Une grille TVA citée',
			p: "Chaque grille avec son montant et les dispositions qui l'y ont placée, prête pour un audit à tout moment."
		},
		{
			h: 'Récupération de déduction',
			p: "Déterminez la TVA déductible due via l'API et repérez les traitements qui libèrent la trésorerie préfinancée."
		},
		{
			h: 'Texte libre → objet',
			p: "Transformez une description de ligne en objet typé et structuré avant de l'analyser."
		},
		{
			h: 'Un contrat fort pour vos frontends',
			p: "Un contrat fort pour construire votre UI grâce à l'API. Chaque liste (catégories, propriétés, types de partie & transaction) est une route typée."
		}
	],

	boxTitle: 'Un appel. Une grille TVA citée.',
	boxBody:
		"Envoyez une transaction du point de vue du fournisseur ou du preneur. Recevez chaque grille, son montant et les dispositions qui l'y ont placée, ainsi que les avertissements et incohérences détectés.",
	boxPoints: [
		'Le point de vue décide de quelle déclaration la grille est construite.',
		'Chaque grille porte sa justification légale et sa référence.',
		'Avertissements et incohérences remontent avant la déclaration.'
	],
	infTitle: 'Texte libre en entrée, objet structuré en sortie.',
	infBody:
		"Transformez une description de ligne en objet typé (son type, le type de transaction déduit et les propriétés reconnues), prêt à insérer dans une transaction avant l'analyse.",
	tabReq: 'Requête',
	tabRes: 'Réponse',

	pdfKicker: 'Extraction de factures',
	pdfTitle: 'Déposez un PDF, obtenez les faits.',
	pdfSub:
		'Envoyez une facture PDF et recevez les faits de la transaction qu’elle indique, chacun avec son degré de certitude. Transmettez-les directement à l’analyse.',
	pdfCardHead: 'Extrait de votre facture',
	pdfFields: [
		'Dates de facture et de livraison',
		'Montants',
		'Fournisseur et client',
		"L'objet classé",
		'Chaque ligne facturée'
	],
	pdfFoot: 'Chaque champ indique son degré de certitude.',

	routesKicker: 'Toutes les routes nécessaires',
	routesTitle: 'Typé de bout en bout.',
	routesSub:
		"Analyse, extraction de factures, validation des numéros de TVA et tout le vocabulaire d'une transaction, chacun en endpoint typé. Chaque route exige un bearer token.",
	routeGroups: [
		{
			name: 'Analyse',
			desc: 'Grilles TVA et leur base légale',
			routes: [
				{
					m: 'POST',
					path: '/box-analysis',
					d: "Grilles TVA d'une transaction, avec montants, justifications légales, avertissements et incohérences"
				}
			]
		},
		{
			name: 'Facture',
			desc: 'Du PDF aux faits de la transaction',
			routes: [
				{
					m: 'POST',
					path: '/parse-invoice',
					d: "Dates, montants, les deux parties, l'objet classé et les lignes facturées d'une facture PDF, chacun avec son degré de certitude"
				}
			]
		},
		{
			name: 'Inférence',
			desc: 'Du texte libre à la structure',
			routes: [
				{
					m: 'POST',
					path: '/inference/object',
					d: "Type d'objet, type de transaction et propriétés reconnues à partir d'une description libre"
				}
			]
		},
		{
			name: 'Numéros de TVA',
			desc: 'Validation et formats',
			routes: [
				{
					m: 'POST',
					path: '/vat-validation',
					d: "Valide un numéro de TVA UE auprès d'un registre officiel, ou sur le seul format, avec chaque motif d'échec"
				},
				{
					m: 'GET',
					path: '/vat-template',
					d: 'Format attendu du numéro de TVA pour chaque pays pris en charge'
				},
				{
					m: 'GET',
					path: '/vat-template/{country}',
					d: 'Format attendu du numéro de TVA pour un pays'
				}
			]
		},
		{
			name: 'Catégories',
			desc: "Catégories d'objets et regroupements",
			routes: [
				{
					m: 'GET',
					path: '/category',
					d: "Catégories d'objets, avec catégorie large, types de transaction et propriétés acceptées"
				},
				{ m: 'GET', path: '/category/{value}', d: "Une catégorie d'objet" },
				{ m: 'GET', path: '/category/broad', d: 'Regroupements de catégories larges' },
				{
					m: 'GET',
					path: '/category/broad/{value}',
					d: 'Une catégorie large, avec les catégories qu’elle regroupe'
				}
			]
		},
		{
			name: 'Propriétés',
			desc: 'Ce que portent objets et parties',
			routes: [
				{ m: 'GET', path: '/property/object', d: "Propriétés d'objet et leurs arguments" },
				{ m: 'GET', path: '/property/object/{value}', d: "Une propriété d'objet" },
				{ m: 'GET', path: '/property/party', d: 'Propriétés de partie et leurs arguments' },
				{ m: 'GET', path: '/property/party/{value}', d: 'Une propriété de partie' }
			]
		},
		{
			name: 'Énumérations',
			desc: 'Valeurs admises pour les entrées',
			routes: [
				{ m: 'GET', path: '/transaction-type', d: 'Types de transaction' },
				{ m: 'GET', path: '/party-type', d: 'Types de partie' },
				{ m: 'GET', path: '/transport-by', d: 'Options de transport' },
				{ m: 'GET', path: '/country', d: 'Pays reconnus' }
			]
		}
	],
	routesLink: 'Référence complète sur api.vatmiraal.be/doc',

	sdkKicker: 'SDK TypeScript',
	sdkTitle: 'Intégrez en quelques minutes, typé de bout en bout.',
	sdkSub:
		"Le SDK officiel VATmiraal couvre chaque route avec des types complets : votre éditeur connaît chaque requête et réponse avant même l'exécution.",
	sdkInstall: '$ npm install @vatmiraal/vatmiraal-sdk',
	sdkCopy: 'Copier',
	sdkCopied: 'Copié',
	sdkLink: 'Voir le SDK sur npm →',

	mcpKicker: 'Prêt pour les agents',
	mcpTitle: 'Vos workflows IA obtiennent une réponse prouvée, pas une supposition.',
	mcpBody:
		"Connectez Claude, ChatGPT ou votre propre agent au serveur MCP VATmiraal. L'agent recueille les faits en conversation ; le moteur déterministe, pas le modèle, calcule les grilles TVA et leur base légale.",
	mcpEndpoint: 'POST /mcp · Streamable HTTP · bearer token',
	mcpPoints: [
		{
			h: 'Ne devine jamais',
			p: "Des instructions intégrées interdisent à l'agent d'inventer une valeur. Ce qui manque ou est ambigu, il le demande à l'utilisateur."
		},
		{
			h: "Confirme avant d'analyser",
			p: "L'agent valide chaque numéro de TVA, puis soumet la transaction complète pour confirmation avant de lancer l'analyse."
		},
		{
			h: 'Répond en langage clair',
			p: 'Chaque grille TVA revient avec son montant et sa base légale, plus les avertissements, en langage métier, jamais en JSON brut.'
		}
	],
	mcpToolsLabel: 'Outils clés',
	mcpTools: ['get_tax_grid_analysis', 'parse_invoice', 'validate_vat_number', 'infer_object'],
	mcpToolsMore:
		"Plus des outils de référence, des ressources et un prompt d'analyse prêt à l'emploi."
};
