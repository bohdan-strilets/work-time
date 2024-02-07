import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { RepeatConfirmEmailFormInputs } from 'types/inputs/RepeatConfirmEmailFormInputs';
import { UserResponseType } from 'types/types/UserResponseType';
import RepeatConfirmEmailFormSchema from 'validations/RepeatConfirmEmailFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';

const useRepeatConfirmEmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const validation = {
    resolver: yupResolver<RepeatConfirmEmailFormInputs>(RepeatConfirmEmailFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RepeatConfirmEmailFormInputs>(validation);

  const onSubmit: SubmitHandler<RepeatConfirmEmailFormInputs> = async value => {
    setIsLoading(true);
    await dispatch(operations.repeatConfirmEmail(value));
    try {
      setIsLoading(false);
      setIsSuccess(true);
      toast.success(t(AuthLngKeys.ConfirmationEmailSentAgain, { ns: LocalesKeys.auth }));
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

  return { handleSubmit, onSubmit, register, errors, isSuccess, isLoading };
};

export default useRepeatConfirmEmailForm;
