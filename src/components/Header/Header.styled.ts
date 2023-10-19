import styled from "@emotion/styled";
import { CgMenuGridO } from "react-icons/cg";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button<{
  width?: string;
  height?: string;
  margin?: string;
}>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  margin: ${({ margin }) => (margin ? margin : "")};

  color: var(--white-color);
  background: var(--black-color);
  border: none;
  border-radius: 3px;

  cursor: pointer;
  overflow: hidden;

  :hover::before,
  :focus::before {
    transform: translateX(0);
  }

  ::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);

    display: block;

    width: 100%;
    height: 100%;

    background: var(--main-gradient);
    border-radius: 3px;

    transition: transform var(--hover-effect);
  }
`;

export const Label = styled.p`
  z-index: 1;
`;

export const Icon = styled(CgMenuGridO)`
  z-index: 1;
`;
