import { Status } from 'types/enums/StatusEnum';

export type CellDayProps = {
  handleClick?: () => void;
  date?: Date;
  areEqual?: (a: Date, b: Date) => boolean | undefined;
  selectedDate?: Date | null;
  children?: React.ReactNode;
  status?: Status;
};

export type CellProps = Pick<CellDayProps, 'date' | 'areEqual' | 'selectedDate' | 'status'>;
