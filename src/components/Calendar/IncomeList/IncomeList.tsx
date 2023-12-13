import { useState, useEffect } from 'react';
import { WorkShiftNumber } from 'types/enums/WorkShiftNumber';
import { IncomeListProps } from 'types/props/IncomeListProps';
import Multiplication from 'utilities/Multiplication';
import GetNightRate from 'utilities/GetNightRate';
import { Status } from 'types/enums/StatusEnum';
import { Text, Superscript, Result } from './IncomeList.styled';

const IncomeList: React.FC<IncomeListProps> = ({
  numberHoursWorked,
  workShiftNumber,
  additional,
  calculateNightHours,
  time,
  startTime,
  startNightTime,
  status,
}) => {
  const [earningsForDay, setEarningsForDay] = useState(0);
  const [fiftyPercentage, setFiftyPercentage] = useState(0);
  const [oneHundredPercent, setOneHundredPercent] = useState(0);
  const [nightSupplement, setNightSupplement] = useState(0);
  const [total, setTotal] = useState(0);

  const hourlyRate = 33;
  const sickDayPay = (33 * 80) / 100;
  const nightHours = calculateNightHours(time);

  useEffect(() => {
    if (workShiftNumber === WorkShiftNumber.Shift1 && !additional) {
      setEarningsForDay(Multiplication(numberHoursWorked, hourlyRate));
      return setTotal(earningsForDay);
    } else if (
      workShiftNumber === WorkShiftNumber.Shift1 &&
      additional &&
      additional?.['50%'].numberHours > 0
    ) {
      setEarningsForDay(Multiplication(numberHoursWorked, hourlyRate));
      setFiftyPercentage(Multiplication(additional['50%'].numberHours, 16.5));
      return setTotal(earningsForDay + fiftyPercentage);
    } else if (workShiftNumber === WorkShiftNumber.Shift2 && !additional) {
      if (startTime >= startNightTime || numberHoursWorked > 8) {
        setEarningsForDay(Multiplication(numberHoursWorked, hourlyRate));
        setNightSupplement(Multiplication(nightHours, GetNightRate()));
        return setTotal(earningsForDay + nightSupplement);
      } else {
        setEarningsForDay(Multiplication(numberHoursWorked, hourlyRate));
        return setTotal(earningsForDay);
      }
    } else if (
      workShiftNumber === WorkShiftNumber.Shift2 &&
      additional &&
      additional['100%'].numberHours > 0
    ) {
      if (startTime >= startNightTime || numberHoursWorked > 8) {
        setEarningsForDay(Multiplication(numberHoursWorked, hourlyRate));
        setFiftyPercentage(Multiplication(additional['50%'].numberHours, 16.5));
        setOneHundredPercent(Multiplication(additional['100%'].numberHours, hourlyRate));
        setNightSupplement(Multiplication(nightHours, GetNightRate()));
        return setTotal(earningsForDay + fiftyPercentage + oneHundredPercent + nightSupplement);
      } else {
        setEarningsForDay(Multiplication(numberHoursWorked, hourlyRate));
        setFiftyPercentage(Multiplication(additional['50%'].numberHours, 16.5));
        return setTotal(earningsForDay + fiftyPercentage);
      }
    } else if (status === Status.vacation) {
      setEarningsForDay(Multiplication(numberHoursWorked, hourlyRate));
      return setTotal(earningsForDay);
    } else if (status === Status.sickLeave) {
      setEarningsForDay(Multiplication(numberHoursWorked, sickDayPay));
      return setTotal(earningsForDay);
    }
  }, [
    additional,
    earningsForDay,
    fiftyPercentage,
    nightHours,
    nightSupplement,
    numberHoursWorked,
    oneHundredPercent,
    sickDayPay,
    startNightTime,
    startTime,
    status,
    workShiftNumber,
  ]);

  return (
    <div>
      {status !== Status.sickLeave && (
        <Text>
          {numberHoursWorked}
          <Superscript>H</Superscript> * {hourlyRate}
          <Superscript>PLN</Superscript> = {earningsForDay}
          <Superscript>PLN</Superscript>
        </Text>
      )}
      {workShiftNumber === WorkShiftNumber.Shift0 && status === Status.sickLeave && (
        <Text>
          {numberHoursWorked}
          <Superscript>H</Superscript> * {sickDayPay}
          <Superscript>PLN</Superscript> = {earningsForDay}
          <Superscript>PLN</Superscript>
        </Text>
      )}
      {additional && additional['50%'].numberHours > 0 && (
        <Text>
          {additional['50%'].numberHours}
          <Superscript>H</Superscript> * 50% = {fiftyPercentage}
          <Superscript>PLN</Superscript>
        </Text>
      )}
      {additional && additional['100%'].numberHours > 0 && (
        <Text>
          {additional['100%'].numberHours}
          <Superscript>H</Superscript> * 100% = {oneHundredPercent}
          <Superscript>PLN</Superscript>
        </Text>
      )}
      {workShiftNumber === WorkShiftNumber.Shift2 && nightHours > 0 && (
        <Text>
          {nightHours}
          <Superscript>H</Superscript> * {GetNightRate()}
          <Superscript>PLN</Superscript> = {nightSupplement}
          <Superscript>PLN</Superscript>
        </Text>
      )}
      <Result>+ {total} PLN</Result>
    </div>
  );
};

export default IncomeList;
