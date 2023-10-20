import styled from "@emotion/styled";
import { WrapperProps } from "types/props/ButtonProps";

export const Wrapper = styled.button<WrapperProps>`
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
  outline: none;
  border-radius: 3px;
  box-shadow: var(--main-shadow);
  opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};

  cursor: pointer;
  overflow: hidden;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "")};

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

export const Icon = styled.div`
  z-index: 1;
`;
