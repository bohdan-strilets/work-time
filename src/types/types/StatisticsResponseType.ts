import { StatisticsType } from './StatisticsType';

export type StatisticsResponseType<S = StatisticsType> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  data?: S;
};
