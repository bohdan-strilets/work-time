import { useTranslation } from 'react-i18next';
import { TranslationKeys } from 'types/enums/TranslationKeys';
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
      <Slogan>{t(TranslationKeys.LogoSlogan)}</Slogan>
    </>
  );
};

export default Logo;
