import styled from '@emotion/styled';
import { ButtonProps } from 'types/props/CalendarButtonProps';

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;

  width: ${({ width }) => (width ? width : '')};
  height: 35px;

  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: var(--main-shadow);
  background-color: ${({ background }) => (background ? background : '')};
  color: ${({ color }) => (color ? color : '')};

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--gray-color);
    color: var(--black-color);
  }
`;
