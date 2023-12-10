import { useAppSelector } from 'hooks/useAppSelector';
import Avatar from 'components/UI/Avatar';
import { getFirstName, getLastName, getAvatarUrl, getEmail } from '../../redux/user/userSelectors';
import { Wrapper, Data, Name, Email } from './UserInformation.styled';

const UserInformation: React.FC<{}> = () => {
  const firstName = useAppSelector(getFirstName);
  const lastName = useAppSelector(getLastName);
  const avatarUrl = useAppSelector(getAvatarUrl);
  const email = useAppSelector(getEmail);

  return (
    <Wrapper>
      {avatarUrl && (
        <Avatar
          url={avatarUrl}
          alt="User avatar"
          width="60px"
          height="60px"
          margin="0 var(--small-indent) 0 0"
          borderRadius="5px"
          border="2px solid #ffffff"
        />
      )}
      <Data>
        <Name>
          {firstName} {lastName}
        </Name>
        <Email>{email}</Email>
      </Data>
    </Wrapper>
  );
};

export default UserInformation;
