export const messages = {
	kicker: 'Aan de slag',
	title: 'Koop de engine & agent',
	sub: 'Vertel ons wat je nodig hebt.',
	f: {
		interest: 'Ik heb interesse in',
		name: 'Volledige naam',
		email: 'Werk-e-mail',
		company: 'Bedrijf',
		role: 'Functie (optioneel)',
		volume: 'Verwachte transacties per maand',
		message: 'Wat wil je automatiseren?',
		messagePh: 'Je ERP, de btw-gevallen die je behandelt, je ViDA-planning…'
	},
	opts: [
		{ k: 'engine', label: 'Engine', desc: 'De btw-API, voor je eigen systemen.' },
		{ k: 'agent', label: 'Agent', desc: 'Koppel VATmiraal aan je agentic workflows.' },
		{ k: 'both', label: 'Beide', desc: 'Engine en agent samen.' }
	],
	volumes: [
		'Minder dan 10.000',
		'10.000 tot 100.000',
		'100.000 tot 1 miljoen',
		'1 tot 10 miljoen',
		'Meer dan 10 miljoen',
		'Nog niet zeker'
	],
	privacy:
		'Ik ga ermee akkoord dat VATmiraal mij contacteert over deze aanvraag. Mijn gegevens worden voor niets anders gebruikt.',
	submit: 'Aanvraag versturen',
	doneTitle: 'Bedankt, we hebben je aanvraag ontvangen.',
	doneSub: 'We antwoorden binnen één werkdag.',
	back: 'Terug naar home →'
};
