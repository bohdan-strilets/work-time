import { CellDayProps } from 'types/props/CellDayProps';
import { useAppSelector } from 'hooks/useAppSelector';
import { getTheme } from '../../../redux/settings/settingsSelectors';
import { Cell, Content } from './CellDay.styled';

const CellDay: React.FC<CellDayProps> = ({
  handleClick,
  date,
  areEqual,
  selectedDate,
  children,
  status,
}) => {
  const theme = useAppSelector(getTheme);

  return (
    <Cell
      onClick={handleClick}
      date={date}
      areEqual={areEqual}
      selectedDate={selectedDate}
      status={status}
    >
      {status ? <Content theme={theme}>{children}</Content> : <>{children}</>}
    </Cell>
  );
};

export default CellDay;
