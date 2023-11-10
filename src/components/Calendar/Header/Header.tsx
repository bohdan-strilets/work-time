import { WeekdaysList, DayName } from './Header.styled';
import { weekdays } from 'utilities/DefaultCalendarData';

const Header: React.FC<{}> = () => {
  return (
    <WeekdaysList>
      {weekdays.map(name => (
        <DayName key={name}>{name}</DayName>
      ))}
    </WeekdaysList>
  );
};

export default Header;
