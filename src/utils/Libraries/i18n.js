import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/i18n/{{ns}}/{{lng}}.json'
    },
    debug: false,
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common', 'content', 'dashboard', 'login'],
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true,
      useSuspense: false
    }
  });

export default i18n;
