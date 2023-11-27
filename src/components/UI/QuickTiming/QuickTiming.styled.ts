import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: var(--small-indent);

  :last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 25px;

  background-color: var(--gray-color);
  border: none;
  outline: none;
  border-radius: 2px;

  cursor: pointer;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
  }
`;
