import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

export const LargeLine = styled.div`
  width: 5px;
  height: 180px;
  margin-bottom: var(--small-indent);

  border-radius: 5px;
  background-color: var(--black-color);
  box-shadow: var(--main-shadow);
`;

export const MediumLine = styled.div`
  width: 5px;
  height: 100px;
  margin-bottom: var(--small-indent);

  border-radius: 5px;
  background-color: var(--gray-color);
  box-shadow: var(--main-shadow);
`;

export const SmallLine = styled.div`
  width: 5px;
  height: var(--small-indent);

  border-radius: 5px;
  background-color: var(--accent-color);
  box-shadow: var(--main-shadow);
`;
