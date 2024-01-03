import { useTranslation } from 'react-i18next';
import registrationFormBg from 'Assets/images/registration-form-bg.jpg';
import loginFormBg from 'Assets/images/login-form-bg.jpg';
import RegistrationForm from 'components/Forms/RegistrationForm';
import LoginForm from 'components/Forms/LoginForm';
import useAuth from 'hooks/useAuth';
import { TranslationKeys } from 'types/enums/TranslationKeys';
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
              {t(TranslationKeys.GreetingRegistration)}
            </Title>
            <Text>{t(TranslationKeys.RegistrationSlogan)}</Text>
            <Button onClick={changeType} type="button">
              {t(TranslationKeys.Login)}
            </Button>
          </Overlay>
        ) : (
          <Overlay>
            <Title fontSize={42} color="var(--white-color)">
              {t(TranslationKeys.GreetingLogin)}
            </Title>
            <Text>{t(TranslationKeys.LoginSlogan)}</Text>
            <Button onClick={changeType} type="button">
              {t(TranslationKeys.Registration)}
            </Button>
          </Overlay>
        )}
      </LeftSide>
      <RightSide type={type}>
        {type === 'registration' ? (
          <Title fontSize={28} color="var(--black-color)">
            {t(TranslationKeys.CreateAccount)}
          </Title>
        ) : (
          <Title fontSize={28} color="var(--black-color)">
            {t(TranslationKeys.SignInTo)} Work Time
          </Title>
        )}
        {type === 'registration' ? <RegistrationForm /> : <LoginForm />}
      </RightSide>
    </Wrapper>
  );
};

export default Desktop;
