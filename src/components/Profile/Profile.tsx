import UserData from './UserData';
import Controllers from './Controllers';
import Avatar from 'components/UI/Avatar';
import { Wrapper, LeftSide } from './Profile.styled';

const Profile: React.FC<{}> = () => {
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
      <div>
        <Avatar
          alt="User avatar"
          url="https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_1280.png"
          width="320px"
          height="320px"
          margin="0 0 var(--medium-indent)"
          borderRadius="10px"
          border="5px solid var(--white-transparent-color)"
        />
        <Controllers />
      </div>
    </Wrapper>
  );
};

export default Profile;
