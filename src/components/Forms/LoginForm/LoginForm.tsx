import { useTranslation } from 'react-i18next';
import Media from 'react-media';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import ModalWindow from 'components/ModalWindow';
import useModalWindow from 'hooks/useModalWindow';
import RequestPasswordResetForm from '../RequestPasswordResetForm';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const LoginForm: React.FC<{}> = () => {
  const { modalsName, checkQueryParam } = useModalWindow();
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
      {checkQueryParam(modalsName.requestPasswordReset) && (
        <ModalWindow title={t(AuthLngKeys.RequestPasswordReset, { ns: LocalesKeys.auth })}>
          <RequestPasswordResetForm />
        </ModalWindow>
      )}
    </>
  );
};

export default LoginForm;
