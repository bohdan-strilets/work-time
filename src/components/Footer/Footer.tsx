import { useTranslation } from 'react-i18next';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Wrapper, Copyright, Studio } from './Footer.styled';

const Footer: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Copyright>
        © WorkTime 2023 - {t(CommonLngKeys.LogoSlogan, { ns: LocalesKeys.common })}
      </Copyright>
      <Studio>bs</Studio>
    </Wrapper>
  );
};

export default Footer;
