import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  color: var(--black-color);

  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;

export const Image = styled.img`
  width: 40px;
`;

export const List = styled.ul`
  position: absolute;
  top: 150%;
  right: 0;

  width: 100%;

  border-radius: 3px;
  background-color: var(--white-color);
  box-shadow: var(--main-shadow);
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-bottom: 1px solid var(--gray-color);
  color: var(--black-color);

  cursor: pointer;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--gray-color);
  }

  :last-child {
    border-bottom: none;
  }
`;
