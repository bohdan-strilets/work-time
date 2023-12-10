export type DateInputProps = {
  name: string;
  label?: string;
  selected?: Date | null;
  onChange(date: Date | null, e: React.SyntheticEvent<any, Event> | undefined): void;
  width: string;
  height: string;
  margin: string;
};

export type WrapperProps = Pick<DateInputProps, 'width' | 'height' | 'margin'>;
