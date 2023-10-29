export type ControllersProps = {
  handlePrevMonth: () => void;
  selectedMonth: number;
  selectedYear: number;
  handleChangeYear: () => void;
  yearSelect: React.MutableRefObject<HTMLSelectElement | null>;
  date: Date;
  handleNextMonth: () => void;
};
