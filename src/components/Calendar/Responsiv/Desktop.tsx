import { month, weekdays } from "utilities/DefaultCalendarData";
import Controllers from "../Controllers";
import MonthList from "../MonthList";
import CellDay from "../CellDay";
import DayInfo from "../DayInfo";
import ModalWindow from "components/ModalWindow";
import AddInformationForm from "components/Forms/AddInformationForm";
import useCalendar from "hooks/useCalendar";
import useModalWindow from "hooks/useModalWindow";
import {
  WeekdaysList,
  DayName,
  List,
  DayOfMonth,
  DayStatus,
} from "../Calendar.styled";

const Desktop: React.FC<{}> = () => {
  const {
    handlePrevMonth,
    handleChangeYear,
    handleChangeMonth,
    date,
    yearSelect,
    handleNextMonth,
    getMonthDate,
    areEqual,
    selectedDate,
    selectedMonth,
    selectedYear,
    dateTransform,
    handleCellClick,
    dayInfo,
    checkDayStatus,
  } = useCalendar();
  const { checkQueryParam, modalsName } = useModalWindow();

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
          {week.map((date, index) => {
            const status = checkDayStatus(date);
            return date && date instanceof Date ? (
              <CellDay
                key={index}
                handleClick={() => handleCellClick(date)}
                date={date}
                areEqual={areEqual}
                selectedDate={selectedDate}
                status={status}
              >
                <DayOfMonth>{date.getDate()}</DayOfMonth>
                <DayStatus>{status && date ? status : "-"}</DayStatus>
              </CellDay>
            ) : (
              <CellDay key={index} />
            );
          })}
          {checkQueryParam(modalsName.cellDay) && dayInfo && (
            <ModalWindow title={`${month[selectedMonth]} ${selectedYear}`}>
              <DayInfo
                status={dayInfo.status}
                numberHoursWorked={dayInfo.numberHoursWorked}
                date={selectedDate}
                time={dayInfo.time}
                workShiftNumber={dayInfo.workShiftNumber}
                additionalHours={dayInfo.additionalHours}
                dateTransform={dateTransform}
              />
            </ModalWindow>
          )}
          {checkQueryParam(modalsName.cellDay) && !dayInfo && (
            <ModalWindow title={`${month[selectedMonth]} ${selectedYear}`}>
              <AddInformationForm selectedDate={selectedDate} />
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

export default Desktop;
