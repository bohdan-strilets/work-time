import { DayDataType } from 'types/types/DayType';

export type CalendarProps = {
  handlePrevMonth: () => void;
  selectedMonth: number;
  selectedYear: string | string[] | null;
  handleChangeYear: (year: string | string[]) => void;
  date: Date;
  handleNextMonth: () => void;
  backToCurrentDate: () => void;
  handleChangeCalendarType: (type: string | string[]) => void;
  calendarType: string | string[];
  getMonthDate: (year: number, month: number) => (undefined[] | number[] | Date[])[];
  getInformationForDay: (date: number | Date | undefined) => DayDataType | undefined;
  handleCellClick: (date: Date) => void;
  areEqual: (a: Date, b: Date) => boolean | undefined;
  selectedDate: Date | null;
  handleChangeMonth: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
