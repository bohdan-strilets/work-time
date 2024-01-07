import { useTranslation } from 'react-i18next';
import Media from 'react-media';
import ScreenWidth from 'utilities/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import ModalWindow from 'components/ModalWindow';
import PrivacyPolicy from 'components/Auth/PrivacyPolicy';
import TermsUseSite from 'components/Auth/TermsUseSite';
import useModalWindow from 'hooks/useModalWindow';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const RegistrationForm: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModalWindow();
  const { t } = useTranslation();

  return (
    <>
      <Media
        queries={{
          small: `(max-width: ${ScreenWidth.preTablet})`,
          medium: `(min-width: ${ScreenWidth.tablet}) and (max-width: ${ScreenWidth.preDesktop})`,
          large: `(min-width: ${ScreenWidth.desktop})`,
        }}
      >
        {matches => (
          <>
            {matches.small && <Mobile />}
            {matches.medium && <Tablet />}
            {matches.large && <Desktop />}
          </>
        )}
      </Media>
      {checkQueryParam(modalsName.privacyPolicy) && (
        <ModalWindow title={t(AuthLngKeys.PrivacyPolicy, { ns: LocalesKeys.auth })}>
          <PrivacyPolicy />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.termsUseSite) && (
        <ModalWindow title={t(AuthLngKeys.TermsOfUseOfTheSite, { ns: LocalesKeys.auth })}>
          <TermsUseSite />
        </ModalWindow>
      )}
    </>
  );
};

export default RegistrationForm;
