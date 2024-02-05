import { useTranslation } from 'react-i18next';
import { BsCheckAll } from 'react-icons/bs';
import { CellInformationProps } from 'types/props/CellInformationProps';
import { Status } from 'types/enums/StatusEnum';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import {
  DayOfMonth,
  Container,
  DayStatus,
  AdditionalHours,
  AdditionalHoursLabel,
} from '../CellInformation.styled';

const Tablet: React.FC<CellInformationProps> = ({ dayInfo, date }) => {
  const { t } = useTranslation();

  return (
    <>
      <DayOfMonth>{date.getDate()}</DayOfMonth>
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
