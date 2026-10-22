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
import { messages as custEn } from './cust/en';
import { messages as custNl } from './cust/nl';
import { messages as custFr } from './cust/fr';
import { messages as homeEn } from './home/en';
import { messages as homeNl } from './home/nl';
import { messages as homeFr } from './home/fr';
import { messages as portalEn } from './portal/en';
import { messages as portalNl } from './portal/nl';
import { messages as portalFr } from './portal/fr';
import { messages as heimdallEn } from './heimdall/en';
import { messages as heimdallNl } from './heimdall/nl';
import { messages as heimdallFr } from './heimdall/fr';
import { messages as buyEn } from './buy/en';
import { messages as buyNl } from './buy/nl';
import { messages as buyFr } from './buy/fr';
import { messages as teamEn } from './team/en';
import { messages as teamNl } from './team/nl';
import { messages as teamFr } from './team/fr';

export const LOCALES = ['en', 'nl', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const DICT = {
	en: {
		common: commonEn,
		nav: navEn,
		impr: imprEn,
		priv: privEn,
		api: apiEn,
		cust: custEn,
		home: homeEn,
		portal: portalEn,
		heimdall: heimdallEn,
		buy: buyEn,
		team: teamEn
	},
	nl: {
		common: commonNl,
		nav: navNl,
		impr: imprNl,
		priv: privNl,
		api: apiNl,
		cust: custNl,
		home: homeNl,
		portal: portalNl,
		heimdall: heimdallNl,
		buy: buyNl,
		team: teamNl
	},
	fr: {
		common: commonFr,
		nav: navFr,
		impr: imprFr,
		priv: privFr,
		api: apiFr,
		cust: custFr,
		home: homeFr,
		portal: portalFr,
		heimdall: heimdallFr,
		buy: buyFr,
		team: teamFr
	}
};

export type Messages = (typeof DICT)['en'];

export function isLocale(value: unknown): value is Locale {
	return value === 'en' || value === 'nl' || value === 'fr';
}
