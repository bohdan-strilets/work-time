import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import CustomErrorHandler from 'utilities/secondaryFunctions/CustomErrorHandler';
import { ErrorResponseType } from 'types/types/ErrorResponseType';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const useErrorHandle = () => {
  const { t } = useTranslation();

  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponseType>;
      if (axiosError.response) {
        const serverError = axiosError.response.data as ErrorResponseType;
        CustomErrorHandler(serverError);
      } else {
        toast.error(t(ErrorLngKeys.GeneralAxiosError, { ns: LocalesKeys.error }));
      }
    } else {
      toast.error(t(ErrorLngKeys.GeneralError, { ns: LocalesKeys.error }));
    }
  };

  return { handleError };
};

export default useErrorHandle;
