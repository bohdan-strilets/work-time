import { Wrapper, StyledLine } from './Line.styled';

const Line: React.FC<{}> = () => {
  return (
    <Wrapper>
      <StyledLine
        width="5px"
        height="180px"
        background="var(--black-color)"
        margin="0 0 var(--small-indent) 0"
      />
      <StyledLine
        width="5px"
        height="100px"
        background="var(--gray-color)"
        margin="0 0 var(--small-indent) 0"
      />
      <StyledLine width="5px" height="15px" background="var(--accent-color)" />
    </Wrapper>
  );
};

export default Line;
