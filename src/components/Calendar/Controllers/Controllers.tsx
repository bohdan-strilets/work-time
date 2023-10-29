import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import CalendarButton from "../CalendarButton";
import { years, month } from "utilities/DefaultCalendarData";
import { ControllersProps } from "types/props/ControllersProps";
import {
  Wrapper,
  CurrentDate,
  DropdownWrapper,
  DropdownList,
} from "./Controllers.styled";

const Controllers: React.FC<ControllersProps> = ({
  handlePrevMonth,
  selectedMonth,
  selectedYear,
  handleChangeYear,
  yearSelect,
  date,
  handleNextMonth,
}) => {
  return (
    <Wrapper>
      <CalendarButton handleClichk={handlePrevMonth}>
        <IoMdArrowDropleft size={24} />
      </CalendarButton>
      <DropdownWrapper>
        <CurrentDate>
          {month[selectedMonth]} {selectedYear}
        </CurrentDate>
        <DropdownList
          onChange={handleChangeYear}
          ref={yearSelect}
          value={date.getFullYear()}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </DropdownList>
      </DropdownWrapper>
      <CalendarButton handleClichk={handleNextMonth}>
        <IoMdArrowDropright size={24} />
      </CalendarButton>
    </Wrapper>
  );
};

export default Controllers;
