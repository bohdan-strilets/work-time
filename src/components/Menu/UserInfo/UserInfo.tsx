import { UserInfoProps } from 'types/props/UserInfoProps';
import { Wrapper, Avatar, UserData, Name, Profession } from './UserInfo.styled';

const UserInfo: React.FC<UserInfoProps> = ({ avatarUrl, name, profession }) => {
  return (
    <Wrapper>
      <Avatar src={avatarUrl} alt="User avatar" />
      <UserData>
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
      </UserData>
    </Wrapper>
  );
};

export default UserInfo;
