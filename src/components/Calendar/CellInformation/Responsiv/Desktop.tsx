import { MdOutlineWork } from 'react-icons/md';
import { BiSolidTimeFive } from 'react-icons/bi';
import { BsCheckAll } from 'react-icons/bs';
import { CellInformationProps } from 'types/props/CellInformationProps';
import { Status } from 'types/enums/StatusEnum';
import { WorkShiftNumber } from 'types/enums/WorkShiftNumber';
import { useAppSelector } from 'hooks/useAppSelector';
import { getTheme } from '../../../../redux/settings/settingsSelectors';
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
  const theme = useAppSelector(getTheme);

  return (
    <>
      <DayOfMonth>{date.getDate()}</DayOfMonth>
      {dayInfo?.status && (
        <Container>
          {dayInfo?.status === Status.work && <DayStatus theme={theme}>Work</DayStatus>}
          {dayInfo?.status === Status.dayOff && <DayStatus theme={theme}>Day off</DayStatus>}
          {dayInfo?.status === Status.vacation && <DayStatus theme={theme}>Vacation</DayStatus>}
          {dayInfo?.status === Status.sickLeave && <DayStatus theme={theme}>Sick leave</DayStatus>}
          {dayInfo.workShiftNumber === WorkShiftNumber.Shift1 && (
            <LabelWrapper>
              <MdOutlineWork />
              <Label>I</Label>
            </LabelWrapper>
          )}
          {dayInfo.workShiftNumber === WorkShiftNumber.Shift2 && (
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
