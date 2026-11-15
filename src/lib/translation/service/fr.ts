import type { IServiceMessages } from './types';

export const messages: IServiceMessages = {
	title: 'Description du service Heimdall',
	kicker: 'VATmiraal BV',
	meta: 'Version du 12 novembre 2026',
	back: '← Retour aux tarifs',
	pdfLabel: 'Télécharger le PDF',
	definitions: {
		id: 'fr-definitions',
		heading: '1. Définitions',
		items: [
			{
				term: 'Heimdall',
				desc: [
					'Le service de VATmiraal BV qui examine chaque facture au regard de la législation belge en matière de TVA et indique en quoi la proposition de comptabilisation du logiciel comptable s’en écarte.'
				]
			},
			{
				term: 'Utilisateur',
				desc: [
					'Une personne à qui le client donne accès à Heimdall. Un utilisateur ne voit que les dossiers qui lui sont attribués.'
				]
			},
			{
				term: 'Logiciel comptable',
				desc: ['Le logiciel comptable dans lequel le client tient le dossier.']
			},
			{
				term: 'Proposition de comptabilisation',
				desc: ['L’écriture que le logiciel comptable propose pour une facture.']
			},
			{
				term: 'Connexion prise en charge',
				desc: [
					'Une connexion entre Heimdall et un logiciel comptable, telle que mentionnée sur le site web de VATmiraal.'
				]
			},
			{
				term: 'Critères définis',
				desc: [
					'Les conditions que l’utilisateur définit expressément dans Heimdall pour qu’une facture sans écart soit comptabilisée automatiquement.'
				]
			},
			{
				term: 'État membre pris en charge',
				desc: [
					'Un État membre pour lequel Heimdall prend en charge les demandes de remboursement de TVA, tel que mentionné sur le site web de VATmiraal. À la date de la présente version : les Pays-Bas, la France et l’Allemagne.'
				]
			},
			{
				term: 'Contexte du dossier',
				desc: [
					'Les données relatives au dossier que Heimdall rassemble lors de l’examen des factures.'
				]
			}
		]
	},
	clauses: [
		{
			id: 'fr-examen',
			heading: '2. Examen des factures',
			clauses: [
				{
					n: '2.1',
					lead: [
						'Heimdall récupère chaque facture par une connexion prise en charge, avec la proposition de comptabilisation.'
					]
				},
				{
					n: '2.2',
					lead: [
						'Heimdall examine la facture au regard de la législation belge en matière de TVA et détermine le compte du plan comptable du dossier. Chaque appréciation mentionne la disposition légale appliquée.'
					]
				},
				{
					n: '2.3',
					lead: [
						'Pour un assujetti mixte ou partiel, Heimdall applique lors de la comptabilisation le régime de déduction du dossier : le prorata général ou l’affectation réelle. Heimdall utilise à cet effet le prorata et les données d’affectation communiqués par l’utilisateur, et ne détermine pas lui-même le prorata.'
					]
				},
				{
					n: '2.4',
					lead: ['Heimdall soumet la facture à l’approbation de l’utilisateur :'],
					list: [
						[
							'si la proposition de comptabilisation s’écarte de la loi ou utilise un autre compte, avec mention de l’écart ;'
						],
						[
							'si une donnée nécessaire pour décider fait défaut (résultat indéterminé), avec mention de cette donnée.'
						]
					]
				},
				{
					n: '2.5',
					lead: [
						'Une facture sans écart n’est comptabilisée automatiquement que si elle satisfait aux critères définis. En l’absence de critères définis, chaque facture requiert une approbation.'
					]
				},
				{
					n: '2.6',
					lead: [
						'Heimdall renvoie l’écriture approuvée ou comptabilisée automatiquement vers le logiciel comptable.'
					]
				}
			]
		},
		{
			id: 'fr-remboursement',
			heading: '3. Remboursement de TVA étrangère',
			clauses: [
				{
					n: '3.1',
					lead: [
						'Heimdall établit la demande de remboursement de la TVA d’un État membre pris en charge conformément à la ',
						{
							text: 'directive 2008/9/CE',
							url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32008L0009'
						},
						', sur la base des factures examinées. Heimdall examine à cette occasion si la TVA peut être remboursée selon le droit de cet État membre, et dépose la demande par voie électronique après approbation par l’utilisateur.'
					]
				}
			]
		},
		{
			id: 'fr-extensions-prevues',
			heading: '4. Extensions prévues',
			clauses: [
				{
					n: '4.1',
					lead: ['Les extensions suivantes sont prévues :'],
					list: [
						[
							{ b: 'Impôts sur les revenus :' },
							' examen au regard de la législation belge en matière d’impôts sur les revenus, dans la mesure où elle détermine la comptabilisation : la déductibilité de la charge ;'
						],
						[
							{ b: 'Révision :' },
							' proposition des opérations diverses nécessaires à la révision de la déduction de TVA, sur la base des factures examinées et des changements d’affectation signalés par l’utilisateur ;'
						],
						[
							{ b: 'Déclaration TVA :' },
							' dépôt électronique de la déclaration périodique à la TVA auprès du SPF Finances, après approbation par l’utilisateur et sur la base d’un mandat valable ;'
						],
						[
							{ b: 'Tâches :' },
							' tâches pertinentes au regard de la législation TVA, notamment la demande des données nécessaires pour des paramètres qui varient dans le temps, tels que le prorata ou le relevé kilométrique ;'
						],
						[
							{ b: 'Modifications législatives :' },
							' un avertissement lorsqu’une modification législative a une incidence sur le dossier, sur la base des écritures comptabilisées par Heimdall et du contexte du dossier.'
						]
					]
				},
				{
					n: '4.2',
					lead: [
						'Une extension prévue fait partie de Heimdall à compter de la date à laquelle VATmiraal communique sa disponibilité par e-mail. Elle vaut fonctionnalité nouvelle au sens de ',
						{
							text: 'durée et renouvellement',
							path: '/heimdall/pricing/rates',
							hash: 'fr-duree-et-renouvellement'
						},
						' dans les Tarifs. VATmiraal ne s’engage sur aucune date de disponibilité.'
					]
				}
			]
		},
		{
			id: 'fr-responsabilite',
			heading: '5. Responsabilité',
			clauses: [
				{
					n: '5.1',
					lead: [
						'Le client reste responsable de chaque écriture, y compris automatique, ainsi que des critères définis.'
					]
				},
				{
					n: '5.2',
					lead: [
						'Le client reste responsable du contenu et du dépôt en temps utile de chaque déclaration TVA et de chaque demande de remboursement, et vérifie l’accusé de réception de l’administration.'
					]
				},
				{
					n: '5.3',
					lead: [
						'VATmiraal n’est pas responsable d’un dépôt tardif dû à l’indisponibilité des systèmes de l’administration.'
					]
				},
				{ n: '5.4', lead: ['Heimdall ne fournit pas de conseil fiscal.'] }
			]
		},
		{
			id: 'fr-non-compris',
			heading: '6. Non compris',
			clauses: [
				{
					n: '6.1',
					lead: ['Heimdall ne comprend pas :'],
					list: [
						[
							'l’examen au regard du droit d’autres pays que la Belgique, sauf pour les demandes de remboursement dans les États membres pris en charge ;'
						],
						[
							'd’autres impôts et taxes que la TVA, sans préjudice des ',
							{ text: 'extensions prévues', hash: 'fr-extensions-prevues' },
							' ;'
						],
						['l’audit des dossiers ;'],
						['la mise en œuvre et les développements sur mesure ;'],
						['l’accès direct au moteur VATmiraal.']
					]
				}
			]
		},
		{
			id: 'fr-tarifs',
			heading: '7. Tarifs',
			clauses: [
				{
					n: '7.1',
					lead: [
						'Heimdall est facturé par facture selon les ',
						{ text: 'Tarifs', path: '/heimdall/pricing/rates', hash: 'fr-definitions' },
						'.'
					]
				},
				{
					n: '7.2',
					lead: [
						'Les opérations diverses, déclarations TVA et demandes de remboursement ne sont pas des factures et ne sont pas prises en compte dans le volume annuel.'
					]
				},
				{
					n: '7.3',
					lead: [
						'Une extension de la présente description vaut fonctionnalité nouvelle au sens de ',
						{
							text: 'durée et renouvellement',
							path: '/heimdall/pricing/rates',
							hash: 'fr-duree-et-renouvellement'
						},
						' dans les Tarifs.'
					]
				}
			]
		}
	]
};
