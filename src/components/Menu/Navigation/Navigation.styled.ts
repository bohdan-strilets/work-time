import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-bottom: 100px;
`;

export const Item = styled.li`
  border-bottom: 1px solid var(--gray-color);

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :last-child {
    border-bottom: none;
  }

  :hover,
  :focus {
    background-color: var(--gray-color);
    color: var(--black-color);
  }
`;

export const Reference = styled(Link)`
  display: flex;
  align-items: center;

  padding: 12px 5px;
  width: 100%;
  height: 100%;
`;

export const ReferenceText = styled.p`
  margin-left: var(--medium-indent);
`;
