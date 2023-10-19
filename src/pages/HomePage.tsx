import Logo from "components/UI/Logo";
import SocialNetworks from "components/SocialNetworks";

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <div>
        <Logo />
        <SocialNetworks />
        <div>decoration line</div>
      </div>
    </>
  );
};

export default HomePage;
