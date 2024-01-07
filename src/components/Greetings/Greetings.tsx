import { useTranslation } from 'react-i18next';
import LinkButton from 'components/UI/LinkButton';
import useModalWindow from 'hooks/useModalWindow';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Text } from './Greetings.styled';

const Greetings: React.FC<{}> = () => {
  const { openModal, modalsName } = useModalWindow();
  const { t } = useTranslation();

  return (
    <>
      <Text>{t(AuthLngKeys.GreetingsParagraph1, { ns: LocalesKeys.auth })}</Text>
      <Text>{t(AuthLngKeys.GreetingsParagraph2, { ns: LocalesKeys.auth })}</Text>
      <Text>{t(AuthLngKeys.GreetingsParagraph3, { ns: LocalesKeys.auth })}</Text>
      <Text>{t(AuthLngKeys.GreetingsParagraph4, { ns: LocalesKeys.auth })}</Text>
      <Text>{t(AuthLngKeys.GreetingsParagraph5, { ns: LocalesKeys.auth })}</Text>
      <Text>
        {t(AuthLngKeys.DidntReceiveActivationEmail, { ns: LocalesKeys.auth })}?
        <LinkButton onClick={() => openModal(modalsName.repeatActivationEmail)}>
          {t(CommonLngKeys.SendAgain, { ns: LocalesKeys.auth })}
        </LinkButton>
        .
      </Text>
    </>
  );
};

export default Greetings;
