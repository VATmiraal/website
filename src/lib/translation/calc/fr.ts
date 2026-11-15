import type { ICalcMessages } from './types';

export const messages: ICalcMessages = {
	title: 'Calculateur de prix',
	intro:
		'Calcule le montant annuel selon les tarifs de VATmiraal, avec ou sans engagement. Montants hors TVA.',
	back: '← Retour aux tarifs',
	committed: 'Engagé',
	notCommitted: 'Non engagé',
	committedVolume: 'Volume annuel engagé',
	actualVolume: 'Volume annuel réel',
	premiumShare: 'Part de factures premium (%)',
	ratesHeading: 'Tarifs par facture',
	ratesId: 'fr-tarifs',
	rulesHeading: 'Règles de calcul',
	rulesId: 'fr-regles-de-calcul',
	rules: [
		{
			lead: 'Avec engagement.',
			text: 'La tranche du volume annuel engagé détermine le prix par facture. Pour un volume au-delà de l’engagement, le prix de l’engagement contractuel reste d’application.'
		},
		{
			lead: 'Utilisation inférieure à l’engagement.',
			text: 'L’usage réel au prix sans engagement, majoré de 10 %, avec un minimum de 80 % et un maximum de 100 % du montant engagé.'
		},
		{
			lead: 'Augmentation.',
			text: 'Une seule fois par année contractuelle ; le prix de la nouvelle tranche s’applique à partir de la date de l’augmentation.'
		},
		{
			lead: 'Sans engagement.',
			text: 'Chaque facture coûte le prix de la tranche dans laquelle elle se situe selon le volume annuel cumulé.'
		},
		{
			lead: 'Premium.',
			text: 'Opérations ABC, importations, exportations, prestations de services soumises à une règle particulière de localisation, factures d’assujettis mixtes et partiels.'
		}
	],
	fullTerms: 'Conditions tarifaires complètes →',
	note: 'Calcul indicatif. Montants hors TVA.',
	tableHead: { volume: 'Volume annuel', standard: 'Standard', premium: 'Premium (2×)' },
	calcId: 'fr-calculateur',
	defaults: { committed: '288 000', actual: '288 000', share: '0' },
	s: {
		pr: 'Prix par facture',
		std: 'standard',
		prem: 'premium',
		vol: 'Volume facturé',
		over: 'Factures au-delà de l’engagement',
		a: 'Montant engagé',
		surch: 'dont supplément premium',
		tot: 'Montant annuel facturé',
		per: 'Par facture utilisée',
		tier: 'Tranche',
		inv: 'Factures',
		price: 'Prix',
		amt: 'Montant',
		altG: 'Sans engagement, même utilisation',
		altC: 'Le moins cher avec engagement',
		altCv: 'en engageant',
		more: 'et plus',
		below: 'sous engagement',
		save: 'Vous économisez',
		copy: 'Copier le calcul',
		copied: 'Copié',
		link: 'Copier le lien',
		linkOk: 'Lien copié',
		sel: 'Sélectionnez et copiez le texte ci-dessous.',
		head: 'VATmiraal – calcul de prix (indicatif, HTVA)',
		mode: 'Tarification',
		mC: 'avec engagement',
		mG: 'sans engagement',
		iC: 'Volume annuel engagé',
		iV: 'Volume annuel réel',
		iS: 'Part de factures premium'
	}
};
