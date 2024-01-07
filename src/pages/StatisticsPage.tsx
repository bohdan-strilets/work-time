import { useTranslation } from 'react-i18next';
import Statistics from 'components/Statistics';
import Chart from 'components/Statistics/Chart';
import Controllers from 'components/Statistics/Controllers';
import ModalWindow from 'components/ModalWindow';
import useModalWindow from 'hooks/useModalWindow';
import { month } from 'utilities/DefaultCalendarData';
import { useGetStatisticsQuery } from '../redux/statistics/statisticsApi';
import { StatisticsLngKeys } from 'types/locales/StatisticsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import useChart from 'hooks/useChart';

const StatisticsPage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModalWindow();
  const { data, isLoading } = useGetStatisticsQuery();
  const { t } = useTranslation();
  const statisticsByMonths = data?.data?.statisticsByMonths;
  const {
    getLabelForChart,
    getFilterDate,
    calculateStatisticsByMonth,
    barGraphData,
    dataForChartGraph,
    labelsForDiagramByShifts,
    labelsForDiagramByStatus,
  } = useChart({
    statisticsByMonths,
  });

  return (
    <>
      <Controllers getFilterDate={getFilterDate} />
      <Statistics
        statisticsByMonths={statisticsByMonths}
        calculateStatisticsByMonth={calculateStatisticsByMonth}
        isLoading={isLoading}
        dataForChartGraph={dataForChartGraph}
        labelsForDiagramByShifts={labelsForDiagramByShifts}
        labelsForDiagramByStatus={labelsForDiagramByStatus}
      />
      {checkQueryParam(modalsName.chartByDays) && (
        <ModalWindow title={t(StatisticsLngKeys.StatisticsByDays, { ns: LocalesKeys.statistics })}>
          <Chart
            labels={getLabelForChart(
              month,
              [
                'numberWorkingDays',
                'numberDaysOff',
                'numberVacationDays',
                'numberSickDays',
                'numberAdditionalWorkingDays',
              ],
              statisticsByMonths,
            )}
            datasets={barGraphData.forDays}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByHours) && (
        <ModalWindow title={t(StatisticsLngKeys.StatisticsByHours, { ns: LocalesKeys.statistics })}>
          <Chart
            labels={getLabelForChart(
              month,
              [
                'numberWorkingHours',
                'numberFreeHours',
                'numberVacationHours',
                'numberSickHours',
                'numberAdditionalWorkingHours',
              ],
              statisticsByMonths,
            )}
            datasets={barGraphData.forHours}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByShifts) && (
        <ModalWindow
          title={t(StatisticsLngKeys.WorkShiftStatistics, { ns: LocalesKeys.statistics })}
        >
          <Chart
            labels={getLabelForChart(
              month,
              ['numberFirstShifts', 'numberSecondShifts', 'numberNightHours'],
              statisticsByMonths,
            )}
            datasets={barGraphData.forShifts}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByMoney) && (
        <ModalWindow title={t(StatisticsLngKeys.MoneyStatistics, { ns: LocalesKeys.statistics })}>
          <Chart
            labels={getLabelForChart(
              month,
              [
                'grossAmountMoneyForWorkingDays',
                'nettoAmountMoneyForWorkingDays',
                'grossAmountMoneyForVacationDays',
                'nettoAmountMoneyForVacationDays',
                'grossAmountMoneyForSickDays',
                'nettoAmountMoneyForSickDays',
              ],
              statisticsByMonths,
            )}
            datasets={barGraphData.forMoney}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default StatisticsPage;
