import { StatisticsByMonths } from 'types/types/StatisticsType';
import getRandomColor from 'utilities/getRandomColor';

export const useChart = () => {
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

  return { createDataForChart, getLabelForChart };
};

export default useChart;
