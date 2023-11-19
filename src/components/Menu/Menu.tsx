import { MenuProps } from 'types/props/MenuProps';
import UserInfo from './UserInfo';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import { Backdrop, Content } from './Menu.styled';

const Menu: React.FC<MenuProps> = ({ closeMenu, handleBackdropClick }) => {
  return (
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        <Header closeMenu={closeMenu} />
        <UserInfo
          avatarUrl="https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_1280.png"
          name="Bohdan Strilets"
          profession="Full-stack developer"
        />
        <Navigation />
        <Footer />
      </Content>
    </Backdrop>
  );
};

export default Menu;
