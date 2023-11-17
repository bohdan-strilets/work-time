import { useState, useEffect } from 'react';
import { WorkShiftNumber } from 'types/enums/WorkShiftNumber';
import { IncomeListProps } from 'types/props/IncomeListProps';
import Multiplication from 'utilities/Multiplication';
import GetNightRate from 'utilities/GetNightRate';
import { Text, Superscript, Result } from './IncomeList.styled';

const IncomeList: React.FC<IncomeListProps> = ({
  numberHoursWorked,
  workShiftNumber,
  additional,
  calculateNightHours,
  time,
}) => {
  const [earningsForDay, setEarningsForDay] = useState(0);
  const [fiftyPercentage, setFiftyPercentage] = useState(0);
  const [oneHundredPercent, setOneHundredPercent] = useState(0);
  const [nightSupplement, setNightSupplement] = useState(0);
  const [total, setTotal] = useState(0);

  const hourlyRate = 33;
  const nightHours = calculateNightHours(time);

  useEffect(() => {
    if (additional) {
      setEarningsForDay(Multiplication(numberHoursWorked, hourlyRate));
      setFiftyPercentage(Multiplication(additional['50%'].numberHours, 16.5));
      setOneHundredPercent(Multiplication(additional['100%'].numberHours, hourlyRate));
      setNightSupplement(Multiplication(nightHours, GetNightRate()));
      setTotal(earningsForDay + fiftyPercentage + oneHundredPercent + nightSupplement);
    }
  }, [
    additional,
    earningsForDay,
    fiftyPercentage,
    nightHours,
    nightSupplement,
    numberHoursWorked,
    oneHundredPercent,
  ]);

  return (
    <div>
      <Text>
        {numberHoursWorked}
        <Superscript>H</Superscript> * {hourlyRate}
        <Superscript>PLN</Superscript> = {earningsForDay}
        <Superscript>PLN</Superscript>
      </Text>
      {additional && additional['50%'].numberHours !== 0 && (
        <Text>
          {additional['50%'].numberHours}
          <Superscript>H</Superscript> * 50% = {fiftyPercentage}
          <Superscript>PLN</Superscript>
        </Text>
      )}
      {additional && additional['100%'].numberHours !== 0 && (
        <Text>
          {additional['100%'].numberHours}
          <Superscript>H</Superscript> * 100% = {oneHundredPercent}
          <Superscript>PLN</Superscript>
        </Text>
      )}
      {workShiftNumber === WorkShiftNumber.Shift2 && (
        <Text>
          {nightHours}
          <Superscript>H</Superscript> * {GetNightRate()}
          <Superscript>PLN</Superscript> ={nightSupplement}
          <Superscript>PLN</Superscript>
        </Text>
      )}
      <Result>+ {total} PLN</Result>
    </div>
  );
};

export default IncomeList;
