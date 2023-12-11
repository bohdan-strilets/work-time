import Media from 'react-media';
import ScreenWidth from 'utilities/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import ModalWindow from 'components/ModalWindow';
import PrivacyPolicy from 'components/Auth/PrivacyPolicy';
import TermsUseSite from 'components/Auth/TermsUseSite';
import useModalWindow from 'hooks/useModalWindow';

const RegistrationForm: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModalWindow();

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
        <ModalWindow title="Privacy policy">
          <PrivacyPolicy />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.termsUseSite) && (
        <ModalWindow title="Terms of use of the site">
          <TermsUseSite />
        </ModalWindow>
      )}
    </>
  );
};

export default RegistrationForm;
