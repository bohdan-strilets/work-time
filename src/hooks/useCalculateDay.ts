import { useEffect, useState, useCallback } from 'react';
import useModalWindow from './useModalWindow';
import { Result } from 'types/types/AdditionalHoursType';
import { HookProps } from 'types/props/DayInfoProps';
import GetNightRate from 'utilities/GetNightRate';
import { WorkShiftNumber } from 'types/enums/WorkShiftNumber';

const useCalculateDay = ({
  additionalHours,
  time,
  numberHoursWorked,
  workShiftNumber,
}: HookProps) => {
  const [additional, setAdditional] = useState<Result | null>(null);
  const [earningForDay, setEarningForDay] = useState(0);
  const { modalsName, openModal } = useModalWindow();

  useEffect(() => {
    if (additionalHours) {
      const hours = calculateAdditionalHours(time);
      setAdditional(hours);
    }
  }, [additionalHours, time]);

  const calculateEarningsDay = useCallback(
    (
      workingHours: number,
      grossHourlyRate: number,
      fiftyPercentHours?: number,
      oneHundredPercentHours?: number,
    ): number => {
      const salaryForDay = workingHours * grossHourlyRate;
      let fiftyPercentSalary = 0;
      let oneHundredPercentSalary = 0;
      let nightHourSalary = 0;

      if (fiftyPercentHours) {
        const additionalRatePerHour = grossHourlyRate / 2;
        const additionalSalary = fiftyPercentHours * additionalRatePerHour;
        fiftyPercentSalary = additionalSalary;
      }
      if (oneHundredPercentHours) {
        const nightExtraRate = GetNightRate();
        const additionalSalary = oneHundredPercentHours * grossHourlyRate;
        const nightSupplement = nightExtraRate * oneHundredPercentHours;
        oneHundredPercentSalary += additionalSalary;
        nightHourSalary += nightSupplement;
      }
      if (workShiftNumber === WorkShiftNumber.Shift2 && oneHundredPercentHours) {
        const nightExtraRate = GetNightRate();
        const nightSupplement = nightExtraRate * oneHundredPercentHours;
        nightHourSalary += nightSupplement;
      }
      if (workShiftNumber === WorkShiftNumber.Shift2) {
        const nightHours = calculateNightHours(time);
        const nightExtraRate = GetNightRate();
        const nightSupplement = nightExtraRate * nightHours;
        nightHourSalary += nightSupplement;
      }

      return salaryForDay + fiftyPercentSalary + oneHundredPercentSalary + nightHourSalary;
    },
    [time, workShiftNumber],
  );

  useEffect(() => {
    if (additional && additionalHours) {
      const earning = calculateEarningsDay(
        numberHoursWorked,
        33,
        additional['50%'].numberHours,
        additional['100%'].numberHours,
      );
      setEarningForDay(earning);
    } else {
      const earning = calculateEarningsDay(numberHoursWorked, 33);
      setEarningForDay(earning);
    }
  }, [additional, additionalHours, calculateEarningsDay, numberHoursWorked]);

  const handleEditBtnClick = () => {
    openModal(modalsName.cellDayEdit);
  };

  const handleDeleteBtnClick = () => {
    openModal(modalsName.cellDayDelete);
  };

  const calculateAdditionalHours = (timeRange: string): Result => {
    const [startStr, endStr] = timeRange.split('-');
    const startTime = parseInt(startStr.split(':')[0], 10);
    const endTime = parseInt(endStr.split(':')[0], 10);
    const totalHours = endTime < startTime ? 24 + endTime - startTime : endTime - startTime;
    const startNightTime = 22;
    const endNightTime = 6;

    const result: Result = {
      '50%': { timeRange: '', numberHours: 0 },
      '100%': { timeRange: '', numberHours: 0 },
    };

    if (startTime >= endNightTime && endTime <= startNightTime && endTime >= startTime) {
      result['50%'] = { timeRange: timeRange, numberHours: totalHours };
      return result;
    } else {
      const hours = startNightTime - startTime;
      result['50%'] = { timeRange: `${startStr}-22:00`, numberHours: startNightTime - startTime };
      result['100%'] = { timeRange: '22:00-' + endStr, numberHours: totalHours - hours };
      return result;
    }
  };

  const calculateNightHours = (timeRange: string): number => {
    const endTime = parseInt(timeRange.split('-')[1].split(':')[0], 10);
    const startNightTime = 22;
    const midnight = 24;
    return midnight - startNightTime + endTime;
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
  };
};

export default useCalculateDay;
