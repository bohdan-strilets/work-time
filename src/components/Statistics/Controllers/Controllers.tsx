import Media from 'react-media';
import ScreenWidth from 'utilities/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import { ControllersForStatsProps } from 'types/props/ControllersForStatsProps';

const Controllers: React.FC<ControllersForStatsProps> = ({ getFilterDate }) => {
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
          {matches.small && <Mobile getFilterDate={getFilterDate} />}
          {matches.medium && <Tablet getFilterDate={getFilterDate} />}
          {matches.large && <Desktop getFilterDate={getFilterDate} />}
        </>
      )}
    </Media>
  );
};

export default Controllers;
