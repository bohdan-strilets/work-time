import { useTranslation } from 'react-i18next';
import { MdOutlineWork } from 'react-icons/md';
import { BiSolidTimeFive } from 'react-icons/bi';
import { HiMiniClipboardDocumentList } from 'react-icons/hi2';
import { BsCheckAll } from 'react-icons/bs';
import { CellInformationProps } from 'types/props/CellInformationProps';
import { Status } from 'types/enums/StatusEnum';
import { WorkShiftNumber } from 'types/enums/WorkShiftNumber';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import {
  DayOfMonth,
  TodoStatus,
  Container,
  DayStatus,
  LabelWrapper,
  Label,
  AdditionalHours,
  AdditionalHoursLabel,
} from '../CellInformation.styled';

const Desktop: React.FC<CellInformationProps> = ({ dayInfo, date }) => {
  const { t } = useTranslation();

  return (
    <>
      <DayOfMonth>
        <TodoStatus>
          {dayInfo && dayInfo.areTaskToday && (
            <HiMiniClipboardDocumentList size={18} color="var(--black-color)" />
          )}
        </TodoStatus>
        {date.getDate()}
      </DayOfMonth>
      {dayInfo?.status && (
        <Container>
          {dayInfo?.status === Status.work && (
            <DayStatus>{t(CommonLngKeys.Work, { ns: LocalesKeys.common })}</DayStatus>
          )}
          {dayInfo?.status === Status.dayOff && (
            <DayStatus>{t(CommonLngKeys.DayOff, { ns: LocalesKeys.common })}</DayStatus>
          )}
          {dayInfo?.status === Status.vacation && (
            <DayStatus>{t(CommonLngKeys.Vacation, { ns: LocalesKeys.common })}</DayStatus>
          )}
          {dayInfo?.status === Status.sickLeave && (
            <DayStatus>{t(CommonLngKeys.SickLeave, { ns: LocalesKeys.common })}</DayStatus>
          )}
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
