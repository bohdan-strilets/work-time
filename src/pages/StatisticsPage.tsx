import Statistics from 'components/Statistics';
import Chart from 'components/Statistics/Chart';
import Controllers from 'components/Statistics/Controllers';
import ModalWindow from 'components/ModalWindow';
import useModalWindow from 'hooks/useModalWindow';
import { month } from 'utilities/DefaultCalendarData';
import { useGetStatisticsQuery } from '../redux/statistics/statisticsApi';
import useChart from 'hooks/useChart';

const StatisticsPage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModalWindow();
  const { data, isLoading } = useGetStatisticsQuery();
  const statisticsByMonths = data?.data?.statisticsByMonths;
  const {
    getLabelForChart,
    getFilterDate,
    calculateStatisticsByMonth,
    barGraphData,
    dataForChartGraph,
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
      />
      {checkQueryParam(modalsName.chartByDays) && (
        <ModalWindow title="Statistics by days">
          <Chart
            title="Statistics by days"
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
        <ModalWindow title="Statistics by hours">
          <Chart
            title="Statistics by hours"
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
        <ModalWindow title="Work shift statistics">
          <Chart
            title="Statistics by shifts"
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
        <ModalWindow title="Money statistics">
          <Chart
            title="Statistics by moneys"
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
