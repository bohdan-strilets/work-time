import { useTranslation } from 'react-i18next';
import { HiMiniHome } from 'react-icons/hi2';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaChartArea } from 'react-icons/fa6';
import { BsInfoSquareFill } from 'react-icons/bs';
import { PiUserListFill } from 'react-icons/pi';
import { FaUsers, FaList } from 'react-icons/fa';
import { NavigationProps } from 'types/props/NavigationProps';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { List, Item, Reference, ReferenceText } from './Navigation.styled';

const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  const { t } = useTranslation();

  return (
    <List>
      <Item>
        <Reference to="/" onClick={closeMenu}>
          <HiMiniHome size={20} />
          <ReferenceText>{t(CommonLngKeys.Home, { ns: LocalesKeys.common })}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/calendar" onClick={closeMenu}>
          <FaCalendarDays />
          <ReferenceText>{t(CommonLngKeys.Calendar, { ns: LocalesKeys.common })}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/todos" onClick={closeMenu}>
          <FaList />
          <ReferenceText>{t(CommonLngKeys.TodoList, { ns: LocalesKeys.common })}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/profile" onClick={closeMenu}>
          <PiUserListFill size={20} />
          <ReferenceText>{t(CommonLngKeys.Profile, { ns: LocalesKeys.common })}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/statistics" onClick={closeMenu}>
          <FaChartArea />
          <ReferenceText>{t(CommonLngKeys.Statistics, { ns: LocalesKeys.common })}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/list-users" onClick={closeMenu}>
          <FaUsers size={20} />
          <ReferenceText>{t(CommonLngKeys.ListOfUsers, { ns: LocalesKeys.common })}</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/about-us" onClick={closeMenu}>
          <BsInfoSquareFill />
          <ReferenceText>{t(CommonLngKeys.AboutUs, { ns: LocalesKeys.common })}</ReferenceText>
        </Reference>
      </Item>
    </List>
  );
};

export default Navigation;
