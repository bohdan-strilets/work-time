export type ControllersProps = {
  handlePrevMonth: () => void;
  selectedMonth: number;
  selectedYear: string | string[] | null;
  handleChangeYear: (year: string | string[]) => void;
  date: Date;
  handleNextMonth: () => void;
  backToCurrentDate: () => void;
  handleChangeCalendarType: (type: string | string[]) => void;
};

export type DateWindowProps = {
  width?: string;
  margin?: string;
};
