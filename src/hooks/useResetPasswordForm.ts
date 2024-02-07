import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ResetPasswordFormInputs } from 'types/inputs/ResetPasswordFormInputs';
import { UserResponseType } from 'types/types/UserResponseType';
import ResetPasswordFormSchema from 'validations/ResetPasswordFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';

const useResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const validation = {
    resolver: yupResolver<ResetPasswordFormInputs>(ResetPasswordFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>(validation);

  const onSubmit: SubmitHandler<ResetPasswordFormInputs> = async value => {
    const resetPasswordDto = { password: value.password, email: value.email };

    setIsLoading(true);
    await dispatch(operations.resetPassword(resetPasswordDto));
    try {
      setIsLoading(false);
      navigate('/auth');
      toast.success(
        t(ProfileLngKeys.PasswordHasBeenSuccessfullyChanged, { ns: LocalesKeys.profile }),
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

export default useResetPasswordForm;
