import { useEffect, useState } from 'react';
import { List, Item, Button } from './QuickTiming.styled';

export type QuickTimeProps = {
  getQuickTime: (time: string | null) => void;
};

const QuickTiming: React.FC<QuickTimeProps> = ({ getQuickTime }) => {
  const [selectedTime, setSelectedTime] = useState<null | string>(null);

  const handleSelectTime = (e: React.MouseEvent<HTMLButtonElement>) => {
    const time = e.currentTarget.value;
    setSelectedTime(time);
  };

  useEffect(() => {
    getQuickTime(selectedTime);
  }, [getQuickTime, selectedTime]);

  return (
    <List>
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
