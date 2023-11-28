import useQuickTiming from 'hooks/useQuickTiming';
import { QuickTimingProps } from 'types/props/QuickTimingProps';
import { List, Item, Button } from './QuickTiming.styled';

const QuickTiming: React.FC<QuickTimingProps> = ({ getQuickTime, margin }) => {
  const { handleSelectTime } = useQuickTiming({ getQuickTime });

  return (
    <List margin={margin}>
      <Item>
        <Button type="button" value="06:00" onClick={handleSelectTime}>
          06:00
        </Button>
      </Item>
      <Item>
        <Button type="button" value="10:00" onClick={handleSelectTime}>
          10:00
        </Button>
      </Item>
      <Item>
        <Button type="button" value="14:00" onClick={handleSelectTime}>
          14:00
        </Button>
      </Item>
      <Item>
        <Button type="button" value="18:00" onClick={handleSelectTime}>
          18:00
        </Button>
      </Item>
      <Item>
        <Button type="button" value="22:00" onClick={handleSelectTime}>
          22:00
        </Button>
      </Item>
      <Item>
        <Button type="button" value="02:00" onClick={handleSelectTime}>
          02:00
        </Button>
      </Item>
    </List>
  );
};

export default QuickTiming;
