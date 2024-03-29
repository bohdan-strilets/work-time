import Media from 'react-media';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import { StatisticsProps } from 'types/props/StatisticsProps';

const Statistics: React.FC<StatisticsProps> = ({
  statisticsByMonths,
  calculateStatisticsByMonth,
  isLoading,
  dataForChartGraph,
  labelsForDiagramByShifts,
  labelsForDiagramByStatus,
}) => {
  return (
    <Media
      queries={{
        small: `(max-width: ${ScreenWidth.preTablet})`,
        medium: `(min-width: ${ScreenWidth.tablet}) and (max-width: ${ScreenWidth.preDesktop})`,
        large: `(min-width: ${ScreenWidth.desktop})`,
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <Mobile
              statisticsByMonths={statisticsByMonths}
              calculateStatisticsByMonth={calculateStatisticsByMonth}
              isLoading={isLoading}
              dataForChartGraph={dataForChartGraph}
              labelsForDiagramByShifts={labelsForDiagramByShifts}
              labelsForDiagramByStatus={labelsForDiagramByStatus}
            />
          )}
          {matches.medium && (
            <Tablet
              statisticsByMonths={statisticsByMonths}
              calculateStatisticsByMonth={calculateStatisticsByMonth}
              isLoading={isLoading}
              dataForChartGraph={dataForChartGraph}
              labelsForDiagramByShifts={labelsForDiagramByShifts}
              labelsForDiagramByStatus={labelsForDiagramByStatus}
            />
          )}
          {matches.large && (
            <Desktop
              statisticsByMonths={statisticsByMonths}
              calculateStatisticsByMonth={calculateStatisticsByMonth}
              isLoading={isLoading}
              dataForChartGraph={dataForChartGraph}
              labelsForDiagramByShifts={labelsForDiagramByShifts}
              labelsForDiagramByStatus={labelsForDiagramByStatus}
            />
          )}
        </>
      )}
    </Media>
  );
};

export default Statistics;
