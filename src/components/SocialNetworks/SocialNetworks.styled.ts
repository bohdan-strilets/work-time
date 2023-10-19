import styled from "@emotion/styled";

export const List = styled.ul`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const Item = styled.li`
  position: relative;

  width: 45px;
  height: 45px;

  :hover p,
  :focus p {
    opacity: 1;
  }
`;

export const Reference = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: var(--black-color);
  color: var(--white-color);

  outline: none;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
  }
`;

export const Label = styled.p`
  position: absolute;
  top: 50%;
  left: 110%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 600;

  width: 100px;
  height: 30px;

  background-color: var(--gray-color);
  opacity: 0;

  transition: opacity var(--hover-effect);
`;
