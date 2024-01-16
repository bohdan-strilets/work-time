import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StatisticsByMonths } from 'types/types/StatisticsType';
import getRandomColor from 'utilities/getRandomColor';
import { FilterDateType } from 'types/types/FilterDateType';
import { ValueByMonth } from 'types/types/StatisticsType';
import { HookProps } from 'types/props/StatisticsProps';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { StatisticsLngKeys } from 'types/locales/StatisticsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

export const useChart = ({ statisticsByMonths }: HookProps) => {
  const [startFilter, setStartFilter] = useState<null | FilterDateType>(null);
  const [endFilter, setEndFilter] = useState<null | FilterDateType>(null);
  const { t } = useTranslation();

  const getFilterDate = (start: FilterDateType, end: FilterDateType) => {
    setStartFilter(start);
    setEndFilter(end);
  };

  const createDataForChart = (
    label: string,
    fieldName: keyof StatisticsByMonths,
    statisticsByMonths?: StatisticsByMonths,
    firstMonth?: number,
    lastMonth?: number,
    year?: string,
  ) => {
    const stats = statisticsByMonths?.[fieldName];
    const filteredStats = stats
      ?.filter(item => {
        if (firstMonth && lastMonth) {
          return item.month >= firstMonth && item.month <= lastMonth && item.year === year;
        }
        return stats;
      })
      .sort((a, b) => a.month - b.month);

    const data = filteredStats?.map(i => i.value.reduce((acc, j) => Math.round(acc + j.value), 0));
    const result = {
      label,
      data,
      backgroundColor: getRandomColor(0.8),
    };

    return result;
  };

  const getLabelForChart = (
    month: string[],
    fieldNames: Array<keyof StatisticsByMonths>,
    statisticsByMonths?: StatisticsByMonths,
  ) => {
    const allMonthNumbers = fieldNames.map(name => statisticsByMonths?.[name]?.map(i => i.month));
    const uniqueMonthNumbers = allMonthNumbers.reduce((acc, arr) => {
      arr?.forEach(num => {
        if (acc && !acc.includes(num)) acc.push(num);
      });
      return acc;
    }, []);
    const sortedMonth = uniqueMonthNumbers?.sort((a, b) => a - b);
    const filteredMonths = month.filter((_, index) => sortedMonth?.includes(index + 1));
    return filteredMonths;
  };

  const calculateStatisticsByMonth = (stats?: ValueByMonth[]): number => {
    if (startFilter && endFilter) {
      const filtredStats = stats?.filter(item => {
        const itemYear = parseInt(item.year, 10);
        const startYear = parseInt(startFilter.year, 10);
        const endYear = parseInt(endFilter.year, 10);

        return (
          (itemYear > startYear || (itemYear === startYear && item.month >= startFilter.month)) &&
          (itemYear < endYear || (itemYear === endYear && item.month <= endFilter.month))
        );
      });
      const arrayValuesForEachMonth = filtredStats?.map(i =>
        i.value.reduce((acc, j) => j.value + acc, 0),
      );
      const result = arrayValuesForEachMonth?.reduce((acc, i) => acc + i, 0);
      return Math.round(result ?? 0);
    }

    const arrayValuesForEachMonth = stats?.map(i => i.value.reduce((acc, j) => j.value + acc, 0));
    const result = arrayValuesForEachMonth?.reduce((acc, i) => acc + i, 0);
    return Math.round(result ?? 0);
  };

  const barGraphData = {
    forDays: [
      createDataForChart(
        t(CommonLngKeys.Work, { ns: LocalesKeys.common }),
        'numberWorkingDays',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.DayOff, { ns: LocalesKeys.common }),
        'numberDaysOff',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.Vacation, { ns: LocalesKeys.common }),
        'numberVacationDays',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.SickLeave, { ns: LocalesKeys.common }),
        'numberSickDays',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.Additional, { ns: LocalesKeys.common }),
        'numberAdditionalWorkingDays',
        statisticsByMonths,
      ),
    ],
    forHours: [
      createDataForChart(
        t(CommonLngKeys.Work, { ns: LocalesKeys.common }),
        'numberWorkingHours',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.DayOff, { ns: LocalesKeys.common }),
        'numberFreeHours',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.Vacation, { ns: LocalesKeys.common }),
        'numberVacationHours',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.SickLeave, { ns: LocalesKeys.common }),
        'numberSickHours',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.Additional, { ns: LocalesKeys.common }),
        'numberAdditionalWorkingHours',
        statisticsByMonths,
      ),
    ],
    forShifts: [
      createDataForChart(
        t(StatisticsLngKeys.FirstShifts, { ns: LocalesKeys.statistics }),
        'numberFirstShifts',
        statisticsByMonths,
      ),
      createDataForChart(
        t(StatisticsLngKeys.SecondShifts, { ns: LocalesKeys.statistics }),
        'numberSecondShifts',
        statisticsByMonths,
      ),
      createDataForChart(
        t(StatisticsLngKeys.NightHours, { ns: LocalesKeys.statistics }),
        'numberNightHours',
        statisticsByMonths,
      ),
    ],
    forMoney: [
      createDataForChart(
        t(CommonLngKeys.WorkDayGross, { ns: LocalesKeys.common }),
        'grossAmountMoneyForWorkingDays',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.WorkDayNet, { ns: LocalesKeys.common }),
        'nettoAmountMoneyForWorkingDays',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.VacationDayGross, { ns: LocalesKeys.common }),
        'grossAmountMoneyForVacationDays',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.VacationDayNet, { ns: LocalesKeys.common }),
        'nettoAmountMoneyForVacationDays',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.SickDayGross, { ns: LocalesKeys.common }),
        'grossAmountMoneyForSickDays',
        statisticsByMonths,
      ),
      createDataForChart(
        t(CommonLngKeys.SickDayNet, { ns: LocalesKeys.common }),
        'nettoAmountMoneyForSickDays',
        statisticsByMonths,
      ),
    ],
  };

  const dataForChartGraph = {
    forDays: [
      {
        label: 'Amount',
        data: [
          calculateStatisticsByMonth(statisticsByMonths?.numberWorkingDays),
          calculateStatisticsByMonth(statisticsByMonths?.numberDaysOff),
          calculateStatisticsByMonth(statisticsByMonths?.numberVacationDays),
          calculateStatisticsByMonth(statisticsByMonths?.numberSickDays),
          calculateStatisticsByMonth(statisticsByMonths?.numberAdditionalWorkingDays),
        ],
        backgroundColor: [
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
        ],
        borderWidth: 0,
      },
    ],
    forHours: [
      {
        label: 'Amount',
        data: [
          calculateStatisticsByMonth(statisticsByMonths?.numberWorkingHours),
          calculateStatisticsByMonth(statisticsByMonths?.numberFreeHours),
          calculateStatisticsByMonth(statisticsByMonths?.numberVacationHours),
          calculateStatisticsByMonth(statisticsByMonths?.numberSickHours),
          calculateStatisticsByMonth(statisticsByMonths?.numberAdditionalWorkingHours),
        ],
        backgroundColor: [
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
        ],
        borderWidth: 0,
      },
    ],
    forShifts: [
      {
        label: 'Amount',
        data: [
          calculateStatisticsByMonth(statisticsByMonths?.numberFirstShifts),
          calculateStatisticsByMonth(statisticsByMonths?.numberSecondShifts),
          calculateStatisticsByMonth(statisticsByMonths?.numberNightHours),
        ],
        backgroundColor: [getRandomColor(0.5), getRandomColor(0.5), getRandomColor(0.5)],
        borderWidth: 0,
      },
    ],
    forMonay: [
      {
        label: 'Amount',
        data: [
          calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForWorkingDays),
          calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForWorkingDays),
          calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForVacationDays),
          calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForVacationDays),
          calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForSickDays),
          calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForSickDays),
        ],
        backgroundColor: [
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
          getRandomColor(0.5),
        ],
        borderWidth: 0,
      },
    ],
  };

  const labelsForDiagramByStatus = [
    t(CommonLngKeys.Work, { ns: LocalesKeys.common }),
    t(CommonLngKeys.DayOff, { ns: LocalesKeys.common }),
    t(CommonLngKeys.Vacation, { ns: LocalesKeys.common }),
    t(CommonLngKeys.SickLeave, { ns: LocalesKeys.common }),
    t(CommonLngKeys.Additional, { ns: LocalesKeys.common }),
  ];

  const labelsForDiagramByShifts = [
    t(StatisticsLngKeys.FirstShifts, { ns: LocalesKeys.statistics }),
    t(StatisticsLngKeys.SecondShifts, { ns: LocalesKeys.statistics }),
    t(StatisticsLngKeys.NightHours, { ns: LocalesKeys.statistics }),
  ];

  return {
    createDataForChart,
    getLabelForChart,
    getFilterDate,
    startFilter,
    endFilter,
    calculateStatisticsByMonth,
    barGraphData,
    dataForChartGraph,
    labelsForDiagramByStatus,
    labelsForDiagramByShifts,
  };
};

export default useChart;
