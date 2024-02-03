import { useTranslation } from 'react-i18next';
import { IoMdExit } from 'react-icons/io';
import Button from '../Button';
import { useAppSelector } from 'hooks/useAppSelector';
import { getIsLoggedIn } from '../../../redux/user/userSelectors';
import { FooterMenuProps } from 'types/props/FooterMenuProps';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import useLogout from 'hooks/useLogout';
import { Copyright } from './Footer.styled';

const Footer: React.FC<FooterMenuProps> = ({ closeMenu }) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const { t } = useTranslation();
  const { logout } = useLogout();

  const handleLogout = async () => {
    logout();
    closeMenu();
  };

  return (
    <>
      {isLoggedIn && (
        <Button
          height={40}
          margin="0 0 var(--large-indent) 0"
          icon={<IoMdExit size={18} />}
          label={t(CommonLngKeys.Exit, { ns: LocalesKeys.common })}
          handleClick={handleLogout}
        />
      )}
      <Copyright>© WorkTime 2023</Copyright>
    </>
  );
};

export default Footer;
