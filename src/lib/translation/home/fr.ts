export const messages = {
	heroKicker: 'Ce que vaut une TVA correcte',
	heroTitle: 'Votre TVA est correcte, et vous pouvez le prouver.',
	heroSub:
		'La TVA correcte est la TVA la moins chère : traiter correctement chaque transaction vous évite des corrections coûteuses et récupère les déductions qui vous reviennent, avec la disposition légale derrière chaque conclusion.',
	heroCtaPrimary: 'Demander une démo',
	heroCtaGhost: "Voir l'API →",

	proofTx: 'Services marketing · Belgique → Pays-Bas',
	proofBadge: 'Prouvé',
	proofBox: 'Grille 44',
	proofAmount: '€ 7 200',
	proofJustLabel: 'Justification',
	proofJust: 'Service à un assujetti, situé là où le preneur est établi.',
	proofRefLabel: 'Base légale',
	proofRef: 'WBTW art. 21 §2',
	proofWarnings: '1 alerte',
	proofIncons: 'Aucune incohérence',
	proofWarnMsg:
		'Un établissement stable belge apparaît désormais pour ce client NL, ce qui pourrait déplacer le lieu de prestation vers la Belgique et rendre 21% de TVA belge exigible. Confirmez le preneur avant de déclarer.',

	sectorsKicker: 'Conçu pour chaque secteur',
	sectorsTitle: "Les cas difficiles, où qu'ils soient.",
	sectorsSub:
		'Chaque secteur a ses propres pièges TVA. VATmiraal détermine le traitement correct, avec sa base légale, pour ceux qui comptent pour vous.',
	sectors: [
		{
			h: 'E-commerce',
			p: 'B2C transfrontalier, seuils OSS/IOSS et règles de fournisseur présumé des marketplaces, résolus par commande.'
		},
		{
			h: 'Banques & finance',
			p: 'Services financiers exonérés avec déduction partielle (prorata et affectation réelle), restés défendables.'
		},
		{
			h: 'Pouvoirs locaux',
			p: 'Activités réparties entre non imposable, exonéré et taxé, avec le bon traitement par flux.'
		},
		{
			h: 'Hôpitaux',
			p: "Exonérations médicales aux côtés d'opérations taxées, avec révision des biens d'investissement en usage mixte."
		},
		{
			h: 'Écoles',
			p: "Limites de l'exonération de l'enseignement et activités mixtes, classées avec leur base légale."
		},
		{
			h: 'Industrie',
			p: 'Transactions en chaîne et ABC, autoliquidation et lieu de prestation tout au long de la chaîne.'
		},
		{
			h: 'Transport de personnes',
			p: 'Lieu de prestation selon la distance parcourue, par pays, trajets nationaux et internationaux traités séparément.'
		}
	],

	outcomesKicker: 'Des résultats, pas des fonctionnalités',
	outcomesTitle: 'Ce que vaut une TVA correcte, ligne par ligne.',
	outcomesSub:
		"Chaque résultat ci-dessous découle d'un principe : traitez correctement, et l'argent suit.",
	outcomes: [
		{
			h: 'Attrapez-la avant de déclarer',
			p: "Signalée avant que l'e-reporting n'en fasse une correction avec intérêts."
		},
		{
			h: 'Récupérez la TVA laissée de côté',
			p: 'Détecte la TVA déductible jamais réclamée, et la reconvertit en trésorerie.'
		},
		{
			h: 'Libérez la trésorerie bloquée en TVA',
			p: 'Identifie les cas où le traitement correct réduit la TVA que vous préfinancez.'
		},
		{
			h: 'Réussissez le prorata, des deux côtés',
			p: "Déduction générale et réelle, révision des biens d'investissement, ni sous- ni sur-récupération."
		},
		{
			h: 'Voyez le résultat avant de vous engager',
			p: 'Comparez les constructions, chacune avec sa base légale.'
		},
		{
			h: "Transformez le risque d'audit en position",
			p: 'Une réponse citée et défendable pour chaque ligne.'
		}
	],
	outcomesCta: "Demandez un audit inversé de votre livre d'achats →",

	llmTitle: 'Pourquoi nous faire confiance',
	llmCols: [
		{
			h: 'Raisonné, non prédit',
			p: "Le traitement est déduit du droit appliqué à vos faits, pas deviné à partir de données d'entraînement. Aucune hallucination, aucune probabilité."
		},
		{
			h: 'Chaque conclusion a sa citation',
			p: "Chaque conclusion porte la disposition légale sur laquelle elle repose. Tout fiscaliste peut relire le raisonnement étape par étape. Prêt pour l'audit."
		},
		{
			h: 'La même réponse à chaque fois',
			p: "Déterministe par conception, avec les dispositions nationales reliées à leur équivalent dans la directive TVA de l'UE ; le raisonnement transfrontalier est explicite."
		}
	],
	prologKicker: 'VATmiraal fonctionne avec Prolog, une norme ISO',

	interopKicker: 'Indépendant de la plateforme',
	interopTitle: 'Fonctionne avec la stack que vous utilisez déjà.',
	interopSub:
		'VATmiraal lit vos ERP et logiciels comptables, renvoie des déterminations citées via une API REST ou MCP, et réécrit les attributs juridiques comme données maîtres. Sans remplacement, sans verrouillage.',
	interopCards: [
		{
			h: 'Enrichit les données maîtres de votre ERP',
			p: 'Les attributs juridiques dont dépend une détermination vivent comme des champs structurés dans vos données maîtres, pour un contrôle granulaire de chaque résultat.'
		},
		{
			h: 'Prêt pour les agents',
			p: "Exposé via un serveur MCP, pour que vos workflows IA appellent le moteur et obtiennent une réponse prouvée plutôt qu'une supposition probabiliste."
		},
		{
			h: "Tenez bon sous l'e-reporting",
			p: "Quand l'administration rapproche ses chiffres des vôtres ligne par ligne, vous détenez déjà la position raisonnée et citée pour chaque ligne."
		}
	],
	interopSystemsLabel: 'Connecteurs ERP & comptabilité (bientôt)',
	interopSystems: [
		'SAP',
		'Microsoft Dynamics',
		'Exact Online',
		'Odoo',
		'Winbooks',
		'Yuki',
		'Billit'
	],
	interopChannelsLabel: 'Facturation électronique & événements (bientôt)',
	interopChannels: ['Peppol', 'Webhooks'],
	interopProtocolsLabel: 'Intégrez comme vous construisez',
	interopProtocols: ['API REST', 'Serveur MCP', 'CSV / Excel'],
	interopNote:
		"L'API et le serveur MCP sont disponibles aujourd'hui. Les connecteurs préconfigurés et les webhooks arrivent. Dites-nous quel système vous utilisez et nous le prioriserons.",

	ctaTitle: 'Intégration plus poussée ? Workflow sur mesure ? Un besoin précis ?',
	ctaSub:
		'Nous sommes une équipe dynamique, flexible et innovante, toujours ouverte à la discussion.',
	ctaBtn: 'Contactez-nous',
	ctaGhost: "Découvrir l'API →"
};
