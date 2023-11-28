import Header from '../Header';
import UserInfo from '../UserInfo';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { MobileMenuProps } from 'types/props/MobileMenuProps';
import { Backdrop, Content } from './MobileMenu.styled';

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <Backdrop>
      <Content>
        <Header closeMenu={closeMenu} />
        <UserInfo
          avatarUrl="https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_1280.png"
          name="Bohdan Strilets"
          profession="Full-stack developer"
        />
        <Navigation closeMenu={closeMenu} />
        <Footer />
      </Content>
    </Backdrop>
  );
};

export default MobileMenu;
