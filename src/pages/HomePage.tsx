import Logo from "components/UI/Logo";
import SocialNetworks from "components/SocialNetworks";
import Line from "components/UI/Line";

const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <Logo />
      <SocialNetworks />
      <Line />
    </div>
  );
};

export default HomePage;
