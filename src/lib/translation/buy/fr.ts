export const messages = {
	kicker: 'Commencer',
	title: "Acheter le moteur & l'agent",
	sub: 'Dites-nous ce dont vous avez besoin.',
	f: {
		interest: 'Je suis intéressé par',
		name: 'Nom complet',
		email: 'E-mail professionnel',
		company: 'Entreprise',
		role: 'Fonction (facultatif)',
		volume: 'Transactions mensuelles prévues',
		message: 'Que souhaitez-vous automatiser ?',
		messagePh: 'Votre ERP, les cas TVA que vous traitez, votre calendrier ViDA…'
	},
	opts: [
		{ k: 'engine', label: 'Moteur', desc: "L'API TVA, pour vos propres systèmes." },
		{ k: 'agent', label: 'Agent', desc: 'Intégrez VATmiraal dans vos workflows agentiques.' },
		{ k: 'both', label: 'Les deux', desc: 'Moteur et agent ensemble.' }
	],
	volumes: [
		'Moins de 10 000',
		'10 000 à 100 000',
		'100 000 à 1 million',
		'1 à 10 millions',
		'Plus de 10 millions',
		'Pas encore sûr'
	],
	privacy:
		"J'accepte que VATmiraal me contacte au sujet de cette demande. Mes données ne sont utilisées à aucune autre fin.",
	submit: 'Envoyer la demande',
	doneTitle: 'Merci, nous avons bien reçu votre demande.',
	doneSub: 'Nous répondons sous un jour ouvrable.',
	back: "Retour à l'accueil →"
};
