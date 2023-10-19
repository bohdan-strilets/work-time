import Header from "components/Header";
import Footer from "components/Footer";
import { LayoutProps } from "types/props/LayoutProps";
import { Wrapper } from "./Layout.styled";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <div>{children}</div>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
