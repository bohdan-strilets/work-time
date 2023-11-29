export type ControllersProps = {
  handlePrevMonth: () => void;
  selectedMonth: number;
  selectedYear: string | string[] | null;
  handleChangeYear: (year: string | string[]) => void;
  date: Date;
  handleNextMonth: () => void;
};
