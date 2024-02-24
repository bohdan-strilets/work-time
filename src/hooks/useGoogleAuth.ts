import { CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import useLocalStorage from 'hooks/useLocalStorage';
import CustomErrorHandler from 'utilities/secondaryFunctions/CustomErrorHandler';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';

const useGoogleAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setDataToLs } = useLocalStorage();
  const { t } = useTranslation();

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    if (token) {
      setDataToLs('google-token', token);
      await dispatch(operations.googleAuth(token));
      try {
        navigate('/calendar');
      } catch (error: any) {
        navigate('/auth');
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<UserResponseType>;
          if (axiosError.response) {
            const serverError = axiosError.response.data as UserResponseType;
            CustomErrorHandler(serverError);
          } else {
            toast.error(t(ErrorLngKeys.GeneralAxiosError, { ns: LocalesKeys.error }));
          }
        } else {
          toast.error(t(ErrorLngKeys.GeneralError, { ns: LocalesKeys.error }));
        }
      }
    }
  };

  const handleError = () => {
    toast.error(t(ErrorLngKeys.GeneralError, { ns: LocalesKeys.error }));
    navigate('/calendar');
  };

  return { handleSuccess, handleError };
};

export default useGoogleAuth;
