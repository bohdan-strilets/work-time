import { CalendarButtonProps } from 'types/props/CalendarButtonProps';
import { Button } from './CalendarButton.styled';

const CalendarButton: React.FC<CalendarButtonProps> = ({
  handleClichk,
  children,
  value,
  background,
  color,
  width,
}) => {
  return (
    <Button
      type="button"
      onClick={handleClichk}
      value={value}
      background={background}
      color={color}
      width={width}
    >
      {children}
    </Button>
  );
};

export default CalendarButton;
