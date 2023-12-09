import { useNavigate } from 'react-router-dom';
import { IoMdExit } from 'react-icons/io';
import Button from '../Button';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../../../redux/user/userOperations';
import { getIsLoggedIn } from '../../../redux/user/userSelectors';
import { UserResponseType } from 'types/types/UserResponseType';
import { Copyright } from './Footer.styled';

const Footer: React.FC<{}> = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    const response = await dispatch(operations.logout());
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      navigate('/');
    }
  };

  return (
    <>
      {isLoggedIn && (
        <Button
          height={40}
          margin="0 0 var(--large-indent) 0"
          icon={<IoMdExit size={18} />}
          label="Exit"
          handleClick={logout}
        />
      )}
      <Copyright>© WorkTime 2023</Copyright>
    </>
  );
};

export default Footer;
