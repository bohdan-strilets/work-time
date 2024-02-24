import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from '../redux/user/userSelectors';
import FormatDateTime from 'utilities/FormatDateTime';
import CalculateAge from 'utilities/CalculateAge';
import FindLabelByValue from 'utilities/FindLabelByValue';
import GenderOptions from 'utilities/dropdownListOptions/GenderOptions';
import operations from '../redux/user/userOperations';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { UserResponseType } from 'types/types/UserResponseType';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import useSoundSprite from './useSoundSprite';
import { SoundNamesEnum } from 'types/enums/SoundNamesEnum';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';

const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const user = useAppSelector(getUser);
  const { play } = useSoundSprite();

  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const name =
    firstName && lastName
      ? `${firstName} ${lastName}`
      : t(CommonLngKeys.Name, { ns: LocalesKeys.common });
  const isActivated = user?.isActivated ?? false;
  const email = user?.email ?? t(CommonLngKeys.Email, { ns: LocalesKeys.common });
  const gender = user?.gender ?? '';
  const genderLabel = FindLabelByValue(gender, GenderOptions);
  const dateBirth = user?.dateBirth.toString();
  const formatedDateBirth = FormatDateTime(dateBirth ?? '');
  const age = CalculateAge(dateBirth ?? '');
  const companyName =
    user?.companyInfo.companyName ?? t(CommonLngKeys.CompanyName, { ns: LocalesKeys.common });
  const profession =
    user?.companyInfo.profession ?? t(CommonLngKeys.Profession, { ns: LocalesKeys.common });
  const startWork = user?.companyInfo.startWork.toString();
  const formatedStartWork = FormatDateTime(startWork ?? '');
  const workExperience = CalculateAge(startWork ?? '');
  const salaryPerHour = user?.companyInfo.salaryPerHour ?? 0;
  const avatarUrl = user?.avatarUrl ?? '';
  const alt = `Profile avatar by ${name}`;
  const userId = user?._id ?? 'ID';
  const description =
    user?.description ?? t(ProfileLngKeys.ExampleDescriptionForUser, { ns: LocalesKeys.profile });
  const settings = user?.settings;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const deleteProfile = async () => {
    setIsLoading(true);
    await dispatch(operations.deleteProfile());
    try {
      setIsLoading(false);
      navigate('/');
      play({ id: SoundNamesEnum.Delete });
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
    name,
    isActivated,
    email,
    genderLabel,
    formatedDateBirth,
    age,
    companyName,
    profession,
    formatedStartWork,
    workExperience,
    salaryPerHour,
    alt,
    avatarUrl,
    deleteProfile,
    firstName,
    lastName,
    gender,
    user,
    userId,
    description,
    settings,
    isLoading,
  };
};

export default useProfile;
