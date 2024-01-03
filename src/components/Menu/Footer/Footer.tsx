import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoMdExit } from 'react-icons/io';
import Button from '../Button';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../../../redux/user/userOperations';
import { getIsLoggedIn } from '../../../redux/user/userSelectors';
import { UserResponseType } from 'types/types/UserResponseType';
import { FooterMenuProps } from 'types/props/FooterMenuProps';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Copyright } from './Footer.styled';

const Footer: React.FC<FooterMenuProps> = ({ closeMenu }) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logout = async () => {
    const response = await dispatch(operations.logout());
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      navigate('/');
      closeMenu();
    }
  };

  return (
    <>
      {isLoggedIn && (
        <Button
          height={40}
          margin="0 0 var(--large-indent) 0"
          icon={<IoMdExit size={18} />}
          label={t(TranslationKeys.Exit)}
          handleClick={logout}
        />
      )}
      <Copyright>© WorkTime 2023</Copyright>
    </>
  );
};

export default Footer;
