import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

export const StyledLine = styled.div<{
  width: string;
  height: string;
  background: string;
  margin?: string;
}>`
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  margin: ${({ margin }) => (margin ? margin : "")};

  background-color: ${({ background }) => (background ? background : "")};
  border-radius: 5px;
  box-shadow: var(--main-shadow);
`;
