import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from './useAppDispatch';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logout = async () => {
    await dispatch(operations.logout());
    try {
      navigate('/');
    } catch (error: any) {
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
  };

  return { logout };
};

export default useLogout;
