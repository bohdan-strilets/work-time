import { Wrapper, Copyright, Studio } from "./Footer.styled";

const Footer: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Copyright>© WorkTime 2023 - Every second matters</Copyright>
      <Studio>bs</Studio>
    </Wrapper>
  );
};

export default Footer;
