import styled from '@emotion/styled';
import { ButtonStyledProps } from 'types/props/MenuButtonProps';

export const Wrapper = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  margin: ${({ margin }) => (margin ? margin : '')};

  background-color: var(--gray-color);
  border: none;
  outline: none;
  box-shadow: var(--main-shadow);
  text-shadow: 3px 3px 5px var(--black-transparent-color);
  border-radius: 3px;

  cursor: pointer;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
  }
`;

export const Label = styled.span`
  margin-right: 5px;
`;
