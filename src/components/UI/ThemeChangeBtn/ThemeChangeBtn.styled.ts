import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 30px;
  padding: 0;

  outline: none;
  border: none;
  background-color: transparent;
  color: var(--black-color);

  transition: color var(--hover-effect);
  cursor: pointer;

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;
