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
import enNotFound from './en/notFound.json';
import plNotFound from './pl/notFound.json';
import uaNotFound from './ua/notFound.json';
import enResetPassword from './en/resetPassword.json';
import plResetPassword from './pl/resetPassword.json';
import uaResetPassword from './ua/resetPassword.json';
import enAuth from './en/auth.json';
import plAuth from './pl/auth.json';
import uaAuth from './ua/auth.json';
import enPrivacyPoliocy from './en/privacyPolicy.json';
import plPrivacyPoliocy from './pl/privacyPolicy.json';
import uaPrivacyPoliocy from './ua/privacyPolicy.json';
import enTermsUseSite from './en/termsUseSite.json';
import plTermsUseSite from './pl/termsUseSite.json';
import uaTermsUseSite from './ua/termsUseSite.json';
import enErrors from './en/errors.json';
import plErrors from './pl/errors.json';
import uaErrors from './ua/errors.json';
import enValidation from './en/validation.json';
import plValidation from './pl/validation.json';
import uaValidation from './ua/validation.json';
import enTodos from './en/todos.json';
import plTodos from './pl/todos.json';
import uaTodos from './ua/todos.json';
import enCalculator from './en/calculator.json';
import plCalculator from './pl/calculator.json';
import uaCalculator from './ua/calculator.json';

const resources = {
  en: {
    [LocalesKeys.statistics]: enStatistics,
    [LocalesKeys.common]: enCommon,
    [LocalesKeys.aboutUs]: enAboutUs,
    [LocalesKeys.profile]: enProfile,
    [LocalesKeys.calendar]: enCalendar,
    [LocalesKeys.notFound]: enNotFound,
    [LocalesKeys.resetPassword]: enResetPassword,
    [LocalesKeys.auth]: enAuth,
    [LocalesKeys.privacyPolicy]: enPrivacyPoliocy,
    [LocalesKeys.termsUseSite]: enTermsUseSite,
    [LocalesKeys.error]: enErrors,
    [LocalesKeys.validation]: enValidation,
    [LocalesKeys.todos]: enTodos,
    [LocalesKeys.calculator]: enCalculator,
  },
  pl: {
    [LocalesKeys.statistics]: plStatistics,
    [LocalesKeys.common]: plCommon,
    [LocalesKeys.aboutUs]: plAboutUs,
    [LocalesKeys.profile]: plProfile,
    [LocalesKeys.calendar]: plCalendar,
    [LocalesKeys.notFound]: plNotFound,
    [LocalesKeys.resetPassword]: plResetPassword,
    [LocalesKeys.auth]: plAuth,
    [LocalesKeys.privacyPolicy]: plPrivacyPoliocy,
    [LocalesKeys.termsUseSite]: plTermsUseSite,
    [LocalesKeys.error]: plErrors,
    [LocalesKeys.validation]: plValidation,
    [LocalesKeys.todos]: plTodos,
    [LocalesKeys.calculator]: plCalculator,
  },
  ua: {
    [LocalesKeys.statistics]: uaStatistics,
    [LocalesKeys.common]: uaCommon,
    [LocalesKeys.aboutUs]: uaAboutUs,
    [LocalesKeys.profile]: uaProfile,
    [LocalesKeys.calendar]: uaCalendar,
    [LocalesKeys.notFound]: uaNotFound,
    [LocalesKeys.resetPassword]: uaResetPassword,
    [LocalesKeys.auth]: uaAuth,
    [LocalesKeys.privacyPolicy]: uaPrivacyPoliocy,
    [LocalesKeys.termsUseSite]: uaTermsUseSite,
    [LocalesKeys.error]: uaErrors,
    [LocalesKeys.validation]: uaValidation,
    [LocalesKeys.todos]: uaTodos,
    [LocalesKeys.calculator]: uaCalculator,
  },
};

export default resources;
