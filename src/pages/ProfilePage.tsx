import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Profile from 'components/Profile';
import useModalWindow from 'hooks/useModalWindow';
import ModalWindow from 'components/ModalWindow';
import EditProfileForm from 'components/Forms/EditProfileForm';
import UploadFile from 'components/UploadFile';
import DialogWindow from 'components/DialogWindow';
import operations from '../redux/user/userOperations';
import { imageValidation } from 'validations/FileValidation';
import ChangeEmailForm from 'components/Forms/ChangeEmailForm';
import ChangePasswordForm from 'components/Forms/ChangePasswordForm';
import CalculationSetupForm from 'components/Forms/CalculationSetupForm';
import useProfile from 'hooks/useProfile';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';

const ProfilePage: React.FC<{}> = () => {
  const {
    age,
    alt,
    avatarUrl,
    companyName,
    email,
    formatedDateBirth,
    formatedStartWork,
    genderLabel,
    isActivated,
    name,
    profession,
    salaryPerHour,
    workExperience,
    deleteProfile,
    firstName,
    gender,
    lastName,
    user,
    userId,
    description,
    settings,
  } = useProfile();
  const navigate = useNavigate();
  const { checkQueryParam, modalsName } = useModalWindow();
  const { t } = useTranslation();

  return (
    <>
      <Profile
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
        userId={userId}
        description={description}
        settings={settings}
      />
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
            description={description}
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
      {checkQueryParam(modalsName.calculationSetup) && (
        <ModalWindow title={t(ProfileLngKeys.CalculationSetup, { ns: LocalesKeys.profile })}>
          <CalculationSetupForm />
        </ModalWindow>
      )}
    </>
  );
};

export default ProfilePage;
