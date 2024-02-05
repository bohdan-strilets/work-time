import { useTranslation } from 'react-i18next';
import { BsCheckAll } from 'react-icons/bs';
import { HiMiniClipboardDocumentList } from 'react-icons/hi2';
import { CellInformationProps } from 'types/props/CellInformationProps';
import { Status } from 'types/enums/StatusEnum';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import {
  DayOfMonth,
  TodoStatus,
  Container,
  DayStatus,
  AdditionalHours,
  AdditionalHoursLabel,
} from '../CellInformation.styled';

const Tablet: React.FC<CellInformationProps> = ({ dayInfo, date }) => {
  const { t } = useTranslation();

  return (
    <>
      <DayOfMonth>
        <TodoStatus>
          {dayInfo && dayInfo.areTaskToday && (
            <HiMiniClipboardDocumentList size={16} color="var(--black-color)" />
          )}
        </TodoStatus>
        {date.getDate()}
      </DayOfMonth>
      {dayInfo?.status && (
        <Container>
          <DayStatus>
            {dayInfo?.status === Status.work && t(CommonLngKeys.Work, { ns: LocalesKeys.common })}
            {dayInfo?.status === Status.dayOff &&
              t(CommonLngKeys.DayOff, { ns: LocalesKeys.common })}
            {dayInfo?.status === Status.vacation &&
              t(CommonLngKeys.Vacation, { ns: LocalesKeys.common })}
            {dayInfo?.status === Status.sickLeave &&
              t(CommonLngKeys.SickLeave, { ns: LocalesKeys.common })}
          </DayStatus>
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
