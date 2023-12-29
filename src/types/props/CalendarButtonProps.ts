export type CalendarButtonProps = {
  handleClichk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode | string;
  value?: string | number;
  background?: string;
  color?: string;
  width?: string;
};

export type ButtonProps = Pick<CalendarButtonProps, 'background' | 'color' | 'width'>;
