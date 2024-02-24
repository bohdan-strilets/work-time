import Media from 'react-media';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import { DayInfoProps } from 'types/props/DayInfoProps';

const DayInfo: React.FC<DayInfoProps> = ({
  status,
  numberHoursWorked,
  date,
  time,
  workShiftNumber,
  additionalHours,
  dateTransform,
  dayInfoId,
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
              status={status}
              numberHoursWorked={numberHoursWorked}
              date={date}
              time={time}
              workShiftNumber={workShiftNumber}
              additionalHours={additionalHours}
              dateTransform={dateTransform}
              dayInfoId={dayInfoId}
            />
          )}
          {matches.medium && (
            <Tablet
              status={status}
              numberHoursWorked={numberHoursWorked}
              date={date}
              time={time}
              workShiftNumber={workShiftNumber}
              additionalHours={additionalHours}
              dateTransform={dateTransform}
              dayInfoId={dayInfoId}
            />
          )}
          {matches.large && (
            <Desktop
              status={status}
              numberHoursWorked={numberHoursWorked}
              date={date}
              time={time}
              workShiftNumber={workShiftNumber}
              additionalHours={additionalHours}
              dateTransform={dateTransform}
              dayInfoId={dayInfoId}
            />
          )}
        </>
      )}
    </Media>
  );
};

export default DayInfo;
