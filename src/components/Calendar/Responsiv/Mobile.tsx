import Controllers from '../Controllers';
import Header from '../Header';
import MonthList from '../MonthList';
import CellDay from '../CellDay';
import CellInformation from '../CellInformation';
import ListDays from 'components/ListDays';
import { CalendarTypeEnum } from 'types/enums/CalendarTypeEnum';
import { CalendarProps } from 'types/props/CalendarProps';
import { List } from '../Calendar.styled';

const Mobile: React.FC<CalendarProps> = ({
  handlePrevMonth,
  selectedMonth,
  selectedYear,
  handleChangeYear,
  date,
  handleNextMonth,
  backToCurrentDate,
  handleChangeCalendarType,
  calendarType,
  getMonthDate,
  getInformationForDay,
  handleCellClick,
  areEqual,
  selectedDate,
  handleChangeMonth,
}) => {
  return (
    <>
      <Controllers
        handlePrevMonth={handlePrevMonth}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handleChangeYear={handleChangeYear}
        date={date}
        handleNextMonth={handleNextMonth}
        backToCurrentDate={backToCurrentDate}
        handleChangeCalendarType={handleChangeCalendarType}
      />
      {calendarType === CalendarTypeEnum.Calendar ? (
        <>
          <Header />
          {getMonthDate(date.getFullYear(), date.getMonth()).map((week, index) => (
            <List key={index}>
              {week.map((date, index) => {
                const dayInfo = getInformationForDay(date);
                return date && date instanceof Date ? (
                  <CellDay
                    key={index}
                    handleClick={() => handleCellClick(date)}
                    date={date}
                    areEqual={areEqual}
                    selectedDate={selectedDate}
                    status={dayInfo?.status}
                  >
                    <CellInformation date={date} dayInfo={dayInfo} />
                  </CellDay>
                ) : (
                  <CellDay key={index} />
                );
              })}
            </List>
          ))}
          <MonthList handleChangeMonth={handleChangeMonth} selectedMonth={selectedMonth} />
        </>
      ) : (
        <ListDays />
      )}
    </>
  );
};

export default Mobile;
