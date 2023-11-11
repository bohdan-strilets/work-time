import Media from 'react-media';
import ScreenWidth from 'utilities/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import { CellInformationProps } from 'types/props/CellInformationProps';

const Auth: React.FC<CellInformationProps> = ({ dayInfo, date }) => {
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
          {matches.small && <Mobile dayInfo={dayInfo} date={date} />}
          {matches.medium && <Tablet dayInfo={dayInfo} date={date} />}
          {matches.large && <Desktop dayInfo={dayInfo} date={date} />}
        </>
      )}
    </Media>
  );
};

export default Auth;
