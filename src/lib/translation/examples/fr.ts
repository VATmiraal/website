import type { IExamplesMessages } from './types';

export const messages: IExamplesMessages = {
	id: 'fr-examples',
	title: 'Cas d’usage',
	intro:
		'Comment les tarifs fonctionnent en pratique, étape par étape. Chaque exemple suit une clause des tarifs. Montants hors TVA.',
	back: '← Retour aux tarifs',
	clause: 'Clause',
	newTab: 'Ouvrir cette clause sur la page des tarifs dans un nouvel onglet',
	totalLabel: 'Montant annuel',
	perLabel: 'Par facture',
	stepFlat: 'Prix de la tranche engagée × volume',
	stepTiers: 'Chaque tranche à son propre prix',
	stepBase: 'Usage au prix sans engagement',
	stepPenalty: 'Plus 10 %',
	stepFloor: 'Minimum : 80 % du montant engagé',
	stepCap: 'Maximum : le montant engagé',
	stepResult: 'Dans les limites',
	examples: [
		{
			n: '3.1',
			section: 'with-commitment',
			kind: 'at',
			title: 'À l’engagement',
			setup:
				'Vous engagez {committed} factures et utilisez exactement cela. Le volume engagé fixe un seul prix pour chaque facture.'
		},
		{
			n: '4.1',
			section: 'without-commitment',
			kind: 'without',
			title: 'Sans engagement',
			setup:
				'Vous ne prenez aucun engagement et traitez {actual} factures. Chaque facture est facturée à la tranche dans laquelle elle se situe.'
		},
		{
			n: '3.3',
			section: 'with-commitment',
			kind: 'below',
			title: 'Sous l’engagement',
			setup:
				'Vous engagez {committed} factures mais n’en traitez que {actual}. Le prix engagé disparaît et le montant est encadré.'
		},
		{
			n: '3.2',
			section: 'with-commitment',
			kind: 'above',
			title: 'Au-dessus de l’engagement',
			setup:
				'Vous engagez {committed} factures mais en traitez {actual}. Les factures supplémentaires restent au prix de la tranche engagée.'
		}
	]
};
