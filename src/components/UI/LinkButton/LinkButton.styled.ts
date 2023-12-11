import styled from '@emotion/styled';
import { ButtonProps } from 'types/props/LinkButtonProps';

export const Button = styled.button<ButtonProps>`
  text-decoration: underline;
  margin: ${({ margin }) => (margin ? margin : '')};

  color: var(--accent-color);
  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;
