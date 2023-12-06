import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;
