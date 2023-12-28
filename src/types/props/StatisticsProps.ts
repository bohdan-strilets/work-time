import { StatisticsByMonths, ValueByMonth } from 'types/types/StatisticsType';
import { DiagramData } from './DiagramProps';

export type StatisticsProps = {
  statisticsByMonths?: StatisticsByMonths;
  calculateStatisticsByMonth: (stats?: ValueByMonth[]) => number;
  isLoading: boolean;
  dataForChartGraph: {
    forDays: DiagramData[];
    forHours: DiagramData[];
    forShifts: DiagramData[];
    forMonay: DiagramData[];
  };
};

export type HookProps = Pick<StatisticsProps, 'statisticsByMonths'>;
