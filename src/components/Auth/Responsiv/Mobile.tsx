import registrationFormBg from "Assets/images/registration-form-bg.jpg";
import loginFormBg from "Assets/images/login-form-bg.jpg";
import RegistrationForm from "components/Forms/RegistrationForm";
import LoginForm from "components/Forms/LoginForm";
import useAuth from "hooks/useAuth";
import {
  Wrapper,
  LeftSide,
  Overlay,
  Title,
  Text,
  Button,
  RightSide,
} from "../Auth.styled";

const Mobile: React.FC<{}> = () => {
  const { changeType, type } = useAuth();

  return (
    <Wrapper>
      <LeftSide
        registrationUrl={registrationFormBg}
        loginUrl={loginFormBg}
        type={type}
      >
        {type === "registration" ? (
          <Overlay>
            <Title fontSize={24} color="var(--white-color)">
              Hello friend!
            </Title>
            <Text>Enter your personal details and start journey with us</Text>
            <Button onClick={changeType} type="button">
              Login
            </Button>
          </Overlay>
        ) : (
          <Overlay>
            <Title fontSize={24} color="var(--white-color)">
              Welcome back!
            </Title>
            <Text>
              To keep connected with us please login with your personal info
            </Text>
            <Button onClick={changeType} type="button">
              Registration
            </Button>
          </Overlay>
        )}
      </LeftSide>
      <RightSide type={type}>
        {type === "registration" ? (
          <Title fontSize={20} color="var(--black-color)">
            Create account
          </Title>
        ) : (
          <Title fontSize={20} color="var(--black-color)">
            Sign in to Work Time
          </Title>
        )}
        {type === "registration" ? <RegistrationForm /> : <LoginForm />}
      </RightSide>
    </Wrapper>
  );
};

export default Mobile;
