import styled from "@emotion/styled";
import { WrapperProps, ButtonProps } from "types/props/DropdownListProps";

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => (width ? width : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Label = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Required = styled.span`
  color: var(--accent-color);
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${({ height }) => (height ? height : "")};
  padding: 0 10px;

  background-color: #ffffff;
  border: 1px solid var(--gray-color);
  border-radius: 3px;
  outline: none;

  pointer-events: ${({ disabled }) => (disabled ? "none" : "")};
  cursor: pointer;

  :focus {
    border-color: var(--accent-color);
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 120%;
  left: 0;
  z-index: 9;

  width: 100%;
  max-height: 200px;
  overflow-y: auto;

  background-color: #ffffff;
  border: 1px solid var(--gray-color);
  border-radius: 3px;

  outline: none;

  :focus {
    border-color: var(--accent-color);
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  padding: 0 10px;

  outline: none;
  border-bottom: 1px solid var(--gray-color);
  cursor: pointer;
  transition: background-color var(--hover-effect);

  :last-child {
    border-bottom: none;
  }

  :hover,
  :focus {
    background-color: var(--gray-color);
  }
`;

export const Error = styled.p`
  margin-top: 10px;
  color: var(--accent-color);
`;
