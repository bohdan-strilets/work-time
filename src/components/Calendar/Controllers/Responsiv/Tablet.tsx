import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import CalendarButton from '../../CalendarButton';
import DropdownList from 'components/UI/DropdownList';
import { month } from 'utilities/DefaultCalendarData';
import { ControllersProps } from 'types/props/ControllersProps';
import YearOptions from 'utilities/YearOptions';
import useTime from 'hooks/useTime';
import { Wrapper, DateWindow, Group } from '../Controllers.styled';

const Tablet: React.FC<ControllersProps> = ({
  handlePrevMonth,
  selectedMonth,
  selectedYear,
  handleChangeYear,
  date,
  handleNextMonth,
  backToCurrentDate,
}) => {
  const currentDateAndTime = useTime();

  return (
    <Wrapper>
      <Group>
        <DateWindow width="48%">
          {month[selectedMonth]} {selectedYear}
        </DateWindow>
        <DropdownList
          type="single"
          name="selectedYear"
          options={YearOptions}
          defaultValue={date.getFullYear().toString()}
          onChange={handleChangeYear}
          buttonlabel={date.getFullYear().toString()}
          height="30px"
          width="48%"
          position="absolute"
        />
      </Group>
      <Group>
        <CalendarButton
          handleClichk={handlePrevMonth}
          width="150px"
          background="var(--black-color)"
          color="var(--white-color)"
        >
          <IoMdArrowDropleft size={24} />
        </CalendarButton>
        <CalendarButton
          width="300px"
          background="var(--black-color)"
          color="var(--white-color)"
          handleClichk={backToCurrentDate}
        >
          {currentDateAndTime}
        </CalendarButton>
        <CalendarButton
          handleClichk={handleNextMonth}
          width="150px"
          background="var(--black-color)"
          color="var(--white-color)"
        >
          <IoMdArrowDropright size={24} />
        </CalendarButton>
      </Group>
    </Wrapper>
  );
};

export default Tablet;
