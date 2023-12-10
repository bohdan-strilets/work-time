import Media from 'react-media';
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
import operations from '../../redux/user/userOperations';
import { imageValidation } from 'validations/FileValidation';

const Auth: React.FC<{}> = () => {
  const user = useAppSelector(getUser);
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const name = firstName && lastName ? `${firstName} ${lastName}` : 'Name';
  const isActivated = user?.isActivated ? user?.isActivated : false;
  const email = user?.email ? user?.email : 'E-mail';
  const gender = user?.gender ? user?.gender : '';
  const genderLabel = FindLabelByValeu(gender, GenderOptions);
  const dateBirth = user?.dateBirth.toString();
  const formatedDateBirth = FormatDateTime(dateBirth ? dateBirth : '');
  const age = CalculateAge(dateBirth ? dateBirth : '');
  const companyName = user?.companyInfo.companyName ? user?.companyInfo.companyName : 'Company';
  const profession = user?.companyInfo.profession ? user?.companyInfo.profession : 'Profession';
  const startWork = user?.companyInfo.startWork.toString();
  const formatedStartWork = FormatDateTime(startWork ? startWork : '');
  const workExperience = CalculateAge(startWork ? startWork : '');
  const salaryPerHour = user?.companyInfo.salaryPerHour ? user?.companyInfo.salaryPerHour : 0;
  const avatarUrl = user?.avatarUrl ? user?.avatarUrl : '';
  const alt = `Profile avatar by ${name}`;

  const { checkQueryParam, modalsName } = useModalWindow();

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
        <ModalWindow title="Edit profile">
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
        <ModalWindow title="Upload avatar">
          <UploadFile
            fileName="avatar"
            text="The selected file must be in one of the following formats '.jpg .png .gif .webp'. The file must not exceed 8MB."
            operation={operations.uploadAvatar}
            buttonLabel="Change avatar"
            acceptTypes={imageValidation.types}
            validationSize={imageValidation.size}
            type="image"
          />
        </ModalWindow>
      )}
    </>
  );
};

export default Auth;
