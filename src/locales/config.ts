import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageEnum } from 'types/enums/LanguageEnum';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import resources from './resources';

export const changeLang = (lng: LanguageEnum) => {
  i18n.changeLanguage(lng);
};

export const translateLabel = (labelKey: string, nsKey: string) => {
  return i18n.t(labelKey, { ns: nsKey });
};

let settings = { language: LanguageEnum.en };
const settingsJSON = localStorage.getItem('persist:settings');
if (settingsJSON !== null) settings = JSON.parse(settingsJSON);
const defaultLng = settings.language.replaceAll('"', '');

i18n.use(initReactI18next).init({
  ns: [
    LocalesKeys.common,
    LocalesKeys.statistics,
    LocalesKeys.aboutUs,
    LocalesKeys.auth,
    LocalesKeys.calendar,
    LocalesKeys.notFound,
    LocalesKeys.privacyPolicy,
    LocalesKeys.profile,
    LocalesKeys.resetPassword,
    LocalesKeys.termsUseSite,
    LocalesKeys.error,
    LocalesKeys.validation,
    LocalesKeys.todos,
  ],
  resources,
  lng: defaultLng,
  interpolation: { escapeValue: false },
});
