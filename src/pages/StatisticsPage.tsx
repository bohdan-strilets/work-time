import Statistics from 'components/Statistics';
import Chart from 'components/Statistics/Chart';
import ModalWindow from 'components/ModalWindow';
import useModalWindow from 'hooks/useModalWindow';
import { month } from 'utilities/DefaultCalendarData';
import { useGetStatisticsQuery } from '../redux/statistics/statisticsApi';
import useChart from 'hooks/useChart';

const StatisticsPage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModalWindow();
  const { data, isLoading } = useGetStatisticsQuery();
  const generalStatistics = data?.data?.generalStatistics;
  const statisticsByMonths = data?.data?.statisticsByMonths;
  const { createDataForChart, getLabelForChart } = useChart();

  const dataForDays = [
    createDataForChart('Working', 'numberWorkingDays', statisticsByMonths),
    createDataForChart('Day off', 'numberDaysOff', statisticsByMonths),
    createDataForChart('Vacation', 'numberVacationDays', statisticsByMonths),
    createDataForChart('Sick', 'numberSickDays', statisticsByMonths),
    createDataForChart('Additional', 'numberAdditionalWorkingDays', statisticsByMonths),
  ];

  const dataForHours = [
    createDataForChart('Working', 'numberWorkingHours', statisticsByMonths),
    createDataForChart('Day off', 'numberFreeHours', statisticsByMonths),
    createDataForChart('Vacation', 'numberVacationHours', statisticsByMonths),
    createDataForChart('Sick', 'numberSickHours', statisticsByMonths),
    createDataForChart('Additional', 'numberAdditionalWorkingHours', statisticsByMonths),
  ];

  const dataForShifts = [
    createDataForChart('First shifts', 'numberFirstShifts', statisticsByMonths),
    createDataForChart('Second shifts', 'numberSecondShifts', statisticsByMonths),
    createDataForChart('Night hours', 'numberNightHours', statisticsByMonths),
  ];

  const dataForMoney = [
    createDataForChart('Work day gross', 'grossAmountMoneyForWorkingDays', statisticsByMonths),
    createDataForChart('Work day netto', 'nettoAmountMoneyForWorkingDays', statisticsByMonths),
    createDataForChart('Vacation day gross', 'grossAmountMoneyForVacationDays', statisticsByMonths),
    createDataForChart('Vacation day netto', 'nettoAmountMoneyForVacationDays', statisticsByMonths),
    createDataForChart('Sick day gross', 'grossAmountMoneyForSickDays', statisticsByMonths),
    createDataForChart('Sick day netto', 'nettoAmountMoneyForSickDays', statisticsByMonths),
  ];

  return (
    <>
      <Statistics generalStatistics={generalStatistics} isLoading={isLoading} />
      {checkQueryParam(modalsName.chartByDays) && (
        <ModalWindow title="Statistics by day">
          <Chart
            title="Statistics by days 2023"
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
            datasets={dataForDays}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByHours) && (
        <ModalWindow title="Statistics by hour">
          <Chart
            title="Statistics by hour for 2023"
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
            datasets={dataForHours}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByShifts) && (
        <ModalWindow title="Work shift statistics">
          <Chart
            title="Statistics by shifts 2023"
            labels={getLabelForChart(
              month,
              ['numberFirstShifts', 'numberSecondShifts', 'numberNightHours'],
              statisticsByMonths,
            )}
            datasets={dataForShifts}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByMoney) && (
        <ModalWindow title="Money statistics">
          <Chart
            title="Statistics by money 2023"
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
            datasets={dataForMoney}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default StatisticsPage;
