import { DayDataType } from 'types/types/DayType';

export type DayInfoProps = Pick<
  DayDataType,
  'status' | 'numberHoursWorked' | 'time' | 'workShiftNumber' | 'additionalHours'
> & { date: Date | null; dateTransform: (date: Date) => string };

export type ContainerProps = {
  margin?: string;
  justifyContent?: string;
  displayBlock?: boolean;
  alignItems?: string;
};

export type TextProps = {
  fontSize?: string;
  fontWeight?: number;
  margin?: string;
  color?: string;
};

export type ExtraTimeStatusProps = Pick<DayInfoProps, 'additionalHours'>;

export type HookProps = Pick<
  DayInfoProps,
  'additionalHours' | 'time' | 'numberHoursWorked' | 'workShiftNumber' | 'status'
>;
