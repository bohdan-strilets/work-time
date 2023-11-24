import UserData from '../UserData';
import Controllers from '../Controllers';
import Avatar from 'components/UI/Avatar';
import { Wrapper, LeftSide } from '../Profile.styled';

const Mobile: React.FC<{}> = () => {
  return (
    <Wrapper>
      <LeftSide>
        <UserData
          name="Bohdan Strilets"
          isActivateed={true}
          email="bohdan.striletd@gmail.com"
          gender="Man"
          dateBirth="02.06.1995"
          workInfo={{
            companyName: 'GPA Global',
            profession: 'Full-stack developer',
            startWork: '2019-09-01',
            endWork: '',
            salaryPerHour: 33,
          }}
        />
      </LeftSide>
      <Avatar
        alt="User avatar"
        url="https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_1280.png"
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
