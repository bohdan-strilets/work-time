import { CellDayProps } from "types/props/CellDayProps";
import { Cell } from "./CellDay.styled";

const CellDay: React.FC<CellDayProps> = ({
  handleClick,
  date,
  areEqual,
  selectedDate,
  children,
  status,
}) => {
  return (
    <Cell
      onClick={handleClick}
      date={date}
      areEqual={areEqual}
      selectedDate={selectedDate}
      status={status}
    >
      {children}
    </Cell>
  );
};

export default CellDay;
