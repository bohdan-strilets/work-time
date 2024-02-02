import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from '../redux/user/userSelectors';
import FormatDateTime from 'utilities/FormatDateTime';
import CalculateAge from 'utilities/CalculateAge';
import FindLabelByValeu from 'utilities/FindLabelByValeu';
import GenderOptions from 'utilities/GenderOptions';
import operations from '../redux/user/userOperations';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { UserResponseType } from 'types/types/UserResponseType';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import useSoundSprite from './useSoundSprite';
import { SoundNamesEnum } from 'types/enums/SoundNamesEnum';

const useProfile = () => {
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
  const genderLabel = FindLabelByValeu(gender, GenderOptions);
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
    const response = await dispatch(operations.deleteProfile());
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      navigate('/');
      play({ id: SoundNamesEnum.Delete });
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
  };
};

export default useProfile;
