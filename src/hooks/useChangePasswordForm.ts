import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ChangePasswordFormInput } from 'types/inputs/ChangePasswordFormInput';
import { UserResponseType } from 'types/types/UserResponseType';
import ChangePasswordFormSchema from 'validations/ChangePasswordFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import useModalWindow from 'hooks/useModalWindow';
import operations from '../redux/user/userOperations';
import { useAppSelector } from './useAppSelector';
import { getPassword } from '../redux/user/userSelectors';
import { ChangePasswordDto } from 'types/dto/ChangePasswordDto';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import CustomErrorHandler from 'utilities/secondaryFunctions/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';

const useChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { closeModal } = useModalWindow();
  const { t } = useTranslation();
  const password = useAppSelector(getPassword);

  const validation = {
    resolver: yupResolver<ChangePasswordFormInput>(ChangePasswordFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormInput>(validation);

  const onSubmit: SubmitHandler<ChangePasswordFormInput> = async value => {
    let changePasswordDto: ChangePasswordDto = { newPassword: '' };

    if (password) {
      changePasswordDto = {
        password: value.password,
        newPassword: value.newPassword,
      };
    } else {
      changePasswordDto = {
        newPassword: value.newPassword,
      };
    }

    setIsLoading(true);
    await dispatch(operations.changePassword(changePasswordDto));
    try {
      setIsLoading(false);
      closeModal();
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

  return { handleSubmit, onSubmit, register, errors, password, isLoading };
};

export default useChangePasswordForm;
