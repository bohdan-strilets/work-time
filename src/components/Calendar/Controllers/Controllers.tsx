import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import CalendarButton from '../CalendarButton';
import DropdownList from 'components/UI/DropdownList';
import { month } from 'utilities/DefaultCalendarData';
import { ControllersProps } from 'types/props/ControllersProps';
import YearOptions from 'utilities/YearOptions';
import { Wrapper, CurrentDate, Group } from './Controllers.styled';

const Controllers: React.FC<ControllersProps> = ({
  handlePrevMonth,
  selectedMonth,
  selectedYear,
  handleChangeYear,
  date,
  handleNextMonth,
}) => {
  return (
    <Wrapper>
      <CalendarButton handleClichk={handlePrevMonth}>
        <IoMdArrowDropleft size={24} />
      </CalendarButton>
      <Group>
        <CurrentDate>
          {month[selectedMonth]} {selectedYear}
        </CurrentDate>
        <DropdownList
          type="single"
          name="selectedYear"
          options={YearOptions}
          defaultValue={date.getFullYear().toString()}
          onChange={handleChangeYear}
          buttonlabel={date.getFullYear().toString()}
          height="30px"
          width="150px"
          position="absolute"
        />
      </Group>
      <CalendarButton handleClichk={handleNextMonth}>
        <IoMdArrowDropright size={24} />
      </CalendarButton>
    </Wrapper>
  );
};

export default Controllers;
