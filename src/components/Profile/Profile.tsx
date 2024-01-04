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
import { TranslationKeys } from 'types/enums/TranslationKeys';

const Profile: React.FC<{}> = () => {
  const { t } = useTranslation();
  const user = useAppSelector(getUser);
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const name = firstName && lastName ? `${firstName} ${lastName}` : t(TranslationKeys.Name);
  const isActivated = user?.isActivated ?? false;
  const email = user?.email ?? 'E-mail';
  const gender = user?.gender ?? '';
  const genderLabel = FindLabelByValeu(gender, GenderOptions);
  const dateBirth = user?.dateBirth.toString();
  const formatedDateBirth = FormatDateTime(dateBirth ?? '');
  const age = CalculateAge(dateBirth ?? '');
  const companyName = user?.companyInfo.companyName ?? t(TranslationKeys.CompanyName);
  const profession = user?.companyInfo.profession ?? t(TranslationKeys.Profession);
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
        <ModalWindow title={t(TranslationKeys.EditProfile)}>
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
        <ModalWindow title={t(TranslationKeys.UploadAvatar)}>
          <UploadFile
            fileName="avatar"
            text={t(TranslationKeys.UploadAvatar1_1)}
            operation={operations.uploadAvatar}
            buttonLabel={t(TranslationKeys.ChangeAvatar)}
            acceptTypes={imageValidation.types}
            validationSize={imageValidation.size}
            type="image"
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.editEmail) && (
        <ModalWindow title={t(TranslationKeys.ChangedEmail)}>
          <ChangeEmailForm />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.editPassword) && (
        <ModalWindow title={t(TranslationKeys.ChangedPassword)}>
          <ChangePasswordForm />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.deleteProfile) && (
        <ModalWindow title={t(TranslationKeys.DeleteProfile)}>
          <DialogWindow
            negativeBtnLabel={t(TranslationKeys.Cancel)}
            positiveBtnLabel={t(TranslationKeys.Delete)}
            text={t(TranslationKeys.DeleteProfileText)}
            handlePositiveClick={deleteProfile}
            handleNegativeClick={() => navigate(-1)}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default Profile;
