import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleAuthBtnProps } from 'types/props/GoogleAuthBtnProps';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../../../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import { UserType } from 'types/types/UserType';
import useLocalStorage from 'hooks/useLocalStorage';

const GoogleAuthBtn: React.FC<GoogleAuthBtnProps> = ({ width }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setDataToLs } = useLocalStorage();

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    if (token) {
      setDataToLs('google-token', token);
      const response = await dispatch(operations.googleAuth(token));
      const data = response.payload as UserResponseType<UserType>;
      if (data && data.success) {
        navigate('/calendar');
      } else {
        navigate('/auth');
        toast.warning('Something went wrong, please check the entered data and try again.');
      }
    }
  };

  const handleError = () => {
    toast.warning('Login failed');
  };

  return (
    <GoogleLogin
      onSuccess={credentialResponse => handleSuccess(credentialResponse)}
      onError={handleError}
      width={width}
    />
  );
};

export default GoogleAuthBtn;
