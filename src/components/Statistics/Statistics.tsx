import { IoStatsChartSharp } from 'react-icons/io5';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import useModalWindow from 'hooks/useModalWindow';
import { StatisticsProps } from 'types/props/StatisticsProps';
import { List, Item, Property, Value, HeaderWrapper, Title } from './Statistics.styled';

const Statistics: React.FC<StatisticsProps> = ({ generalStatistics, isLoading }) => {
  const { openModal, modalsName } = useModalWindow();

  return (
    <>
      {isLoading && <Loader />}
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
          <Value>{Math.round(generalStatistics?.numberWorkingDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of days off:</Property>
          <Value>{Math.round(generalStatistics?.numberDaysOff ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of vacation days:</Property>
          <Value>{Math.round(generalStatistics?.numberVacationDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of sick days:</Property>
          <Value>{Math.round(generalStatistics?.numberSickDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of additional working days:</Property>
          <Value>{Math.round(generalStatistics?.numberAdditionalWorkingDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Total days (except weekends):</Property>
          <Value>{Math.round(generalStatistics?.totalDays ?? 0)}</Value>
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
          <Value>{Math.round(generalStatistics?.numberWorkingHours ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of free hours:</Property>
          <Value>{Math.round(generalStatistics?.numberFreeHours ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of vacation hours:</Property>
          <Value>{Math.round(generalStatistics?.numberVacationHours ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of sick leave hours:</Property>
          <Value>{Math.round(generalStatistics?.numberSickHours ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of additional working hours:</Property>
          <Value>{Math.round(generalStatistics?.numberAdditionalWorkingHours ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Total hours (except weekends):</Property>
          <Value>{Math.round(generalStatistics?.totalHours ?? 0)}</Value>
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
          <Value>{Math.round(generalStatistics?.numberFirstShifts ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of second shifts:</Property>
          <Value>{Math.round(generalStatistics?.numberSecondShifts ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Number of night hours:</Property>
          <Value>{Math.round(generalStatistics?.numberNightHours ?? 0)}</Value>
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
          <Value>{Math.round(generalStatistics?.grossAmountMoneyForWorkingDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Net amount of money received during working days:</Property>
          <Value>{Math.round(generalStatistics?.nettoAmountMoneyForWorkingDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Gross amount of money received for vacation days:</Property>
          <Value>{Math.round(generalStatistics?.grossAmountMoneyForVacationDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Net amount of money received for vacation days:</Property>
          <Value>{Math.round(generalStatistics?.nettoAmountMoneyForVacationDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Gross amount of money received for sick days:</Property>
          <Value>{Math.round(generalStatistics?.grossAmountMoneyForSickDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Net amount of money received for sick days:</Property>
          <Value>{Math.round(generalStatistics?.nettoAmountMoneyForSickDays ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Total money received gross:</Property>
          <Value>{Math.round(generalStatistics?.totalMoneyEarnedGross ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Total money received net:</Property>
          <Value>{Math.round(generalStatistics?.totalMoneyEarnedNetto ?? 0)}</Value>
        </Item>
        <Item>
          <Property>Total tax paid:</Property>
          <Value>{Math.round(generalStatistics?.totalTaxPaid ?? 0)}</Value>
        </Item>
      </List>
    </>
  );
};

export default Statistics;
