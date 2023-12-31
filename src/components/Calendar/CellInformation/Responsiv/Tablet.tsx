import { BsCheckAll } from 'react-icons/bs';
import { CellInformationProps } from 'types/props/CellInformationProps';
import { Status } from 'types/enums/StatusEnum';
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
          {dayInfo?.status === Status.work && <DayStatus>Work</DayStatus>}
          {dayInfo?.status === Status.dayOff && <DayStatus>Day off</DayStatus>}
          {dayInfo?.status === Status.vacation && <DayStatus>Vacation</DayStatus>}
          {dayInfo?.status === Status.sickLeave && <DayStatus>Sick leave</DayStatus>}
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
