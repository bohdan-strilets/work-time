import { DayInfoType } from './DayType';

export type CalendarResponseType<D = DayInfoType | DayInfoType[]> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  data?: D;
};
