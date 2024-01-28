import styled from '@emotion/styled';

export const List = styled.ol`
  list-style: decimal;
  margin-left: var(--medium-indent);
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 10px 0;
  border-bottom: 1px solid var(--gray-color);

  :last-child {
    border-bottom: none;
  }
`;

export const Text = styled.p``;
