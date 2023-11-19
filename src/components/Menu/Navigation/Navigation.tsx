import { HiMiniHome } from 'react-icons/hi2';
import { FaCalendarDays, FaUserGroup } from 'react-icons/fa6';
import { FaChartArea } from 'react-icons/fa6';
import { BsInfoSquareFill } from 'react-icons/bs';
import { List, Item, Reference, ReferenceText } from './Navigation.styled';

const Navigation: React.FC<{}> = () => {
  return (
    <List>
      <Item>
        <Reference to="/">
          <HiMiniHome size={20} />
          <ReferenceText>Home</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/calendar">
          <FaCalendarDays />
          <ReferenceText>Calendar</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/profile">
          <FaUserGroup size={18} />
          <ReferenceText>Profile</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/statistics">
          <FaChartArea />
          <ReferenceText>Statistics</ReferenceText>
        </Reference>
      </Item>
      <Item>
        <Reference to="/about-us">
          <BsInfoSquareFill />
          <ReferenceText>About us</ReferenceText>
        </Reference>
      </Item>
    </List>
  );
};

export default Navigation;
