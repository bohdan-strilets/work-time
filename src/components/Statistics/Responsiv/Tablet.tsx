import { IoStatsChartSharp } from 'react-icons/io5';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import Diagram from '../Diagram';
import useModalWindow from 'hooks/useModalWindow';
import { StatisticsProps } from 'types/props/StatisticsProps';
import { useAppSelector } from 'hooks/useAppSelector';
import { getTheme } from '../../../redux/settings/settingsSelectors';
import {
  HeaderWrapper,
  Title,
  Group,
  Data,
  List,
  Item,
  Property,
  Value,
} from '../Statistics.styled';

const Tablet: React.FC<StatisticsProps> = ({
  statisticsByMonths,
  calculateStatisticsByMonth,
  isLoading,
  dataForChartGraph,
}) => {
  const { openModal, modalsName } = useModalWindow();
  const theme = useAppSelector(getTheme);

  return (
    <>
      {isLoading && <Loader />}
      <Group>
        <Data>
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
            <Item theme={theme}>
              <Property>Number of working days:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberWorkingDays)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of days off:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberDaysOff)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of vacation days:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberVacationDays)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of sick days:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberSickDays)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of additional working days:</Property>
              <Value>
                {calculateStatisticsByMonth(statisticsByMonths?.numberAdditionalWorkingDays)}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>Total days (except weekends):</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.totalDays)}</Value>
            </Item>
          </List>
        </Data>
        {dataForChartGraph.forDays[0].data.length > 0 && (
          <Diagram
            labels={['Work', 'Day off', 'Vacation', 'Sick leave', 'Additional work']}
            datasets={dataForChartGraph.forDays}
            width="400px"
          />
        )}
      </Group>
      <Group>
        <Data>
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
            <Item theme={theme}>
              <Property>Number of working hours:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberWorkingHours)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of free hours:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberFreeHours)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of vacation hours:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberVacationHours)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of sick leave hours:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberSickHours)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of additional working hours:</Property>
              <Value>
                {calculateStatisticsByMonth(statisticsByMonths?.numberAdditionalWorkingHours)}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>Total hours (except weekends):</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.totalHours)}</Value>
            </Item>
          </List>
        </Data>
        {dataForChartGraph.forHours[0].data.length > 0 && (
          <Diagram
            labels={['Work', 'Day off', 'Vacation', 'Sick leave', 'Additional work']}
            datasets={dataForChartGraph.forHours}
            width="400px"
          />
        )}
      </Group>
      <Group>
        <Data>
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
            <Item theme={theme}>
              <Property>Number of first shifts:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberFirstShifts)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of second shifts:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberSecondShifts)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Number of night hours:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.numberNightHours)}</Value>
            </Item>
          </List>
        </Data>
        {dataForChartGraph.forShifts[0].data.length > 0 && (
          <Diagram
            labels={['First shifts', 'Second shifts', 'Night hours']}
            datasets={dataForChartGraph.forShifts}
            width="400px"
          />
        )}
      </Group>
      <Group>
        <Data>
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
            <Item theme={theme}>
              <Property>Gross amount of money received during working days:</Property>
              <Value>
                {calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForWorkingDays)}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>Net amount of money received during working days:</Property>
              <Value>
                {calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForWorkingDays)}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>Gross amount of money received for vacation days:</Property>
              <Value>
                {calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForVacationDays)}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>Net amount of money received for vacation days:</Property>
              <Value>
                {calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForVacationDays)}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>Gross amount of money received for sick days:</Property>
              <Value>
                {calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForSickDays)}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>Net amount of money received for sick days:</Property>
              <Value>
                {calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForSickDays)}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>Total money received gross:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.totalMoneyEarnedGross)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Total money received net:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.totalMoneyEarnedNetto)}</Value>
            </Item>
            <Item theme={theme}>
              <Property>Total tax paid:</Property>
              <Value>{calculateStatisticsByMonth(statisticsByMonths?.totalTaxPaid)}</Value>
            </Item>
          </List>
        </Data>
        {dataForChartGraph.forMonay[0].data.length > 0 && (
          <Diagram
            labels={['Work', 'Day off', 'Vacation', 'Sick leave', 'Additional work']}
            datasets={dataForChartGraph.forMonay}
            width="400px"
          />
        )}
      </Group>
    </>
  );
};

export default Tablet;
