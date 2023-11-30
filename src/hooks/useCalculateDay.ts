import { useEffect, useState, useCallback } from 'react';
import useModalWindow from './useModalWindow';
import { Result } from 'types/types/AdditionalHoursType';
import { HookProps } from 'types/props/DayInfoProps';
import GetNightRate from 'utilities/GetNightRate';
import { WorkShiftNumber } from 'types/enums/WorkShiftNumber';
import { Status } from 'types/enums/StatusEnum';

const useCalculateDay = ({
  additionalHours,
  time,
  numberHoursWorked,
  workShiftNumber,
  status,
}: HookProps) => {
  const [additional, setAdditional] = useState<Result | null>(null);
  const [earningForDay, setEarningForDay] = useState(0);
  const { modalsName, openModal } = useModalWindow();

  const [startStr, endStr] = time.split('-');
  const START_TIME = parseInt(startStr.split(':')[0], 10);
  const END_TIME = parseInt(endStr.split(':')[0], 10);
  const START_NIGHT_TIME = 22;
  const MIDNIGHT = 24;
  const END_NIGHT_TIME = 6;
  const FIFTY_PERCENT = '50%';
  const ONE_HUNDRED_PERCENT = '100%';

  const calculateNightHours = useCallback((): number => {
    if (START_TIME < START_NIGHT_TIME && numberHoursWorked < 4) {
      return 0;
    }
    if (END_TIME < MIDNIGHT && START_TIME < MIDNIGHT && numberHoursWorked < 4) {
      return MIDNIGHT - START_NIGHT_TIME;
    }
    return MIDNIGHT - START_NIGHT_TIME + END_TIME;
  }, [END_TIME, START_TIME, numberHoursWorked]);

  const calculateAdditionalHours = useCallback((): Result => {
    const totalHours = END_TIME < START_TIME ? 24 + END_TIME - START_TIME : END_TIME - START_TIME;

    const result: Result = {
      [FIFTY_PERCENT]: { timeRange: '', numberHours: 0 },
      [ONE_HUNDRED_PERCENT]: { timeRange: '', numberHours: 0 },
    };

    if (START_TIME >= END_NIGHT_TIME && END_TIME <= START_NIGHT_TIME && END_TIME >= START_TIME) {
      result[FIFTY_PERCENT] = { timeRange: time, numberHours: totalHours };
      return result;
    } else {
      const hours = START_NIGHT_TIME - START_TIME;
      result[FIFTY_PERCENT] = {
        timeRange: `${startStr}-22:00`,
        numberHours: START_NIGHT_TIME - START_TIME,
      };

      result[ONE_HUNDRED_PERCENT] = {
        timeRange: '22:00-' + endStr,
        numberHours: totalHours - hours,
      };
      return result;
    }
  }, [END_TIME, START_TIME, endStr, startStr, time]);

  useEffect(() => {
    if (additionalHours) {
      const hours = calculateAdditionalHours();
      setAdditional(hours);
    }
  }, [additionalHours, calculateAdditionalHours, time]);

  const calculateEarningsDay = useCallback(
    (
      workingHours: number,
      grossHourlyRate: number,
      status: Status,
      fiftyPercentHours?: number,
      oneHundredPercentHours?: number,
    ): number => {
      const salaryForDay = workingHours * grossHourlyRate;
      const nightHours = calculateNightHours();
      const nightExtraRate = GetNightRate();
      const additionalRatePerHour = grossHourlyRate / 2;

      if (
        workShiftNumber === WorkShiftNumber.Shift2 &&
        additionalHours &&
        fiftyPercentHours &&
        oneHundredPercentHours
      ) {
        const nightHourSalary = nightExtraRate * nightHours;
        const oneHundredPercentSalary = oneHundredPercentHours * grossHourlyRate;
        const fiftyPercentSalary = fiftyPercentHours * additionalRatePerHour;
        return salaryForDay + nightHourSalary + oneHundredPercentSalary + fiftyPercentSalary;
      }
      if (
        workShiftNumber === WorkShiftNumber.Shift2 &&
        !additionalHours &&
        START_TIME >= START_NIGHT_TIME
      ) {
        const nightHourSalary = nightExtraRate * nightHours;
        return salaryForDay + nightHourSalary;
      }
      if (
        workShiftNumber === WorkShiftNumber.Shift2 &&
        !additionalHours &&
        START_TIME < START_NIGHT_TIME
      ) {
        return salaryForDay;
      }
      if (
        workShiftNumber === WorkShiftNumber.Shift2 &&
        additionalHours &&
        START_TIME >= START_NIGHT_TIME &&
        oneHundredPercentHours
      ) {
        const nightHourSalary = nightExtraRate * nightHours;
        const oneHundredPercentSalary = oneHundredPercentHours * grossHourlyRate;
        return salaryForDay + nightHourSalary + oneHundredPercentSalary;
      }
      if (
        workShiftNumber === WorkShiftNumber.Shift2 &&
        additionalHours &&
        START_TIME < START_NIGHT_TIME &&
        fiftyPercentHours
      ) {
        const nightHourSalary = nightExtraRate * nightHours;
        const fiftyPercentSalary = fiftyPercentHours * additionalRatePerHour;
        return salaryForDay + nightHourSalary + fiftyPercentSalary;
      }
      if (workShiftNumber === WorkShiftNumber.Shift1 && !additionalHours) {
        return salaryForDay;
      }
      if (workShiftNumber === WorkShiftNumber.Shift1 && additionalHours && fiftyPercentHours) {
        const fiftyPercentSalary = fiftyPercentHours * additionalRatePerHour;
        return salaryForDay + fiftyPercentSalary;
      }
      if (workShiftNumber === WorkShiftNumber.Shift2 && !additionalHours) {
        const nightHourSalary = nightExtraRate * nightHours;
        return salaryForDay + nightHourSalary;
      }
      if (workShiftNumber === WorkShiftNumber.Shift0 && status === Status.vacation) {
        return salaryForDay;
      }

      return 0;
    },
    [START_TIME, additionalHours, calculateNightHours, workShiftNumber],
  );

  useEffect(() => {
    if (additional && additionalHours) {
      const earning = calculateEarningsDay(
        numberHoursWorked,
        33,
        status,
        additional[FIFTY_PERCENT].numberHours,
        additional[ONE_HUNDRED_PERCENT].numberHours,
      );
      setEarningForDay(earning);
    } else {
      const earning = calculateEarningsDay(numberHoursWorked, 33, status);
      setEarningForDay(earning);
    }
  }, [additional, additionalHours, calculateEarningsDay, numberHoursWorked, status]);

  const handleEditBtnClick = () => {
    openModal(modalsName.cellDayEdit);
  };

  const handleDeleteBtnClick = () => {
    openModal(modalsName.cellDayDelete);
  };

  const calculateProfitForVacation = (hours: number, grossHourlyRate: number) => {
    return hours * grossHourlyRate;
  };

  return {
    calculateEarningsDay,
    handleEditBtnClick,
    handleDeleteBtnClick,
    modalsName,
    calculateAdditionalHours,
    additional,
    earningForDay,
    calculateNightHours,
    START_TIME,
    START_NIGHT_TIME,
    calculateProfitForVacation,
  };
};

export default useCalculateDay;
