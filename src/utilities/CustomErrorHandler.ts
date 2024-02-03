import { toast } from 'react-toastify';
import { translateLabel } from 'locales/config';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ErrorsEnum } from 'types/enums/ErrorsEnum';

const CustomErrorHandler = (serverError: any) => {
  switch (true) {
    case serverError.code === 409 && serverError.message === ErrorsEnum.ThisEmailInUse:
      toast.error(translateLabel(ErrorLngKeys.ThisEmailIsAlreadyRegistered, LocalesKeys.error));
      break;
    case serverError.code === 401 && serverError.message === ErrorsEnum.EmailIsWrong:
      toast.error(translateLabel(ErrorLngKeys.IncorrectEmailAddress, LocalesKeys.error));
      break;
    case serverError.code === 401 && serverError.message === ErrorsEnum.PasswordIsWrong:
      toast.error(translateLabel(ErrorLngKeys.IncorrectPassword, LocalesKeys.error));
      break;
    case serverError.code === 401 && serverError.message === ErrorsEnum.EmailIsNotActivated:
      toast.error(translateLabel(ErrorLngKeys.YourEmailIsNotActivated, LocalesKeys.error));
      break;
    case serverError.code === 401 && serverError.message === ErrorsEnum.UserIsNotUnauthorized:
      toast.error(translateLabel(ErrorLngKeys.YouAreNotAuthorized, LocalesKeys.error));
      break;
    case serverError.code === 404 && serverError.message === ErrorsEnum.UserNotFound:
      toast.error(translateLabel(ErrorLngKeys.UserNotFound, LocalesKeys.error));
      break;
    case serverError.code === 400 && serverError.message === ErrorsEnum.CheckCorrectEnteredData:
      toast.error(translateLabel(ErrorLngKeys.CheckCorrectEnteredData, LocalesKeys.error));
      break;
    case serverError.code === 400 && serverError.message === ErrorsEnum.DayByIDNotFound:
      toast.error(translateLabel(ErrorLngKeys.InformationForDayByIDNotFound, LocalesKeys.error));
      break;
    case serverError.code === 404 && serverError.message === ErrorsEnum.TodoWithCurrentIdNotFound:
      toast.error(translateLabel(ErrorLngKeys.InformationForDayByIDNotFound, LocalesKeys.error));
      break;
    case serverError.code === 400 && serverError.message === ErrorsEnum.ThereWasNoIdSpecifiedForDay:
      toast.error(translateLabel(ErrorLngKeys.InformationForDayByIDNotFound, LocalesKeys.error));
      break;
    default:
      toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
      break;
  }
};

export default CustomErrorHandler;
