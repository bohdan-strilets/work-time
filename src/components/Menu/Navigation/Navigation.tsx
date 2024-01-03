import { useTranslation } from 'react-i18next';
import { HiMiniHome } from 'react-icons/hi2';
import { FaCalendarDays, FaUserGroup } from 'react-icons/fa6';
import { FaChartArea } from 'react-icons/fa6';
import { BsInfoSquareFill } from 'react-icons/bs';
import { NavigationProps } from 'types/props/NavigationProps';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { List, Item, Reference, ReferenceText } from './Navigation.styled';

const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  const { t } = useTranslation();

  return (
    <List>
      <Item>
        <Reference to="/" onClick={closeMenu}>
          <HiMiniHome size={20} />
          <ReferenceText>{t(TranslationKeys.Home)}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/calendar" onClick={closeMenu}>
          <FaCalendarDays />
          <ReferenceText>{t(TranslationKeys.Calendar)}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/profile" onClick={closeMenu}>
          <FaUserGroup size={18} />
          <ReferenceText>{t(TranslationKeys.Profile)}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/statistics" onClick={closeMenu}>
          <FaChartArea />
          <ReferenceText>{t(TranslationKeys.Statistics)}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/about-us" onClick={closeMenu}>
          <BsInfoSquareFill />
          <ReferenceText>{t(TranslationKeys.AboutUs)}</ReferenceText>
        </Reference>
      </Item>
    </List>
  );
};

export default Navigation;
