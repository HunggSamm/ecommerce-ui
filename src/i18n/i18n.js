import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to React",
            description: "This is a simple i18n demo."
        }
    },
    vi: {
        translation: {
            welcome: "Chào mừng đến với React",
            description: "Đây là demo i18n đơn giản."
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;