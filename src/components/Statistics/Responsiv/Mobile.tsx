import { useTranslation } from 'react-i18next';
import { IoStatsChartSharp } from 'react-icons/io5';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import Diagram from '../Diagram';
import useModalWindow from 'hooks/useModalWindow';
import { StatisticsProps } from 'types/props/StatisticsProps';
import { useAppSelector } from 'hooks/useAppSelector';
import { getTheme } from '../../../redux/settings/settingsSelectors';
import { StatisticsLngKeys } from 'types/locales/StatisticsLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import normalizingForNumber from 'utilities/normalizingForNumber';
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

const Mobile: React.FC<StatisticsProps> = ({
  statisticsByMonths,
  calculateStatisticsByMonth,
  isLoading,
  dataForChartGraph,
  labelsForDiagramByShifts,
  labelsForDiagramByStatus,
}) => {
  const { openModal, modalsName } = useModalWindow();
  const theme = useAppSelector(getTheme);
  const { t } = useTranslation();

  const showDiagramForDays = dataForChartGraph.forDays[0].data[0] > 0;
  const showDiagramForHours = dataForChartGraph.forHours[0].data[0] > 0;
  const showDiagramForShifts = dataForChartGraph.forShifts[0].data[0] > 0;
  const showDiagramForMoney = dataForChartGraph.forMonay[0].data[0] > 0;

  return (
    <>
      {isLoading && <Loader />}
      <Group>
        <Data>
          <HeaderWrapper>
            <Title>{t(CommonLngKeys.Days, { ns: LocalesKeys.common })}</Title>
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
              <Property>
                {t(StatisticsLngKeys.NumberOfWorkingDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberWorkingDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NumberOfDaysOff, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberDaysOff),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NumberOfVacationDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberVacationDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NumberOfSickDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberSickDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NumberOfAdditionalWorkingDays, { ns: LocalesKeys.statistics })}
                :
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberAdditionalWorkingDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.TotalDaysExceptWeekends, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(calculateStatisticsByMonth(statisticsByMonths?.totalDays))}
              </Value>
            </Item>
          </List>
        </Data>
        {showDiagramForDays && (
          <Diagram
            labels={labelsForDiagramByStatus}
            datasets={dataForChartGraph.forDays}
            width="300px"
          />
        )}
      </Group>
      <Group>
        <Data>
          <HeaderWrapper>
            <Title>{t(CommonLngKeys.Hours, { ns: LocalesKeys.common })}</Title>
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
              <Property>
                {t(StatisticsLngKeys.NumberOfWorkingHours, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberWorkingHours),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NumberOfFreeHours, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberFreeHours),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NumberOfVacationHours, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberVacationHours),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NumberOfSickLeaveHours, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberSickHours),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NumberOfAdditionalWorkingHours, {
                  ns: LocalesKeys.statistics,
                })}
                :
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberAdditionalWorkingHours),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.TotalHoursExceptWeekends, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(calculateStatisticsByMonth(statisticsByMonths?.totalHours))}
              </Value>
            </Item>
          </List>
        </Data>
        {showDiagramForHours && (
          <Diagram
            labels={labelsForDiagramByStatus}
            datasets={dataForChartGraph.forHours}
            width="300px"
          />
        )}
      </Group>
      <Group>
        <Data>
          <HeaderWrapper>
            <Title>{t(CommonLngKeys.Shifts, { ns: LocalesKeys.common })}</Title>
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
              <Property>
                {t(StatisticsLngKeys.FirstShifts, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberFirstShifts),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.SecondShifts, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberSecondShifts),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NightHours, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.numberNightHours),
                )}
              </Value>
            </Item>
          </List>
        </Data>
        {showDiagramForShifts && (
          <Diagram
            labels={labelsForDiagramByShifts}
            datasets={dataForChartGraph.forShifts}
            width="300px"
          />
        )}
      </Group>
      <Group>
        <Data>
          <HeaderWrapper>
            <Title>{t(CommonLngKeys.Money, { ns: LocalesKeys.common })}</Title>
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
              <Property>
                {t(StatisticsLngKeys.GrossAmountOfWorkingDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForWorkingDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NetAmountOfWorkingDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForWorkingDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.GrossAmountOfVacationDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForVacationDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.GrossAmountOfVacationDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForVacationDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.GrossAmountOfSickDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.grossAmountMoneyForSickDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.NetAmountOfSickDays, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.nettoAmountMoneyForSickDays),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.TotalMoneyReceivedGross, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.totalMoneyEarnedGross),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.TotalMoneyReceivedNet, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(
                  calculateStatisticsByMonth(statisticsByMonths?.totalMoneyEarnedNetto),
                )}
              </Value>
            </Item>
            <Item theme={theme}>
              <Property>
                {t(StatisticsLngKeys.TotalTaxPaid, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                {normalizingForNumber(calculateStatisticsByMonth(statisticsByMonths?.totalTaxPaid))}
              </Value>
            </Item>
          </List>
        </Data>
        {showDiagramForMoney && (
          <Diagram
            labels={labelsForDiagramByStatus}
            datasets={dataForChartGraph.forMonay}
            width="300px"
          />
        )}
      </Group>
    </>
  );
};

export default Mobile;
