import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ChangeEmailFormInputs } from 'types/inputs/ChangeEmailFormInputs';
import { UserResponseType } from 'types/types/UserResponseType';
import ChangeEmailFormSchema from 'validations/ChangeEmailFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import useModalWindow from 'hooks/useModalWindow';
import operations from '../redux/user/userOperations';
import { getEmail } from '../redux/user/userSelectors';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';

const useChangeEmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getEmail);
  const { closeModal } = useModalWindow();
  const { t } = useTranslation();

  const validation = {
    resolver: yupResolver<ChangeEmailFormInputs>(ChangeEmailFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeEmailFormInputs>(validation);

  const onSubmit: SubmitHandler<ChangeEmailFormInputs> = async value => {
    setIsLoading(true);
    await dispatch(operations.changeEmail(value));
    try {
      setIsLoading(false);
      closeModal();
      toast.success(
        t(ProfileLngKeys.EmailAddressHasBeenSuccessfullyChanged, { ns: LocalesKeys.profile }),
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

  return { handleSubmit, onSubmit, userEmail, register, errors, isLoading };
};

export default useChangeEmailForm;
