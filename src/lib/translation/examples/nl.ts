import type { IExamplesMessages } from './types';

export const messages: IExamplesMessages = {
	id: 'nl-examples',
	title: 'Praktijkvoorbeelden',
	intro:
		'Hoe de tarieven in de praktijk werken, stap voor stap. Elk voorbeeld volgt één clausule van de tarieven. Bedragen exclusief btw.',
	back: '← Terug naar de tarieven',
	clause: 'Clausule',
	newTab: 'Open deze clausule op de tarievenpagina in een nieuw tabblad',
	totalLabel: 'Jaarbedrag',
	perLabel: 'Per factuur',
	stepFlat: 'Prijs van de vastgelegde schijf × volume',
	stepTiers: 'Elke schijf tegen de eigen prijs',
	stepBase: 'Gebruik tegen de prijs zonder vastlegging',
	stepPenalty: 'Plus 10%',
	stepFloor: 'Minimum: 80% van het vastgelegde bedrag',
	stepCap: 'Maximum: het vastgelegde bedrag',
	stepResult: 'Binnen de grenzen',
	examples: [
		{
			n: '3.1',
			section: 'with-commitment',
			kind: 'at',
			title: 'Op de vastlegging',
			setup:
				'Je legt {committed} facturen vast en gebruikt precies dat. Het vastgelegde volume bepaalt één prijs voor elke factuur.'
		},
		{
			n: '4.1',
			section: 'without-commitment',
			kind: 'without',
			title: 'Zonder vastlegging',
			setup:
				'Je legt niets vast en verwerkt {actual} facturen. Elke factuur wordt aangerekend tegen de schijf waarin zij valt.'
		},
		{
			n: '3.3',
			section: 'with-commitment',
			kind: 'below',
			title: 'Onder de vastlegging',
			setup:
				'Je legt {committed} facturen vast maar verwerkt er maar {actual}. De vastgelegde prijs vervalt en de aanrekening wordt begrensd.'
		},
		{
			n: '3.2',
			section: 'with-commitment',
			kind: 'above',
			title: 'Boven de vastlegging',
			setup:
				'Je legt {committed} facturen vast maar verwerkt er {actual}. De extra facturen blijven tegen de prijs van de vastgelegde schijf.'
		}
	]
};
