import { CellInformationProps } from 'types/props/CellInformationProps';
import {
  DayOfMonth,
  Container,
  AdditionalHours,
  AdditionalHoursLabel,
} from '../CellInformation.styled';

const Mobile: React.FC<CellInformationProps> = ({ dayInfo, date }) => {
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
