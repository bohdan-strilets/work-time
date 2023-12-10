import UserData from '../UserData';
import Controllers from '../Controllers';
import Avatar from 'components/UI/Avatar';
import { ProfileProps } from 'types/props/ProfileProps';
import { Wrapper, LeftSide } from '../Profile.styled';

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
        <Avatar
          alt={alt}
          url={avatarUrl}
          width="220px"
          height="220px"
          margin="0 0 var(--medium-indent)"
          borderRadius="10px"
          border="5px solid var(--white-transparent-color)"
        />
        <Controllers />
      </div>
    </Wrapper>
  );
};

export default Tablet;
