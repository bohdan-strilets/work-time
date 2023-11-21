import Avatar from 'components/UI/Avatar';
import { UserInfoProps } from 'types/props/UserInfoProps';
import { Wrapper, UserData, Name, Profession } from './UserInfo.styled';

const UserInfo: React.FC<UserInfoProps> = ({ avatarUrl, name, profession }) => {
  return (
    <Wrapper>
      <Avatar
        url={avatarUrl}
        alt="User avatar"
        width="100px"
        height="100px"
        margin="0 var(--medium-indent) 0 0"
        borderRadius="4px"
        border="4px solid var(--white-transparent-color)"
      />
      <UserData>
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
      </UserData>
    </Wrapper>
  );
};

export default UserInfo;
