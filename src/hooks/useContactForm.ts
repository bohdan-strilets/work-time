import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ContactFormInputs } from 'types/inputs/ContactFormInputs';
import ContactFormSchema from 'validations/ContactFormSchema';
import { useAppDispatch } from './useAppDispatch';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { AboutUsLngKeys } from 'types/locales/AboutUsLngKeys';

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const validation = {
    resolver: yupResolver<ContactFormInputs>(ContactFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>(validation);

  const onSubmit: SubmitHandler<ContactFormInputs> = async data => {
    const contactEmailDto = {
      name: data.name,
      email: data.email,
      message: data.text,
      dateOfEntry: new Date(),
    };

    setIsLoading(true);
    await dispatch(operations.sendContactEmail(contactEmailDto));
    try {
      setIsLoading(false);
      toast.success(t(AboutUsLngKeys.MessageWasSentSuccessfully, { ns: LocalesKeys.aboutUs }));
      reset();
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

  return { register, handleSubmit, errors, onSubmit, isLoading };
};

export default useContactForm;
