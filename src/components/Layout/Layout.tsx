import Header from "components/Header";
import { LayoutProps } from "types/props/LayoutProps";
import { Wrapper } from "./Layout.styled";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
