import { useState } from "react";
import registrationFormBg from "Assets/images/registration-form-bg.jpg";
import loginFormBg from "Assets/images/login-form-bg.jpg";
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
            <Title>Hello friend!</Title>
            <Text>Enter your personal details and start journey with us</Text>
            <Button onClick={changeType} type="button">
              Login
            </Button>
          </Overlay>
        ) : (
          <Overlay>
            <Title>Welcome back!</Title>
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
        {type === "registration" ? <p>Registration form</p> : <p>Login form</p>}
      </RightSide>
    </Wrapper>
  );
};

export default Auth;
