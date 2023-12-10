import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateInputProps } from 'types/props/DateInputProps';
import { Wrapper, Label, Icon } from './DateInput.styled';

const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  selected,
  onChange,
  width,
  height,
  margin,
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Wrapper width={width} height={height} margin={margin}>
        <DatePicker name={name} selected={selected} onChange={onChange} />
        <Icon />
      </Wrapper>
    </>
  );
};

export default DateInput;
