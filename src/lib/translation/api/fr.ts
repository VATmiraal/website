export const messages = {
	heroKicker: 'Produits · API',
	heroTitle: 'Le moteur TVA, en API.',
	heroSub:
		'Chaque transaction renvoie une grille TVA citée, avec le montant par grille et la disposition légale qui la sous-tend. Déterministe, vérifiable, à vous.',
	heroBuy: "Acheter l'API",
	heroDocs: 'Lire la doc →',

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

	routesKicker: 'Toutes les routes nécessaires',
	routesTitle: 'Typé de bout en bout.',
	routesSub:
		"Chaque liste dont l'UI a besoin est un endpoint. Catégories, propriétés, types de partie et de transaction, options de transport, toutes typées. Pilotez votre interface directement à partir d'elles et elle reste toujours synchronisée avec le moteur, sans maintenance manuelle.",
	routeDesc: {
		'/': 'Vérification de disponibilité (sans auth)',
		'/box-analysis': 'Grille TVA citée pour une transaction',
		'/inference/object': 'Objet structuré à partir de texte libre',
		'/category': "Catégories d'objet, avec propriétés & types",
		'/category/{value}': "Une catégorie d'objet par valeur",
		'/category/broad': 'Regroupements en catégories larges',
		'/category/broad/{value}': 'Une catégorie large par valeur',
		'/property/object': "Propriétés d'objet et leurs arguments",
		'/property/object/{value}': "Une propriété d'objet par valeur",
		'/property/party': 'Propriétés de partie et leurs arguments',
		'/property/party/{value}': 'Une propriété de partie par valeur',
		'/party-type': 'Types de partie autorisés',
		'/transaction-type': 'Types de transaction autorisés',
		'/transport-by': 'Moyens de transport autorisés'
	},
	routesLink: 'Référence complète sur api.vatmiraal.be/doc',

	mcpKicker: 'Prêt pour les agents',
	mcpTitle: 'Vos workflows IA obtiennent une réponse prouvée, pas une supposition.',
	mcpBody:
		"Exposé via un serveur MCP, pour que vos agents appellent le moteur et obtiennent une détermination déterministe et citée plutôt qu'une supposition probabiliste.",

	priceKicker: 'Tarifs',
	priceTitle: 'Adapté à votre usage.',
	price: 'Sur devis',
	priceOptions: [
		'API REST & schéma OpenAPI typé',
		'Serveur MCP pour agents IA',
		'Connecteurs ERP & comptabilité préconfigurés',
		'Webhooks & facturation électronique',
		'Support dédié & SLA'
	],
	priceDepends:
		"Le prix dépend du volume, du risque d'exposition et des fonctionnalités dont vous avez besoin.",
	priceCta: "Acheter l'API",

	ctaTitle: 'Construisez sur une détermination que vous pouvez prouver.',
	ctaSub: "Commencez avec l'API, ou parlons MCP et conditions sur mesure.",

	soonBadge: 'Bientôt',
	soonTitle: 'La plateforme complète arrive.',
	soonBody:
		"L'espace de travail TVA complet, avec transactions, grille TVA, déclarations, bibliothèque légale et piste d'audit. L'API est disponible aujourd'hui ; la plateforme suit.",
	soonCta: "Rejoindre la liste d'attente",
	soonCaption: 'Un aperçu de la plateforme VATmiraal.'
};
