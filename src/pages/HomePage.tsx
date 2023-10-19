import Header from "components/Header";
import Logo from "components/UI/Logo";

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <div>
        <Logo />
        <p>Example text for footer, more text.</p>
        <ul>
          <li>
            <p>F</p>
          </li>
          <li>
            <p>T</p>
          </li>
          <li>
            <p>I</p>
          </li>
          <li>
            <p>P</p>
          </li>
        </ul>
        <div>decoration line</div>
      </div>
    </>
  );
};

export default HomePage;
