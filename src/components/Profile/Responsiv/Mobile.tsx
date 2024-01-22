import { FiUploadCloud } from 'react-icons/fi';
import UserData from '../UserData';
import Controllers from '../Controllers';
import Avatar from 'components/UI/Avatar';
import { ProfileProps } from 'types/props/ProfileProps';
import useModalWindow from 'hooks/useModalWindow';
import { Wrapper, LeftSide, Button, ButtonHover } from '../Profile.styled';

const Mobile: React.FC<ProfileProps> = ({
  name,
  isActivated,
  email,
  gender,
  dateBirth,
  age,
  companyName,
  profession,
  startWork,
  workExperience,
  salaryPerHour,
  alt,
  avatarUrl,
  userId,
  description,
  settings,
}) => {
  const { modalsName, openModal } = useModalWindow();

  return (
    <Wrapper>
      <LeftSide>
        <UserData
          name={name}
          isActivateed={isActivated}
          email={email}
          gender={gender}
          dateBirth={dateBirth}
          age={age}
          workInfo={{
            companyName: companyName,
            profession: profession,
            startWork: startWork,
            workExperience: workExperience,
            salaryPerHour: salaryPerHour,
          }}
          userId={userId}
          description={description}
          settings={settings}
        />
      </LeftSide>
      <Button type="button" onClick={() => openModal(modalsName.uploadAvatar)}>
        <Avatar
          alt={alt}
          url={avatarUrl}
          width="290px"
          height="290px"
          margin="0 0 var(--small-indent)"
          borderRadius="10px"
          border="5px solid var(--white-transparent-color)"
        />
        <ButtonHover className="hover-effect">
          <FiUploadCloud color="var(--white-color)" size={90} />
        </ButtonHover>
      </Button>
      <Controllers />
    </Wrapper>
  );
};

export default Mobile;
