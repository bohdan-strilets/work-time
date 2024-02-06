import styled from '@emotion/styled';
import { ItemProps } from 'types/props/TodoListProps';

const greenTransparent = 'rgba(25, 209, 114, 0.1)';
const redTransparent = 'rgba(209, 25, 25,0.1)';

export const Item = styled.li<ItemProps>`
  display: flex;
  align-items: center;

  padding: 10px;
  margin-bottom: 10px;

  border-radius: 5px;
  background-color: ${({ isCompleted }) => (isCompleted ? greenTransparent : redTransparent)};

  :last-child {
    margin-bottom: 0;
  }
`;
