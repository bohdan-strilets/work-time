import { useTranslation } from 'react-i18next';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Text, Background, Icon, Slogan } from './Logo.styled';

const Logo: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text>
        WorkTime
        <Background>
          <Icon />
        </Background>
      </Text>
      <Slogan>{t(CommonLngKeys.LogoSlogan, { ns: LocalesKeys.common })}</Slogan>
    </>
  );
};

export default Logo;
