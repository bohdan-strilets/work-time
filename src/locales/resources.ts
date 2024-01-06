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
import enCalendar from './en/calendar.json';
import plCalendar from './pl/calendar.json';
import uaCalendar from './ua/calendar.json';

const resources = {
  en: {
    [LocalesKeys.statistics]: enStatistics,
    [LocalesKeys.common]: enCommon,
    [LocalesKeys.aboutUs]: enAboutUs,
    [LocalesKeys.profile]: enProfile,
    [LocalesKeys.calendar]: enCalendar,
  },
  pl: {
    [LocalesKeys.statistics]: plStatistics,
    [LocalesKeys.common]: plCommon,
    [LocalesKeys.aboutUs]: plAboutUs,
    [LocalesKeys.profile]: plProfile,
    [LocalesKeys.calendar]: plCalendar,
  },
  ua: {
    [LocalesKeys.statistics]: uaStatistics,
    [LocalesKeys.common]: uaCommon,
    [LocalesKeys.aboutUs]: uaAboutUs,
    [LocalesKeys.profile]: uaProfile,
    [LocalesKeys.calendar]: uaCalendar,
  },
};

export default resources;
