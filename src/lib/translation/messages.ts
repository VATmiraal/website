import { messages as commonEn } from './common/en';
import { messages as commonNl } from './common/nl';
import { messages as commonFr } from './common/fr';
import { messages as navEn } from './nav/en';
import { messages as navNl } from './nav/nl';
import { messages as navFr } from './nav/fr';
import { messages as imprEn } from './impr/en';
import { messages as imprNl } from './impr/nl';
import { messages as imprFr } from './impr/fr';
import { messages as privEn } from './priv/en';
import { messages as privNl } from './priv/nl';
import { messages as privFr } from './priv/fr';
import { messages as apiEn } from './api/en';
import { messages as apiNl } from './api/nl';
import { messages as apiFr } from './api/fr';
import { messages as prodEn } from './prod/en';
import { messages as prodNl } from './prod/nl';
import { messages as prodFr } from './prod/fr';
import { messages as custEn } from './cust/en';
import { messages as custNl } from './cust/nl';
import { messages as custFr } from './cust/fr';
import { messages as homeEn } from './home/en';
import { messages as homeNl } from './home/nl';
import { messages as homeFr } from './home/fr';

export const LOCALES = ['en', 'nl', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const DICT = {
	en: {
		common: commonEn,
		nav: navEn,
		impr: imprEn,
		priv: privEn,
		api: apiEn,
		prod: prodEn,
		cust: custEn,
		home: homeEn
	},
	nl: {
		common: commonNl,
		nav: navNl,
		impr: imprNl,
		priv: privNl,
		api: apiNl,
		prod: prodNl,
		cust: custNl,
		home: homeNl
	},
	fr: {
		common: commonFr,
		nav: navFr,
		impr: imprFr,
		priv: privFr,
		api: apiFr,
		prod: prodFr,
		cust: custFr,
		home: homeFr
	}
};

export type Messages = (typeof DICT)['en'];

export function isLocale(value: unknown): value is Locale {
	return value === 'en' || value === 'nl' || value === 'fr';
}
