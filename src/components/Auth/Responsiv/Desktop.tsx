import { useTranslation } from 'react-i18next';
import registrationFormBg from 'Assets/images/registration-form-bg.jpg';
import loginFormBg from 'Assets/images/login-form-bg.jpg';
import RegistrationForm from 'components/Forms/RegistrationForm';
import LoginForm from 'components/Forms/LoginForm';
import useAuth from 'hooks/useAuth';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Wrapper, LeftSide, Overlay, Title, Text, Button, RightSide } from '../Auth.styled';

const Desktop: React.FC<{}> = () => {
  const { changeType, type } = useAuth();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <LeftSide registrationUrl={registrationFormBg} loginUrl={loginFormBg} type={type}>
        {type === 'registration' ? (
          <Overlay>
            <Title fontSize={42} color="var(--white-color)">
              {t(AuthLngKeys.HelloFriend, { ns: LocalesKeys.auth })}
            </Title>
            <Text>{t(AuthLngKeys.EnterYourPersonalDetails, { ns: LocalesKeys.auth })}</Text>
            <Button onClick={changeType} type="button">
              {t(CommonLngKeys.Login, { ns: LocalesKeys.common })}
            </Button>
          </Overlay>
        ) : (
          <Overlay>
            <Title fontSize={42} color="var(--white-color)">
              {t(AuthLngKeys.WelcomeBack, { ns: LocalesKeys.auth })}
            </Title>
            <Text>{t(AuthLngKeys.ToKeepConnected, { ns: LocalesKeys.auth })}</Text>
            <Button onClick={changeType} type="button">
              {t(CommonLngKeys.Registration, { ns: LocalesKeys.common })}
            </Button>
          </Overlay>
        )}
      </LeftSide>
      <RightSide type={type}>
        {type === 'registration' ? (
          <Title fontSize={28} color="var(--black-color)">
            {t(AuthLngKeys.CreateAccount, { ns: LocalesKeys.auth })}
          </Title>
        ) : (
          <Title fontSize={28} color="var(--black-color)">
            {t(AuthLngKeys.SignInTo, { ns: LocalesKeys.auth })} Work Time
          </Title>
        )}
        {type === 'registration' ? <RegistrationForm /> : <LoginForm />}
      </RightSide>
    </Wrapper>
  );
};

export default Desktop;
