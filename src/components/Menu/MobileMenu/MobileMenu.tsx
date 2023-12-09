import Header from '../Header';
import UserInfo from '../UserInfo';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useAppSelector } from 'hooks/useAppSelector';
import {
  getFirstName,
  getLastName,
  getAvatarUrl,
  getCompanyInfo,
  getIsLoggedIn,
} from '../../../redux/user/userSelectors';
import { MobileMenuProps } from 'types/props/MobileMenuProps';
import { Backdrop, Content } from './MobileMenu.styled';

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const firstName = useAppSelector(getFirstName);
  const lastName = useAppSelector(getLastName);
  const name = `${firstName} ${lastName}`;
  const avatarUrl = useAppSelector(getAvatarUrl);
  const companyInfo = useAppSelector(getCompanyInfo);
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <Backdrop>
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

export default MobileMenu;
