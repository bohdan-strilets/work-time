import { useTranslation } from 'react-i18next';
import { BiSolidLogIn } from 'react-icons/bi';
import Header from '../Header';
import UserInfo from '../UserInfo';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Button from '../Button';
import { useAppSelector } from 'hooks/useAppSelector';
import {
  getFirstName,
  getLastName,
  getAvatarUrl,
  getCompanyInfo,
  getIsLoggedIn,
} from '../../../redux/user/userSelectors';
import { getTheme } from '../../../redux/settings/settingsSelectors';
import { MobileMenuProps } from 'types/props/MobileMenuProps';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Backdrop, Content } from './MobileMenu.styled';

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu, handleStartClick }) => {
  const firstName = useAppSelector(getFirstName);
  const lastName = useAppSelector(getLastName);
  const name = `${firstName} ${lastName}`;
  const avatarUrl = useAppSelector(getAvatarUrl);
  const companyInfo = useAppSelector(getCompanyInfo);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const theme = useAppSelector(getTheme);
  const { t } = useTranslation();

  return (
    <Backdrop>
      <Content theme={theme}>
        <Header closeMenu={closeMenu} />
        {isLoggedIn ? (
          <UserInfo
            avatarUrl={avatarUrl ?? ''}
            name={name}
            profession={companyInfo?.profession ?? t(TranslationKeys.Profession)}
          />
        ) : (
          <Button
            label={t(TranslationKeys.Start)}
            height={40}
            handleClick={handleStartClick}
            margin="40px 0 70px 0"
            icon={<BiSolidLogIn />}
          />
        )}
        <Navigation closeMenu={closeMenu} />
        <Footer closeMenu={closeMenu} />
      </Content>
    </Backdrop>
  );
};

export default MobileMenu;
