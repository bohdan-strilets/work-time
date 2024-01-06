import { StatisticsByMonths, ValueByMonth } from 'types/types/StatisticsType';
import { DiagramData } from './DiagramProps';
import { ThemeEnum } from 'types/enums/ThemeEnum';

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
  labelsForDiagramByShifts: string[];
  labelsForDiagramByStatus: string[];
};

export type HookProps = Pick<StatisticsProps, 'statisticsByMonths'>;

export type ItemProps = {
  theme: ThemeEnum;
};
