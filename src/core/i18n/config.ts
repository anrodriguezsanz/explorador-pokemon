import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import navbarES from './locales/es/navbar.es.json';
import listES from './locales/es/list.es.json';
import favouritesES from './locales/es/favourites.es.json';
import detailsES from './locales/es/details.es.json';
import statsES from './locales/es/stats.es.json';
import typesES from './locales/es/types.es.json';

import navbarEN from './locales/en/navbar.en.json';
import listEN from './locales/en/list.en.json';
import favouritesEN from './locales/en/favourites.en.json';
import detailsEN from './locales/en/details.en.json';
import statsEN from './locales/en/stats.en.json';
import typesEN from './locales/en/types.en.json';

import navbarCA from './locales/ca/navbar.ca.json';
import listCA from './locales/ca/list.ca.json';
import favouritesCA from './locales/ca/favourites.ca.json';
import detailsCA from './locales/ca/details.ca.json';
import statsCA from './locales/ca/stats.ca.json';
import typesCA from './locales/ca/types.ca.json';

const resources = {
  es: {
    translation: {
      navbar: navbarES,
      list: listES,
      favourites: favouritesES,
      details: detailsES,
      stats: statsES,
      types: typesES
    }
  },
  en: {
    translation: {
      navbar: navbarEN,
      list: listEN,
      favourites: favouritesEN,
      details: detailsEN,
      stats: statsEN,
      types: typesEN
    }
  },
  ca: {
    translation: {
      navbar: navbarCA,
      list: listCA,
      favourites: favouritesCA,
      details: detailsCA,
      stats: statsCA,
      types: typesCA
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
