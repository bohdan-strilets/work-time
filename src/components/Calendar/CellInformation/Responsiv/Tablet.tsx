import { BsCheckAll } from 'react-icons/bs';
import { CellInformationProps } from 'types/props/CellInformationProps';
import { StatusValue } from 'types/enums/StatusEnum';
import {
  DayOfMonth,
  Container,
  DayStatus,
  AdditionalHours,
  AdditionalHoursLabel,
} from '../CellInformation.styled';

const Tablet: React.FC<CellInformationProps> = ({ dayInfo, date }) => {
  return (
    <>
      <DayOfMonth>{date.getDate()}</DayOfMonth>
      {dayInfo?.status && (
        <Container>
          {dayInfo?.status === StatusValue.work && <DayStatus>Work</DayStatus>}
          {dayInfo?.status === StatusValue.dayOff && <DayStatus>Day off</DayStatus>}
          {dayInfo?.status === StatusValue.vacation && <DayStatus>Vacation</DayStatus>}
          {dayInfo?.status === StatusValue.sickLeave && <DayStatus>Sick leave</DayStatus>}
          {dayInfo?.additionalHours && (
            <AdditionalHours>
              <AdditionalHoursLabel>
                <BsCheckAll size={18} color="var(--white-color)" />
              </AdditionalHoursLabel>
            </AdditionalHours>
          )}
        </Container>
      )}
    </>
  );
};

export default Tablet;
