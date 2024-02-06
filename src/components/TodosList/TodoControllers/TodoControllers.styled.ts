import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  bottom: 5px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: 5px;

  :last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  color: var(--blakc-color);
  background-color: transparent;
  border: none;
  outline: none;

  font-size: 18px;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;
