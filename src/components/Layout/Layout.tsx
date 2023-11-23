import Header from 'components/Header';
import Footer from 'components/Footer';
import { LayoutProps } from 'types/props/LayoutProps';
import { Wrapper, Content } from './Layout.styled';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
