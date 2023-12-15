import { IoStatsChartSharp } from 'react-icons/io5';
import { Data } from './data';
import Button from 'components/UI/Button';
import useModalWindow from 'hooks/useModalWindow';
import { List, Item, Property, Value, HeaderWrapper, Title } from './Statistics.styled';

const Statistics: React.FC<{}> = () => {
  const { openModal, modalsName } = useModalWindow();

  return (
    <>
      <HeaderWrapper>
        <Title>Days</Title>
        <Button
          type="button"
          height="35px"
          width="35px"
          icon={<IoStatsChartSharp />}
          onClick={() => openModal(modalsName.chartByDays)}
        />
      </HeaderWrapper>
      <List>
        <Item>
          <Property>Number of working days:</Property>
          <Value>{Data.statistics.numberWorkingDays}</Value>
        </Item>
        <Item>
          <Property>Number of days off:</Property>
          <Value>{Data.statistics.numberDaysOff}</Value>
        </Item>
        <Item>
          <Property>Number of vacation days:</Property>
          <Value>{Data.statistics.numberVacationDays}</Value>
        </Item>
        <Item>
          <Property>Number of sick days:</Property>
          <Value>{Data.statistics.numberSickDays}</Value>
        </Item>
        <Item>
          <Property>Number of additional working days:</Property>
          <Value>{Data.statistics.numberAdditionalWorkingDays}</Value>
        </Item>
        <Item>
          <Property>Total days (except weekends):</Property>
          <Value>{Data.statistics.totalDays}</Value>
        </Item>
      </List>
      <HeaderWrapper>
        <Title>Hours</Title>
        <Button
          type="button"
          height="35px"
          width="35px"
          icon={<IoStatsChartSharp />}
          onClick={() => openModal(modalsName.chartByHours)}
        />
      </HeaderWrapper>
      <List>
        <Item>
          <Property>Number of working hours:</Property>
          <Value>{Data.statistics.numberWorkingHours}</Value>
        </Item>
        <Item>
          <Property>Number of free hours:</Property>
          <Value>{Data.statistics.numberFreeHours}</Value>
        </Item>
        <Item>
          <Property>Number of vacation hours:</Property>
          <Value>{Data.statistics.numberVacationHours}</Value>
        </Item>
        <Item>
          <Property>Number of sick leave hours:</Property>
          <Value>{Data.statistics.numberSickHours}</Value>
        </Item>
        <Item>
          <Property>Number of additional working hours:</Property>
          <Value>{Data.statistics.numberAdditionalWorkingHours}</Value>
        </Item>
        <Item>
          <Property>Total hours (except weekends):</Property>
          <Value>{Data.statistics.totalHours}</Value>
        </Item>
      </List>
      <HeaderWrapper>
        <Title>Shifts</Title>
        <Button
          type="button"
          height="35px"
          width="35px"
          icon={<IoStatsChartSharp />}
          onClick={() => openModal(modalsName.chartByShifts)}
        />
      </HeaderWrapper>
      <List>
        <Item>
          <Property>Number of first shifts:</Property>
          <Value>{Data.statistics.numberFirstShifts}</Value>
        </Item>
        <Item>
          <Property>Number of second shifts:</Property>
          <Value>{Data.statistics.numberSecondShifts}</Value>
        </Item>
        <Item>
          <Property>Number of night hours:</Property>
          <Value>{Data.statistics.numberNightHours}</Value>
        </Item>
      </List>
      <HeaderWrapper>
        <Title>Money</Title>
        <Button
          type="button"
          height="35px"
          width="35px"
          icon={<IoStatsChartSharp />}
          onClick={() => openModal(modalsName.chartByMoney)}
        />
      </HeaderWrapper>
      <List>
        <Item>
          <Property>Gross amount of money received during working days:</Property>
          <Value>{Data.statistics.grossAmountMoneyForWorkingDays}</Value>
        </Item>
        <Item>
          <Property>Net amount of money received during working days:</Property>
          <Value>{Data.statistics.nettoAmountMoneyForWorkingDays}</Value>
        </Item>
        <Item>
          <Property>Gross amount of money received for vacation days:</Property>
          <Value>{Data.statistics.grossAmountMoneyForVacationDays}</Value>
        </Item>
        <Item>
          <Property>Net amount of money received for vacation days:</Property>
          <Value>{Data.statistics.nettoAmountMoneyForVacationDays}</Value>
        </Item>
        <Item>
          <Property>Gross amount of money received for sick days:</Property>
          <Value>{Data.statistics.grossAmountMoneyForSickDays}</Value>
        </Item>
        <Item>
          <Property>Net amount of money received for sick days:</Property>
          <Value>{Data.statistics.nettoAmountMoneyForSickDays}</Value>
        </Item>
        <Item>
          <Property>Total money received gross:</Property>
          <Value>{Data.statistics.totalMoneyEarnedGross}</Value>
        </Item>
        <Item>
          <Property>Total money received net:</Property>
          <Value>{Data.statistics.totalMoneyEarnedNetto}</Value>
        </Item>
        <Item>
          <Property>Total tax paid:</Property>
          <Value>{Data.statistics.totalTaxPaid}</Value>
        </Item>
      </List>
    </>
  );
};

export default Statistics;
