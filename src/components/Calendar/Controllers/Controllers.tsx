import Media from 'react-media';
import ScreenWidth from 'utilities/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import { ControllersProps } from 'types/props/ControllersProps';

const Controllers: React.FC<ControllersProps> = ({
  handlePrevMonth,
  selectedMonth,
  selectedYear,
  handleChangeYear,
  date,
  handleNextMonth,
  backToCurrentDate,
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
            />
          )}
        </>
      )}
    </Media>
  );
};

export default Controllers;
