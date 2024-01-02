import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import CalendarButton from '../../CalendarButton';
import DropdownList from 'components/UI/DropdownList';
import { month } from 'utilities/DefaultCalendarData';
import { ControllersProps } from 'types/props/ControllersProps';
import YearOptions from 'utilities/YearOptions';
import useTime from 'hooks/useTime';
import TypeCalendarOptions from 'utilities/TypeCalendarOptions';
import { CalendarTypeEnum } from 'types/enums/CalendarTypeEnum';
import { Wrapper, DateWindow, Group } from '../Controllers.styled';

const Mobile: React.FC<ControllersProps> = ({
  handlePrevMonth,
  selectedMonth,
  selectedYear,
  handleChangeYear,
  date,
  handleNextMonth,
  backToCurrentDate,
  handleChangeCalendarType,
}) => {
  const currentDateAndTime = useTime();

  return (
    <Wrapper>
      <DropdownList
        type="single"
        name="selectedType"
        options={TypeCalendarOptions}
        defaultValue={CalendarTypeEnum.Calendar}
        onChange={handleChangeCalendarType}
        buttonlabel="Show how"
        height="30px"
        width="100%"
        position="absolute"
        margin="0 0 var(--small-indent) 0"
      />
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
          width="100%"
          background="var(--black-color)"
          color="var(--white-color)"
          handleClichk={backToCurrentDate}
        >
          {currentDateAndTime}
        </CalendarButton>
      </Group>
      <Group>
        <CalendarButton
          handleClichk={handlePrevMonth}
          width="48%"
          background="var(--black-color)"
          color="var(--white-color)"
        >
          <IoMdArrowDropleft size={24} />
        </CalendarButton>
        <CalendarButton
          handleClichk={handleNextMonth}
          width="48%"
          background="var(--black-color)"
          color="var(--white-color)"
        >
          <IoMdArrowDropright size={24} />
        </CalendarButton>
      </Group>
    </Wrapper>
  );
};

export default Mobile;
