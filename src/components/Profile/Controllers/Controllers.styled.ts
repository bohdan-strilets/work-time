import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 10px;
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

export const Label = styled.p`
  margin-left: var(--small-indent);
`;
