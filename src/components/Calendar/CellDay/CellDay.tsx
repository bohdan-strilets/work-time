import { CellDayProps } from "types/props/CellDayProps";
import { Cell } from "./CellDay.styled";

const CellDay: React.FC<CellDayProps> = ({
  handleClick,
  date,
  areEqual,
  selectedDate,
  children,
}) => {
  return (
    <Cell
      onClick={handleClick}
      date={date}
      areEqual={areEqual}
      selectedDate={selectedDate}
    >
      {children}
    </Cell>
  );
};

export default CellDay;
