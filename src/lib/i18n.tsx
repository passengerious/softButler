import React, { createContext, useContext } from 'react';
import { useRouter } from 'next/router';

import enCommon from '../locales/en/common.json';
import ukCommon from '../locales/uk/common.json';
import enHome from '../locales/en/home.json';
import ukHome from '../locales/uk/home.json';
import enCareers from '../locales/en/careers.json';
import ukCareers from '../locales/uk/careers.json';
import enContact from '../locales/en/contact.json';
import ukContact from '../locales/uk/contact.json';
import enServices from '../locales/en/services.json';
import ukServices from '../locales/uk/services.json';
import enWhoWeAre from '../locales/en/who-we-are.json';
import ukWhoWeAre from '../locales/uk/who-we-are.json';
import enIndustries from '../locales/en/industries.json';
import ukIndustries from '../locales/uk/industries.json';
import enServiceDetails from '../locales/en/service-details.json';
import ukServiceDetails from '../locales/uk/service-details.json';

const translations = {
  en: {
    common: enCommon,
    home: enHome,
    careers: enCareers,
    contact: enContact,
    services: enServices,
    'who-we-are': enWhoWeAre,
    industries: enIndustries,
    'service-details': enServiceDetails,
  },
  uk: {
    common: ukCommon,
    home: ukHome,
    careers: ukCareers,
    contact: ukContact,
    services: ukServices,
    'who-we-are': ukWhoWeAre,
    industries: ukIndustries,
    'service-details': ukServiceDetails,
  },
};

type Locale = 'en' | 'uk';
type Namespace = keyof typeof translations.en;

const I18nContext = createContext<{ locale: Locale }>({ locale: 'en' });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const locale = (router.locale as Locale) || 'en';

  return (
    <I18nContext.Provider value={{ locale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation(ns: Namespace) {
  const { locale } = useContext(I18nContext);
  
  const t = (key: string, variables?: Record<string, string | number>): any => {
    const keys = key.split('.');
    const firstKey = keys[0];
    const isExplicitNamespace = translations[locale] && firstKey in translations[locale];
    const targetNs = isExplicitNamespace ? (firstKey as Namespace) : ns;
    const actualKeys = isExplicitNamespace ? keys.slice(1) : keys;

    let value: any = translations[locale]?.[targetNs];
    
    for (const k of actualKeys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key missing in uk
        let fallbackValue: any = translations['en']?.[targetNs];
        for (const fk of actualKeys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
            fallbackValue = fallbackValue[fk];
          } else {
            fallbackValue = null;
            break;
          }
        }
        if (typeof fallbackValue === 'string') {
          value = fallbackValue;
        } else {
          return key;
        }
      }
    }
    
    if (typeof value !== 'string' && !Array.isArray(value)) {
      return key;
    }
    
    if (variables && typeof value === 'string') {
      let result = value;
      Object.entries(variables).forEach(([k, v]) => {
        result = result.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      });
      return result;
    }
    
    return value;
  };

  return { t, locale };
}
