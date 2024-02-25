import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RegistrationFormInputs } from 'types/inputs/RegistrationFormInputs';
import RegistrationFormSchema from 'validations/RegistrationFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import useModalWindow from './useModalWindow';
import CustomErrorHandler from 'utilities/secondaryFunctions/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';

const useRegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { modalsName } = useModalWindow();
  const { t } = useTranslation();

  const validation = {
    resolver: yupResolver<RegistrationFormInputs>(RegistrationFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm<RegistrationFormInputs>(validation);

  const onSubmit: SubmitHandler<RegistrationFormInputs> = async value => {
    const user = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
    };

    if (value.rules) {
      setIsLoading(true);
      await dispatch(operations.registration(user));
      try {
        setIsLoading(false);
        navigate(`/calendar?modal=${modalsName.greetings}`);
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
    } else {
      setError('rules', {
        message: t(ValidationLngKeys.ReadPrivacyPolicyAndSiteRules, { ns: LocalesKeys.validation }),
      });
    }
  };

  return { register, handleSubmit, errors, onSubmit, Controller, control, isLoading };
};

export default useRegistrationForm;
