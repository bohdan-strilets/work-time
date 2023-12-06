import styled from '@emotion/styled';

export const ReferenceBtn = styled.button`
  text-decoration: underline;

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
