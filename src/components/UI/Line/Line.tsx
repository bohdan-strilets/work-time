import { Wrapper, LargeLine, MediumLine, SmallLine } from "./Line.styled";

const Line: React.FC<{}> = () => {
  return (
    <Wrapper>
      <LargeLine />
      <MediumLine />
      <SmallLine />
    </Wrapper>
  );
};

export default Line;
