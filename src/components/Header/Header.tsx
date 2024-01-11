import { useTranslation } from 'react-i18next';
import Media from 'react-media';
import { useNavigate } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import Button from 'components/UI/Button';
import Menu from 'components/Menu';
import MobileMenu from 'components/Menu/MobileMenu';
import UserInformation from 'components/UserInformation';
import ThemeChangeBtn from 'components/UI/ThemeChangeBtn';
import LanguageSelection from 'components/UI/LanguageSelection';
import SoundSwitch from 'components/UI/SoundSwitch';
import useMenu from 'hooks/useMenu';
import { useAppSelector } from 'hooks/useAppSelector';
import { getIsLoggedIn } from '../../redux/user/userSelectors';
import ScreenWidth from 'utilities/ScreenWidth';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Wrapper, Line, List, Item } from './Header.styled';

const Header: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { openMenu, isOpen, closeMenu, handleBackdropClick, handleStartClick } = useMenu();
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <List>
          <Item>
            <Button
              type="button"
              icon={<CgMenuGridO size={24} />}
              width="35px"
              height="35px"
              onClick={openMenu}
            />
          </Item>
          <Item>
            <ThemeChangeBtn />
            <SoundSwitch />
            <LanguageSelection />
            {isLoggedIn ? (
              <UserInformation />
            ) : (
              <Button
                type="button"
                label={t(CommonLngKeys.Start, { ns: LocalesKeys.common })}
                width="200px"
                height="35px"
                onClick={() => navigate('auth')}
              />
            )}
          </Item>
        </List>
      </Wrapper>
      <Line />
      {isOpen && (
        <Menu
          closeMenu={closeMenu}
          handleBackdropClick={handleBackdropClick}
          handleStartClick={handleStartClick}
        />
      )}
      <Media
        query={`(max-width: ${ScreenWidth.preTablet})`}
        render={() =>
          isOpen ? (
            <MobileMenu closeMenu={closeMenu} handleStartClick={handleStartClick} />
          ) : undefined
        }
      />
    </>
  );
};

export default Header;
