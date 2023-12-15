import Statistics from 'components/Statistics';
import Chart from 'components/Statistics/Chart';
import ModalWindow from 'components/ModalWindow';
import useModalWindow from 'hooks/useModalWindow';
import { DataByMonth } from 'components/Statistics/data';
import { month } from 'utilities/DefaultCalendarData';
import getRandomColor from 'utilities/getRandomColor';

const StatisticsPage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModalWindow();

  const settingsForDays = {
    title: 'Statistics by day for the period from January to December 2023',
    labels: month,
    datasets: [
      {
        label: 'Working',
        data: DataByMonth.numberWorkingDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Day off',
        data: DataByMonth.numberDaysOff.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Vacation',
        data: DataByMonth.numberVacationDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Sick',
        data: DataByMonth.numberSickDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Additional',
        data: DataByMonth.numberAdditionalWorkingDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
    ],
  };

  const settingsForHours = {
    title: 'Statistics by hour for the period from January to December 2023',
    labels: month,
    datasets: [
      {
        label: 'Working',
        data: DataByMonth.numberWorkingHours.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Day off',
        data: DataByMonth.numberFreeHours.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Vacation',
        data: DataByMonth.numberVacationHours.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Sick',
        data: DataByMonth.numberSickHours.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Additional',
        data: DataByMonth.numberAdditionalWorkingHours.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
    ],
  };

  const settingsForShifts = {
    title: 'Statistics by shifts for the period from January to December 2023',
    labels: month,
    datasets: [
      {
        label: 'First shift',
        data: DataByMonth.numberFirstShifts.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Second shift',
        data: DataByMonth.numberSecondShifts.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Night hours',
        data: DataByMonth.numberNightHours.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
    ],
  };

  const settingsForMoney = {
    title: 'Statistics by money for the period from January to December 2023',
    labels: month,
    datasets: [
      {
        label: 'Work day gross',
        data: DataByMonth.grossAmountMoneyForWorkingDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Work day netto',
        data: DataByMonth.nettoAmountMoneyForWorkingDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Vacation day brutto',
        data: DataByMonth.grossAmountMoneyForVacationDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Vacation day netto',
        data: DataByMonth.nettoAmountMoneyForVacationDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Sick day brutto',
        data: DataByMonth.grossAmountMoneyForSickDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
      {
        label: 'Sick day netto',
        data: DataByMonth.nettoAmountMoneyForSickDays.map(item => item.value),
        backgroundColor: getRandomColor(0.5),
      },
    ],
  };

  return (
    <>
      <Statistics />
      {checkQueryParam(modalsName.chartByDays) && (
        <ModalWindow title="Statistics by day">
          <Chart settings={settingsForDays} />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByHours) && (
        <ModalWindow title="Statistics by hour">
          <Chart settings={settingsForHours} />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByShifts) && (
        <ModalWindow title="Work shift statistics">
          <Chart settings={settingsForShifts} />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.chartByMoney) && (
        <ModalWindow title="Money statistics">
          <Chart settings={settingsForMoney} />
        </ModalWindow>
      )}
    </>
  );
};

export default StatisticsPage;
