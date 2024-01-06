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

const settings = JSON.parse(localStorage.getItem('persist:settings') ?? '');
const defaultLng: LanguageEnum = settings.language.replaceAll('"', '');

i18n.use(initReactI18next).init({
  ns: [LocalesKeys.common, LocalesKeys.statistics],
  resources,
  lng: defaultLng,
  interpolation: { escapeValue: false },
});
