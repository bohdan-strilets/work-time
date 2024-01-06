import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import ScreenWidth from 'utilities/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from '../../redux/user/userSelectors';
import FormatDateTime from 'utilities/FormatDateTime';
import CalculateAge from 'utilities/CalculateAge';
import FindLabelByValeu from 'utilities/FindLabelByValeu';
import GenderOptions from 'utilities/GenderOptions';
import useModalWindow from 'hooks/useModalWindow';
import ModalWindow from 'components/ModalWindow';
import EditProfileForm from 'components/Forms/EditProfileForm';
import UploadFile from 'components/UploadFile';
import DialogWindow from 'components/DialogWindow';
import operations from '../../redux/user/userOperations';
import { imageValidation } from 'validations/FileValidation';
import ChangeEmailForm from 'components/Forms/ChangeEmailForm';
import ChangePasswordForm from 'components/Forms/ChangePasswordForm';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { UserResponseType } from 'types/types/UserResponseType';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';

const Profile: React.FC<{}> = () => {
  const { t } = useTranslation();
  const user = useAppSelector(getUser);
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const name =
    firstName && lastName
      ? `${firstName} ${lastName}`
      : t(CommonLngKeys.Name, { ns: LocalesKeys.common });
  const isActivated = user?.isActivated ?? false;
  const email = user?.email ?? 'E-mail';
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

  const { checkQueryParam, modalsName } = useModalWindow();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const deleteProfile = async () => {
    const response = await dispatch(operations.deleteProfile());
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      navigate('/');
    }
  };

  return (
    <>
      <Media
        queries={{
          small: `(max-width: ${ScreenWidth.preTablet})`,
          medium: `(min-width: ${ScreenWidth.tablet}) and (max-width: ${ScreenWidth.preDesktop})`,
          large: `(min-width: ${ScreenWidth.desktop})`,
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <Mobile
                name={name}
                isActivated={isActivated}
                email={email}
                gender={genderLabel}
                dateBirth={formatedDateBirth}
                age={age}
                companyName={companyName}
                profession={profession}
                startWork={formatedStartWork}
                workExperience={workExperience}
                salaryPerHour={salaryPerHour}
                alt={alt}
                avatarUrl={avatarUrl}
              />
            )}
            {matches.medium && (
              <Tablet
                name={name}
                isActivated={isActivated}
                email={email}
                gender={genderLabel}
                dateBirth={formatedDateBirth}
                age={age}
                companyName={companyName}
                profession={profession}
                startWork={formatedStartWork}
                workExperience={workExperience}
                salaryPerHour={salaryPerHour}
                alt={alt}
                avatarUrl={avatarUrl}
              />
            )}
            {matches.large && (
              <Desktop
                name={name}
                isActivated={isActivated}
                email={email}
                gender={genderLabel}
                dateBirth={formatedDateBirth}
                age={age}
                companyName={companyName}
                profession={profession}
                startWork={formatedStartWork}
                workExperience={workExperience}
                salaryPerHour={salaryPerHour}
                alt={alt}
                avatarUrl={avatarUrl}
              />
            )}
          </>
        )}
      </Media>

      {checkQueryParam(modalsName.editProfile) && (
        <ModalWindow title={t(ProfileLngKeys.EditProfile, { ns: LocalesKeys.profile })}>
          <EditProfileForm
            firstName={firstName}
            lastName={lastName}
            gender={gender}
            dateBirth={user?.dateBirth}
            companyName={companyName}
            profession={profession}
            startWork={user?.companyInfo.startWork}
            salaryPerHour={salaryPerHour}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.uploadAvatar) && (
        <ModalWindow title={t(ProfileLngKeys.UploadAvatar, { ns: LocalesKeys.profile })}>
          <UploadFile
            fileName="avatar"
            text={t(ProfileLngKeys.UploadAvatarParagraph1, { ns: LocalesKeys.profile })}
            operation={operations.uploadAvatar}
            buttonLabel={t(ProfileLngKeys.UploadAvatar, { ns: LocalesKeys.profile })}
            acceptTypes={imageValidation.types}
            validationSize={imageValidation.size}
            type="image"
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.editEmail) && (
        <ModalWindow title={t(ProfileLngKeys.ChangedEmail, { ns: LocalesKeys.profile })}>
          <ChangeEmailForm />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.editPassword) && (
        <ModalWindow title={t(ProfileLngKeys.ChangedPassword, { ns: LocalesKeys.profile })}>
          <ChangePasswordForm />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.deleteProfile) && (
        <ModalWindow title={t(ProfileLngKeys.DeleteProfile, { ns: LocalesKeys.profile })}>
          <DialogWindow
            negativeBtnLabel={t(CommonLngKeys.Cancel, { ns: LocalesKeys.common })}
            positiveBtnLabel={t(CommonLngKeys.Delete, { ns: LocalesKeys.common })}
            text={t(ProfileLngKeys.DeleteProfileParagraph1, { ns: LocalesKeys.profile })}
            handlePositiveClick={deleteProfile}
            handleNegativeClick={() => navigate(-1)}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default Profile;
