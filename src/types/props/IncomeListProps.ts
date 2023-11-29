import { DayInfoProps } from './DayInfoProps';
import { Result } from 'types/types/AdditionalHoursType';

export type IncomeListProps = Pick<
  DayInfoProps,
  'workShiftNumber' | 'numberHoursWorked' | 'time'
> & {
  additional: Result | null;
  calculateNightHours: (timeRange: string) => number;
  startTime: number;
  startNightTime: number;
};
