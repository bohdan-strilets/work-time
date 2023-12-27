import { useState } from 'react';
import { StatisticsByMonths } from 'types/types/StatisticsType';
import getRandomColor from 'utilities/getRandomColor';
import { FilterDateType } from 'types/types/FilterDateType';
import { ValueByMonth } from 'types/types/StatisticsType';

export const useChart = () => {
  const [startFilter, setStartFilter] = useState<null | FilterDateType>(null);
  const [endFilter, setEndFilter] = useState<null | FilterDateType>(null);

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

  return {
    createDataForChart,
    getLabelForChart,
    getFilterDate,
    startFilter,
    endFilter,
    calculateStatisticsByMonth,
  };
};

export default useChart;
