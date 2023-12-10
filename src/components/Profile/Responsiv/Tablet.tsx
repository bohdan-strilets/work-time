import { FiUploadCloud } from 'react-icons/fi';
import UserData from '../UserData';
import Controllers from '../Controllers';
import Avatar from 'components/UI/Avatar';
import { ProfileProps } from 'types/props/ProfileProps';
import useModalWindow from 'hooks/useModalWindow';
import { Wrapper, LeftSide, Button, ButtonHover } from '../Profile.styled';

const Tablet: React.FC<ProfileProps> = ({
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
        />
      </LeftSide>
      <div>
        <Button type="button" onClick={() => openModal(modalsName.uploadAvatar)}>
          <Avatar
            alt={alt}
            url={avatarUrl}
            width="220px"
            height="220px"
            margin="0 0 var(--medium-indent)"
            borderRadius="10px"
            border="5px solid var(--white-transparent-color)"
          />
          <ButtonHover className="hover-effect">
            <FiUploadCloud color="var(--white-color)" size={90} />
          </ButtonHover>
        </Button>
        <Controllers />
      </div>
    </Wrapper>
  );
};

export default Tablet;
