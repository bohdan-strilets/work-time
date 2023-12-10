import UserData from '../UserData';
import Controllers from '../Controllers';
import Avatar from 'components/UI/Avatar';
import { ProfileProps } from 'types/props/ProfileProps';
import { Wrapper, LeftSide } from '../Profile.styled';

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
}) => {
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
      <Avatar
        alt={alt}
        url={avatarUrl}
        width="300px"
        height="300px"
        margin="0 0 var(--small-indent)"
        borderRadius="10px"
        border="5px solid var(--white-transparent-color)"
      />
      <Controllers />
    </Wrapper>
  );
};

export default Mobile;
