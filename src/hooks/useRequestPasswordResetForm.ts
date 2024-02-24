import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { RequestPasswordResetFormInputs } from 'types/inputs/RequestPasswordResetFormInputs';
import { UserResponseType } from 'types/types/UserResponseType';
import RequestPasswordResetFormSchema from 'validations/RequestPasswordResetFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import useModalWindow from './useModalWindow';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import CustomErrorHandler from 'utilities/secondaryFunctions/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const useRequestPasswordResetForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { closeModal } = useModalWindow();
  const { t } = useTranslation();

  const validation = {
    resolver: yupResolver<RequestPasswordResetFormInputs>(RequestPasswordResetFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestPasswordResetFormInputs>(validation);

  const onSubmit: SubmitHandler<RequestPasswordResetFormInputs> = async value => {
    setIsLoading(true);
    await dispatch(operations.requestResetPassword(value));
    try {
      setIsLoading(false);
      closeModal();
      toast.success(
        t(ProfileLngKeys.PasswordResetEmailSuccessfullySent, { ns: LocalesKeys.profile }),
      );
    } catch (error: any) {
      setIsLoading(false);
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

  return { handleSubmit, onSubmit, register, errors, isLoading };
};

export default useRequestPasswordResetForm;
