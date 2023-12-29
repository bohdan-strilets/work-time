import styled from '@emotion/styled';
import { WrapperProps, ButtonProps, ListProps } from 'types/props/DropdownListProps';

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => (width ? width : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
`;

export const Label = styled.p`
  margin-bottom: 5px;
`;

export const Required = styled.span`
  color: var(--accent-color);
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${({ height }) => (height ? height : '')};
  padding: 0 10px;

  background-color: #ffffff;
  border: 1px solid var(--gray-color);
  border-radius: 3px;
  outline: none;

  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
  cursor: pointer;

  :focus {
    border-color: var(--accent-color);
  }
`;

export const List = styled.ul<ListProps>`
  position: ${({ position }) => (position === 'relative' ? 'relative' : 'absolute')};
  top: ${({ position }) => (position === 'absolute' ? '130%' : '')};
  left: ${({ position }) => (position === 'absolute' ? '0' : '')};
  z-index: ${({ position }) => (position === 'absolute' ? '99' : '')};

  margin: ${({ position }) => (position === 'relative' ? '20px 0 0 0' : '')};
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
  color: #000000;

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
