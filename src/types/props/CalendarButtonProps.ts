export type CalendarButtonProps = {
  handleClichk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode | string;
  value?: string | number;
  selectedMonth?: number;
  index?: number;
};

export type ButtonProps = Pick<
  CalendarButtonProps,
  "selectedMonth" | "index"
> & {
  width?: string;
};
