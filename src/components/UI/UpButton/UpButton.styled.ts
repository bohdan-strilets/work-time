import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Button = styled.button`
  position: fixed;
  bottom: 12px;
  right: 12px;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 30px;

  background-color: var(--gray-color);
  border: none;
  box-shadow: var(--main-shadow);
  outline: none;
  border-radius: 3px;

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
    color: var(--white-color);
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    bottom: 18px;
    right: 18px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    bottom: 25px;
    right: 25px;
  }
`;
