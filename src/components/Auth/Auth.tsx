import { useState } from "react";
import registrationFormBg from "Assets/images/registration-form-bg.jpg";
import loginFormBg from "Assets/images/login-form-bg.jpg";
import RegistrationForm from "components/Forms/RegistrationForm";
import {
  Wrapper,
  LeftSide,
  Overlay,
  Title,
  Text,
  Button,
  RightSide,
} from "./Auth.styled";

const Auth: React.FC<{}> = () => {
  const [type, setType] = useState<"registration" | "login">("registration");

  const changeType = () =>
    type === "registration" ? setType("login") : setType("registration");

  return (
    <Wrapper>
      <LeftSide
        registrationUrl={registrationFormBg}
        loginUrl={loginFormBg}
        type={type}
      >
        {type === "registration" ? (
          <Overlay>
            <Title fontSize={42} color="var(--white-color)">
              Hello friend!
            </Title>
            <Text>Enter your personal details and start journey with us</Text>
            <Button onClick={changeType} type="button">
              Login
            </Button>
          </Overlay>
        ) : (
          <Overlay>
            <Title fontSize={42} color="var(--white-color)">
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
          <Title fontSize={28} color="var(--black-color)">
            Create account
          </Title>
        ) : (
          <Title fontSize={28} color="var(--black-color)">
            Sign in to Work Time
          </Title>
        )}
        {type === "registration" ? <RegistrationForm /> : <p>Login form</p>}
      </RightSide>
    </Wrapper>
  );
};

export default Auth;
