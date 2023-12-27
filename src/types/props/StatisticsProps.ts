import { StatisticsByMonths, ValueByMonth } from 'types/types/StatisticsType';

export type StatisticsProps = {
  statisticsByMonths?: StatisticsByMonths;
  calculateStatisticsByMonth: (stats?: ValueByMonth[]) => number;
  isLoading: boolean;
};
