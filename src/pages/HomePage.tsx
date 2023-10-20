import styled from "@emotion/styled";
import Logo from "components/UI/Logo";
import SocialNetworks from "components/SocialNetworks";
import Line from "components/UI/Line";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 60vh;
  overflow: hidden;
`;

const HomePage: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Logo />
      <SocialNetworks />
      <Line />
    </Wrapper>
  );
};

export default HomePage;
