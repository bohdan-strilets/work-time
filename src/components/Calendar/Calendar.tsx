import { month, weekdays } from "utilities/DefaultCalendarData";
import Controllers from "./Controllers";
import MonthList from "./MonthList";
import CellDay from "./CellDay";
import ModalWindow from "components/ModalWindow";
import useCalendar from "hooks/useCalendar";
import useModalWindow from "hooks/useModalWindow";
import {
  WeekdaysList,
  DayName,
  List,
  DayOfMonth,
  DayStatus,
} from "./Calendar.styled";

const Calendar: React.FC<{}> = () => {
  const {
    handlePrevMonth,
    handleChangeYear,
    handleChangeMonth,
    date,
    yearSelect,
    handleNextMonth,
    getMonthDate,
    handleDayClick,
    areEqual,
    selectedDate,
    selectedMonth,
    selectedYear,
  } = useCalendar();
  const { checkQueryParam, modalsName, openModal } = useModalWindow();

  const handleCellClick = () => {
    handleDayClick(date);
    openModal(modalsName.cellDay);
  };

  return (
    <div>
      <Controllers
        handlePrevMonth={handlePrevMonth}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handleChangeYear={handleChangeYear}
        yearSelect={yearSelect}
        date={date}
        handleNextMonth={handleNextMonth}
      />

      <WeekdaysList>
        {weekdays.map((name) => (
          <DayName key={name}>{name}</DayName>
        ))}
      </WeekdaysList>
      {getMonthDate(date.getFullYear(), date.getMonth()).map((week, index) => (
        <List key={index}>
          {week.map((date, index) =>
            date && date instanceof Date ? (
              <CellDay
                key={index}
                handleClick={handleCellClick}
                date={date}
                areEqual={areEqual}
                selectedDate={selectedDate}
              >
                <DayOfMonth>{date.getDate()}</DayOfMonth>
                <DayStatus>Work</DayStatus>
              </CellDay>
            ) : (
              <CellDay key={index} />
            )
          )}
          {checkQueryParam(modalsName.cellDay) && (
            <ModalWindow title={`${month[selectedMonth]} ${selectedYear}`}>
              {selectedYear}
            </ModalWindow>
          )}
        </List>
      ))}
      <MonthList
        handleChangeMonth={handleChangeMonth}
        selectedMonth={selectedMonth}
      />
    </div>
  );
};

export default Calendar;
