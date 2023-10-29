export type CellDayProps = {
  handleClick?: () => void;
  date?: Date;
  areEqual?: (a: Date, b: Date) => boolean | undefined;
  selectedDate?: Date | null;
  children?: React.ReactNode;
};

export type CellProps = Pick<
  CellDayProps,
  "date" | "areEqual" | "selectedDate"
>;
