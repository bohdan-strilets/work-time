import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { EditProfileFormInputs } from 'types/inputs/EditProfileFormInputs';
import EditProfileFormSchema from 'validations/EditProfileFormSchema';
import { useAppDispatch } from './useAppDispatch';
import useModalWindow from './useModalWindow';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';

const useEditProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { closeModal } = useModalWindow();
  const { t } = useTranslation();

  const validation = {
    resolver: yupResolver<EditProfileFormInputs>(EditProfileFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<EditProfileFormInputs>(validation);

  const onSubmit: SubmitHandler<EditProfileFormInputs> = async value => {
    const userData = {
      firstName: value.firstName,
      lastName: value.lastName,
      dateBirth: value.dateBirth,
      gender: value.gender,
      companyInfo: {
        companyName: value.companyName,
        profession: value.profession,
        startWork: value.startWork,
        salaryPerHour: value.salaryPerHour,
      },
      description: value.description,
    };

    setIsLoading(true);
    await dispatch(operations.changeProfile(userData));
    try {
      setIsLoading(false);
      closeModal();
      toast.success(
        t(ProfileLngKeys.AccountInformationSuccessfullyUpdated, { ns: LocalesKeys.profile }),
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

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Controller,
    control,
    setValue,
    isLoading,
  };
};

export default useEditProfileForm;
