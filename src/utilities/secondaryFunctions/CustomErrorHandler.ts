import { toast } from 'react-toastify';
import { translateLabel } from 'locales/config';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ErrorsEnum } from 'types/enums/ErrorsEnum';

const errorMessages: { [key: string]: { [key: string]: string } } = {
  '409': {
    [ErrorsEnum.ThisEmailInUse]: ErrorLngKeys.ThisEmailIsAlreadyRegistered,
  },
  '400': {
    [ErrorsEnum.EmailIsWrong]: ErrorLngKeys.IncorrectEmailAddress,
    [ErrorsEnum.PasswordIsWrong]: ErrorLngKeys.IncorrectPassword,
    [ErrorsEnum.EmailIsNotActivated]: ErrorLngKeys.YourEmailIsNotActivated,
    [ErrorsEnum.CheckCorrectEnteredData]: ErrorLngKeys.CheckCorrectEnteredData,
    [ErrorsEnum.DayByIDNotFound]: ErrorLngKeys.InformationForDayByIDNotFound,
    [ErrorsEnum.ThereWasNoIdSpecifiedForDay]: ErrorLngKeys.InformationForDayByIDNotFound,
  },
  '401': {
    [ErrorsEnum.UserIsNotUnauthorized]: ErrorLngKeys.YouAreNotAuthorized,
  },
  '404': {
    [ErrorsEnum.UserNotFound]: ErrorLngKeys.UserNotFound,
    [ErrorsEnum.TodoWithCurrentIdNotFound]: ErrorLngKeys.InformationForDayByIDNotFound,
  },
};

const CustomErrorHandler = (serverError: any) => {
  const errorCode = serverError.code.toString();
  const errorMessage = errorMessages[errorCode]?.[serverError.message] || ErrorLngKeys.GeneralError;
  toast.error(translateLabel(errorMessage, LocalesKeys.error));
};

export default CustomErrorHandler;
