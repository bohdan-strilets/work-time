import { MdOutlineWork } from 'react-icons/md';
import { BiSolidTimeFive } from 'react-icons/bi';
import { BsCheckAll } from 'react-icons/bs';
import { CellInformationProps } from 'types/props/CellInformationProps';
import { StatusValue } from 'types/enums/StatusEnum';
import { WorkShiftNumberValue } from 'types/enums/WorkShiftNumber';
import {
  DayOfMonth,
  Container,
  DayStatus,
  LabelWrapper,
  Label,
  AdditionalHours,
  AdditionalHoursLabel,
} from '../CellInformation.styled';

const Desktop: React.FC<CellInformationProps> = ({ dayInfo, date }) => {
  return (
    <>
      <DayOfMonth>{date.getDate()}</DayOfMonth>
      {dayInfo?.status && (
        <Container>
          {dayInfo?.status === StatusValue.work && <DayStatus>Work</DayStatus>}
          {dayInfo?.status === StatusValue.dayOff && <DayStatus>Day off</DayStatus>}
          {dayInfo?.status === StatusValue.vacation && <DayStatus>Vacation</DayStatus>}
          {dayInfo?.status === StatusValue.sickLeave && <DayStatus>Sick leave</DayStatus>}
          {dayInfo.workShiftNumber === WorkShiftNumberValue.Shift1 && (
            <LabelWrapper>
              <MdOutlineWork />
              <Label>I</Label>
            </LabelWrapper>
          )}
          {dayInfo.workShiftNumber === WorkShiftNumberValue.Shift2 && (
            <LabelWrapper>
              <MdOutlineWork />
              <Label>II</Label>
            </LabelWrapper>
          )}
          {dayInfo?.numberHoursWorked > 0 && (
            <LabelWrapper>
              <BiSolidTimeFive />
              <Label>{dayInfo.numberHoursWorked}H</Label>
            </LabelWrapper>
          )}
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

export default Desktop;
