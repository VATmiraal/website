import type { IRatesMessages } from './types';

export const messages: IRatesMessages = {
	title: 'Tarifs',
	kicker: 'VATmiraal BV',
	meta: 'Version du 12 novembre 2026 · Montants hors TVA',
	pdfLabel: 'Télécharger le PDF',
	definitions: {
		id: 'fr-definitions',
		heading: '1. Définitions',
		items: [
			{
				term: 'Heimdall',
				desc: [
					{
						text: 'Le service tel que décrit dans la Description du service Heimdall.',
						path: '/heimdall/pricing/service-description',
						hash: 'fr-definitions'
					}
				]
			},
			{
				term: 'Facture',
				desc: [
					'Une facture unique, entrante ou sortante, examinée par Heimdall, notes de crédit comprises, quel que soit le résultat de l’examen.'
				]
			},
			{
				term: 'Volume annuel',
				desc: [
					'Le nombre de factures par année contractuelle, factures standard et premium confondues.'
				]
			},
			{
				term: 'Engagement',
				desc: [
					'Le volume annuel auquel le client s’engage contractuellement au début de l’année contractuelle.'
				]
			},
			{
				term: 'Facture premium',
				desc: [
					'Une facture dont le raisonnement fait application d’une ',
					{ text: 'règle relevant du tarif premium', hash: 'fr-premium' },
					'.'
				]
			}
		]
	},
	tracks: {
		id: 'fr-formules',
		cards: [
			{
				k: 'Formule A',
				title: 'Avec engagement',
				items: [
					'Volume annuel fixé à l’avance.',
					'Un prix unique pour toutes les factures : celui de la tranche du volume engagé.',
					'L’utilisation au-delà de l’engagement reste au prix de la tranche engagée, même si le volume atteint une tranche au prix inférieur.'
				],
				href: 'fr-avec-engagement'
			},
			{
				k: 'Formule B',
				title: 'Sans engagement',
				items: [
					'Pas d’engagement, pas d’estimation.',
					'Chaque facture au prix de la tranche dans laquelle elle se situe.',
					'Pas de montant minimum, pas de correction a posteriori.'
				],
				href: 'fr-sans-engagement'
			}
		],
		calcText: 'Calculez votre montant annuel pour les deux formules avec le calculateur de prix'
	},
	rates: {
		id: 'fr-tarifs',
		heading: '2. Tarifs par facture',
		tableHead: { volume: 'Volume annuel', standard: 'Standard', premium: 'Premium (2×)' }
	},
	clauses: [
		{
			id: 'fr-avec-engagement',
			heading: '3. Avec engagement',
			clauses: [
				{
					n: '3.1',
					lead: [
						'La tranche du volume engagé détermine le prix par facture pour toute l’année contractuelle.'
					]
				},
				{
					n: '3.2',
					lead: [
						'Un volume de factures au-delà de l’engagement est facturé au prix de la tranche engagée, même si le volume annuel atteint ainsi une tranche au prix inférieur. Un prix inférieur ne s’applique qu’après l’augmentation de l’engagement conformément au point 3.4.'
					]
				},
				{
					n: '3.3',
					lead: [
						'Si, à la fin de l’année contractuelle, le volume annuel est inférieur à l’engagement, le prix engagé ne s’applique pas. Le client paie le volume annuel réel au prix sans engagement (voir 4.1), majoré de 10 %, avec un minimum de 80 % et un maximum de 100 % du montant engagé (volume engagé × prix de la tranche engagée).'
					]
				},
				{
					n: '3.4',
					lead: [
						'Le client peut augmenter son engagement une seule fois par année contractuelle. Le prix de la nouvelle tranche s’applique à partir de la date de l’augmentation, sans effet rétroactif.'
					]
				},
				{
					n: '3.5',
					lead: [
						'Pour la première année contractuelle, l’engagement ne peut dépasser le volume annuel démontrable de l’année précédente. Pour les partenaires sans historique, l’engagement est progressif sur trois années contractuelles.'
					]
				},
				{
					n: '3.6',
					lead: [
						'En cas de renouvellement, l’engagement est fixé sur la base du volume annuel réel de l’année contractuelle précédente.'
					]
				},
				{ n: '3.7', lead: ['Le prix d’une facture déjà tarifée n’est pas réduit a posteriori.'] }
			]
		},
		{
			id: 'fr-sans-engagement',
			heading: '4. Sans engagement',
			clauses: [
				{
					n: '4.1',
					lead: [
						'Chaque facture est tarifée au prix de la tranche dans laquelle elle se situe selon le volume annuel cumulé.'
					]
				},
				{ n: '4.2', lead: ['Aucune correction n’intervient a posteriori.'] }
			]
		},
		{
			id: 'fr-premium',
			heading: '5. Factures premium',
			clauses: [
				{
					n: '5.1',
					lead: ['Règles relevant du tarif premium :'],
					list: [
						['opérations ABC ;'],
						['importations ;'],
						['exportations ;'],
						['prestations de services soumises à une règle particulière de localisation ;'],
						['factures d’assujettis mixtes et partiels.']
					]
				},
				{
					n: '5.2',
					lead: [
						'Le rapport d’utilisation mentionne, pour chaque facture premium, la disposition légale qui a déclenché le tarif premium.'
					]
				},
				{
					n: '5.3',
					lead: [
						'En cas de résultat indéterminé, la facture est premium si le raisonnement a fait application d’une règle relevant du tarif premium.'
					]
				}
			]
		},
		{
			id: 'fr-general',
			heading: '6. Dispositions générales',
			clauses: [
				{
					n: '6.1',
					lead: [
						'Chaque facture n’est comptée qu’une seule fois. Un nouveau contrôle après correction ou complément de données n’est pas facturé.'
					]
				},
				{ n: '6.2', lead: ['Aucun montant minimum par contrat n’est d’application.'] }
			]
		},
		{
			id: 'fr-duree-et-renouvellement',
			heading: '7. Durée et renouvellement',
			clauses: [
				{
					n: '7.1',
					lead: [
						'Le contrat est conclu pour une année contractuelle et est reconduit tacitement pour des périodes successives d’une année contractuelle, sauf résiliation par l’une des parties au plus tard deux mois avant la fin de l’année contractuelle en cours.'
					]
				},
				{
					n: '7.2',
					lead: [
						'Les tarifs sont fixes pendant l’année contractuelle, sous réserve d’une augmentation de l’engagement par le client.'
					]
				},
				{
					n: '7.3',
					lead: [
						'À chaque date anniversaire du contrat, les tarifs sont adaptés selon la formule P = P₀ × (0,2 + 0,8 × S / S₀). P₀ est le tarif au début du contrat ou, après la fixation de nouveaux tarifs, le nouveau tarif. S₀ est l’indice Agoria Digital à ce moment et S le dernier indice Agoria Digital publié avant la date anniversaire. La partie variable de 80 % correspond à la part des coûts salariaux dans le coût de revient du service. L’adaptation s’applique tant à la hausse qu’à la baisse et le résultat est arrondi à trois décimales. Cette indexation ne requiert aucune notification préalable.'
					]
				},
				{
					n: '7.4',
					lead: [
						'VATmiraal peut fixer de nouveaux tarifs pour l’année contractuelle suivante. Elle les communique par e-mail au plus tard trois mois avant la fin de l’année contractuelle en cours. À défaut de résiliation en temps utile par le client, le contrat est reconduit aux nouveaux tarifs.'
					]
				},
				{
					n: '7.5',
					lead: [
						'Si les nouveaux tarifs sont communiqués plus tard, les tarifs en vigueur, indexés selon la formule ci-dessus, restent d’application pour l’année contractuelle suivante.'
					]
				},
				{
					n: '7.6',
					lead: ['Les nouveaux tarifs reposent sur des motifs objectifs, notamment :'],
					list: [
						['des fonctionnalités nouvelles ou étendues ou un champ d’application élargi ;'],
						[
							'des modifications de la législation ou de la pratique administrative nécessitant des adaptations ;'
						],
						['l’évolution des coûts de personnel, d’infrastructure ou d’autres tiers.']
					]
				},
				{
					n: '7.7',
					lead: [
						'Les nouveaux modules ou services sont proposés séparément et ne sont facturés qu’après acceptation par le client.'
					]
				},
				{
					n: '7.8',
					lead: [
						'La liste des règles relevant du tarif premium ne peut être modifiée qu’au renouvellement, selon la même procédure.'
					]
				}
			]
		}
	]
};
