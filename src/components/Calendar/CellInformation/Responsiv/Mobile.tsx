import { CellInformationProps } from 'types/props/CellInformationProps';
import { useAppSelector } from 'hooks/useAppSelector';
import { getTheme } from '../../../../redux/settings/settingsSelectors';
import {
  DayOfMonth,
  Container,
  AdditionalHours,
  AdditionalHoursLabel,
} from '../CellInformation.styled';

const Mobile: React.FC<CellInformationProps> = ({ dayInfo, date }) => {
  const theme = useAppSelector(getTheme);

  return (
    <>
      <DayOfMonth>{date.getDate()}</DayOfMonth>
      {dayInfo?.status && (
        <Container>
          {dayInfo?.additionalHours && (
            <AdditionalHours>
              <AdditionalHoursLabel />
            </AdditionalHours>
          )}
        </Container>
      )}
    </>
  );
};

export default Mobile;
