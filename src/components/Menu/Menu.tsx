import { MenuProps } from 'types/props/MenuProps';
import UserInfo from './UserInfo';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import { useAppSelector } from 'hooks/useAppSelector';
import {
  getFirstName,
  getLastName,
  getAvatarUrl,
  getCompanyInfo,
  getIsLoggedIn,
} from '../../redux/user/userSelectors';
import { Backdrop, Content } from './Menu.styled';

const Menu: React.FC<MenuProps> = ({ closeMenu, handleBackdropClick }) => {
  const firstName = useAppSelector(getFirstName);
  const lastName = useAppSelector(getLastName);
  const name = `${firstName} ${lastName}`;
  const avatarUrl = useAppSelector(getAvatarUrl);
  const companyInfo = useAppSelector(getCompanyInfo);
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        <Header closeMenu={closeMenu} />
        {isLoggedIn && (
          <UserInfo
            avatarUrl={avatarUrl ? avatarUrl : ''}
            name={name}
            profession={companyInfo?.profession ? companyInfo?.profession : 'profession'}
          />
        )}
        <Navigation closeMenu={closeMenu} />
        <Footer />
      </Content>
    </Backdrop>
  );
};

export default Menu;
