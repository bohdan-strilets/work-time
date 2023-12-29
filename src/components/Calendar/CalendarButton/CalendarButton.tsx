import { CalendarButtonProps } from 'types/props/CalendarButtonProps';
import { Button } from './CalendarButton.styled';

const CalendarButton: React.FC<CalendarButtonProps> = ({
  handleClichk,
  children,
  value,
  selectedMonth,
  index,
}) => {
  return (
    <Button
      type="button"
      onClick={handleClichk}
      value={value}
      selectedMonth={selectedMonth}
      index={index}
      width="100px"
    >
      {children}
    </Button>
  );
};

export default CalendarButton;
