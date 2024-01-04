import { useTranslation } from 'react-i18next';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Wrapper, Copyright, Studio } from './Footer.styled';

const Footer: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Copyright>© WorkTime 2023 - {t(TranslationKeys.LogoSlogan)}</Copyright>
      <Studio>bs</Studio>
    </Wrapper>
  );
};

export default Footer;
