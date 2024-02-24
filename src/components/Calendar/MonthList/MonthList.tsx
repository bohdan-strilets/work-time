import { month } from 'utilities/defaultData/DefaultCalendarData';
import CalendarButton from '../CalendarButton';
import { MonthListProps } from 'types/props/MonthListProps';
import { Wrapper, List, Item } from './MonthList.styled';

const MonthList: React.FC<MonthListProps> = ({ handleChangeMonth, selectedMonth }) => {
  return (
    <Wrapper>
      <List>
        {month.map((name, index) => (
          <Item key={index}>
            <CalendarButton
              value={index}
              handleClichk={handleChangeMonth}
              width="100px"
              background={selectedMonth === index ? 'var(--green-color)' : 'var(--black-color)'}
              color={selectedMonth === index ? 'var(--black-color)' : 'var(--white-color)'}
            >
              {name}
            </CalendarButton>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default MonthList;
