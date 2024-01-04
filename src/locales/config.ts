import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import pl from './pl.json';
import ua from './ua.json';
import { LanguageEnum } from 'types/enums/LanguageEnum';

export const changeLang = (lng: LanguageEnum) => {
  i18n.changeLanguage(lng);
};

const resources = { en, pl, ua };
const settings = JSON.parse(localStorage.getItem('persist:settings') ?? '');
const defaultLng = settings.language.replaceAll('"', '');

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLng,
  interpolation: { escapeValue: false },
});
