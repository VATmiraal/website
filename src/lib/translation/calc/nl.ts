import type { ICalcMessages } from './types';

export const messages: ICalcMessages = {
	title: 'Prijscalculator',
	intro:
		'Berekent het jaarbedrag volgens de tarieven van VATmiraal, met of zonder vastlegging. Bedragen exclusief btw.',
	back: '← Terug naar de tarieven',
	committed: 'Vastgelegd',
	notCommitted: 'Niet vastgelegd',
	committedVolume: 'Vastgelegd jaarvolume',
	actualVolume: 'Werkelijk jaarvolume',
	premiumShare: 'Aandeel premiumfacturen (%)',
	ratesHeading: 'Tarieven per factuur',
	ratesId: 'nl-tarieven',
	rulesHeading: 'Rekenregels',
	rulesId: 'nl-rekenregels',
	rules: [
		{
			lead: 'Met vastlegging.',
			text: 'De schijf van het vastgelegde jaarvolume bepaalt de prijs van elke factuur. Facturen boven de vastlegging kosten dezelfde prijs.'
		},
		{
			lead: 'Gebruik onder de vastlegging.',
			text: 'Het werkelijke gebruik tegen de prijs zonder vastlegging, verhoogd met 10%, met een minimum van 80% en een maximum van 100% van het vastgelegde bedrag.'
		},
		{
			lead: 'Verhoging.',
			text: 'Eenmaal per contractjaar; de prijs van de nieuwe schijf geldt vanaf de datum van verhoging.'
		},
		{
			lead: 'Zonder vastlegging.',
			text: 'Elke factuur kost de prijs van de schijf waarin zij valt volgens het cumulatieve jaarvolume.'
		},
		{
			lead: 'Premium.',
			text: 'ABC-transacties, invoer, uitvoer, diensten met een bijzondere plaatsbepalingsregel, facturen van gemengde en gedeeltelijke btw-plichtigen.'
		}
	],
	fullTerms: 'Volledige tariefvoorwaarden →',
	note: 'Indicatieve berekening. Bedragen exclusief btw.',
	tableHead: { volume: 'Jaarvolume', standard: 'Standaard', premium: 'Premium (2×)' },
	calcId: 'nl-calculator',
	defaults: { committed: '288.000', actual: '288.000', share: '0' },
	s: {
		pr: 'Prijs per factuur',
		std: 'standaard',
		prem: 'premium',
		vol: 'Aangerekend volume',
		over: 'Facturen boven de vastlegging',
		a: 'Vastgelegd bedrag',
		surch: 'waarvan premiumtoeslag',
		tot: 'Aangerekend jaarbedrag',
		per: 'Per gebruikte factuur',
		tier: 'Schijf',
		inv: 'Facturen',
		price: 'Prijs',
		amt: 'Bedrag',
		altG: 'Zonder vastlegging, zelfde gebruik',
		altC: 'Goedkoopst met vastlegging',
		altCv: 'bij',
		more: 'en meer',
		below: 'onder vastlegging',
		save: 'Je bespaart',
		copy: 'Kopieer berekening',
		copied: 'Gekopieerd',
		link: 'Kopieer link',
		linkOk: 'Link gekopieerd',
		sel: 'Selecteer en kopieer de tekst hieronder.',
		head: 'VATmiraal – prijsberekening (indicatief, excl. btw)',
		mode: 'Tarief',
		mC: 'met vastlegging',
		mG: 'zonder vastlegging',
		iC: 'Vastgelegd jaarvolume',
		iV: 'Werkelijk jaarvolume',
		iS: 'Aandeel premiumfacturen'
	}
};
