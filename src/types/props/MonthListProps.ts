export type MonthListProps = {
  handleChangeMonth: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  selectedMonth: number;
};
