import { GoogleLogin } from '@react-oauth/google';
import { GoogleAuthBtnProps } from 'types/props/GoogleAuthBtnProps';
import useGoogleAuth from 'hooks/useGoogleAuth';

const GoogleAuthBtn: React.FC<GoogleAuthBtnProps> = ({ width }) => {
  const { handleError, handleSuccess } = useGoogleAuth();

  return (
    <>
      <GoogleLogin
        onSuccess={credentialResponse => handleSuccess(credentialResponse)}
        onError={handleError}
        width={width}
      />
    </>
  );
};

export default GoogleAuthBtn;
