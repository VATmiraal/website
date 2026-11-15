import type { ICalcMessages } from './types';

export const messages: ICalcMessages = {
	title: 'Price calculator',
	intro:
		'Calculates the annual amount under the VATmiraal rates, with or without a commitment. Amounts excluding VAT.',
	back: '← Back to the rates',
	committed: 'Committed',
	notCommitted: 'Not committed',
	committedVolume: 'Committed annual volume',
	actualVolume: 'Actual annual volume',
	premiumShare: 'Share of premium invoices (%)',
	ratesHeading: 'Rates per invoice',
	ratesId: 'en-rates',
	rulesHeading: 'Calculation rules',
	rulesId: 'en-calculation-rules',
	rules: [
		{
			lead: 'With a commitment.',
			text: 'The tier of the committed annual volume sets the price of every invoice. Invoices above the commitment cost the same price.'
		},
		{
			lead: 'Use below the commitment.',
			text: 'The actual use at the price without a commitment, increased by 10%, with a floor of 80% and a cap of 100% of the committed amount.'
		},
		{
			lead: 'Increase.',
			text: 'Once per contract year; the price of the new tier applies from the date of the increase.'
		},
		{
			lead: 'Without a commitment.',
			text: 'Each invoice costs the price of the tier it falls in according to the cumulative annual volume.'
		},
		{
			lead: 'Premium.',
			text: 'ABC transactions, imports, exports, services with a special place-of-supply rule, invoices of mixed and partial VAT taxpayers.'
		}
	],
	fullTerms: 'Full rate terms →',
	note: 'Indicative calculation. Amounts excluding VAT.',
	tableHead: { volume: 'Annual volume', standard: 'Standard', premium: 'Premium (2×)' },
	calcId: 'en-calculator',
	defaults: { committed: '288,000', actual: '288,000', share: '0' },
	s: {
		pr: 'Price per invoice',
		std: 'standard',
		prem: 'premium',
		vol: 'Volume charged',
		over: 'Invoices above the commitment',
		a: 'Committed amount',
		surch: 'of which premium surcharge',
		tot: 'Annual amount charged',
		per: 'Per invoice used',
		tier: 'Tier',
		inv: 'Invoices',
		price: 'Price',
		amt: 'Amount',
		altG: 'Without a commitment, same use',
		altC: 'Cheapest with a commitment',
		altCv: 'committing',
		more: 'and more',
		below: 'below commitment',
		save: 'You save',
		copy: 'Copy calculation',
		copied: 'Copied',
		link: 'Copy link',
		linkOk: 'Link copied',
		sel: 'Select and copy the text below.',
		head: 'VATmiraal – price calculation (indicative, excl. VAT)',
		mode: 'Pricing',
		mC: 'with commitment',
		mG: 'without commitment',
		iC: 'Committed annual volume',
		iV: 'Actual annual volume',
		iS: 'Share of premium invoices'
	}
};
