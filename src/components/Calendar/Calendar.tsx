import Media from 'react-media';
import ScreenWidth from 'utilities/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import { CalendarProps } from 'types/props/CalendarProps';

const Calendar: React.FC<CalendarProps> = ({
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
    <Media
      queries={{
        small: `(max-width: ${ScreenWidth.preTablet})`,
        medium: `(min-width: ${ScreenWidth.tablet}) and (max-width: ${ScreenWidth.preDesktop})`,
        large: `(min-width: ${ScreenWidth.desktop})`,
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <Mobile
              handlePrevMonth={handlePrevMonth}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              handleChangeYear={handleChangeYear}
              date={date}
              handleNextMonth={handleNextMonth}
              backToCurrentDate={backToCurrentDate}
              handleChangeCalendarType={handleChangeCalendarType}
              calendarType={calendarType}
              getMonthDate={getMonthDate}
              getInformationForDay={getInformationForDay}
              handleCellClick={handleCellClick}
              areEqual={areEqual}
              selectedDate={selectedDate}
              handleChangeMonth={handleChangeMonth}
            />
          )}
          {matches.medium && (
            <Tablet
              handlePrevMonth={handlePrevMonth}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              handleChangeYear={handleChangeYear}
              date={date}
              handleNextMonth={handleNextMonth}
              backToCurrentDate={backToCurrentDate}
              handleChangeCalendarType={handleChangeCalendarType}
              calendarType={calendarType}
              getMonthDate={getMonthDate}
              getInformationForDay={getInformationForDay}
              handleCellClick={handleCellClick}
              areEqual={areEqual}
              selectedDate={selectedDate}
              handleChangeMonth={handleChangeMonth}
            />
          )}
          {matches.large && (
            <Desktop
              handlePrevMonth={handlePrevMonth}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              handleChangeYear={handleChangeYear}
              date={date}
              handleNextMonth={handleNextMonth}
              backToCurrentDate={backToCurrentDate}
              handleChangeCalendarType={handleChangeCalendarType}
              calendarType={calendarType}
              getMonthDate={getMonthDate}
              getInformationForDay={getInformationForDay}
              handleCellClick={handleCellClick}
              areEqual={areEqual}
              selectedDate={selectedDate}
              handleChangeMonth={handleChangeMonth}
            />
          )}
        </>
      )}
    </Media>
  );
};

export default Calendar;
