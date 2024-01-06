import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageEnum } from 'types/enums/LanguageEnum';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import enStatistics from './en/statistics.json';
import plStatistics from './pl/statistics.json';
import uaStatistics from './ua/statistics.json';
import enCommon from './en/common.json';
import plCommon from './pl/common.json';
import uaCommon from './ua/common.json';
import enAboutUs from './en/aboutUs.json';
import plAboutUs from './pl/aboutUs.json';
import uaAboutUs from './ua/aboutUs.json';
import enProfile from './en/profile.json';
import plProfile from './pl/profile.json';
import uaProfile from './ua/profile.json';

export const changeLang = (lng: LanguageEnum) => {
  i18n.changeLanguage(lng);
};

const resources = {
  en: {
    [LocalesKeys.statistics]: enStatistics,
    [LocalesKeys.common]: enCommon,
    [LocalesKeys.aboutUs]: enAboutUs,
    [LocalesKeys.profile]: enProfile,
  },
  pl: {
    [LocalesKeys.statistics]: plStatistics,
    [LocalesKeys.common]: plCommon,
    [LocalesKeys.aboutUs]: plAboutUs,
    [LocalesKeys.profile]: plProfile,
  },
  ua: {
    [LocalesKeys.statistics]: uaStatistics,
    [LocalesKeys.common]: uaCommon,
    [LocalesKeys.aboutUs]: uaAboutUs,
    [LocalesKeys.profile]: uaProfile,
  },
};

const settings = JSON.parse(localStorage.getItem('persist:settings') ?? '');
const defaultLng: LanguageEnum = settings.language.replaceAll('"', '');

i18n.use(initReactI18next).init({
  ns: [LocalesKeys.common, LocalesKeys.statistics],
  resources,
  lng: defaultLng,
  interpolation: { escapeValue: false },
});
