import { LineWithTextProps } from 'types/props/LineWithTextProps';
import { Wrapper, Line, Label } from './LineWithText.styled';

const LineWithText: React.FC<LineWithTextProps> = ({ label }) => {
  return (
    <Wrapper>
      <Line />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default LineWithText;
