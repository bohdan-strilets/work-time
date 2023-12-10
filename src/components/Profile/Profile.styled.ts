import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Wrapper = styled.div`
  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  width: 100%;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 67%;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 70%;
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;

  margin-bottom: var(--medium-indent);

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  :hover .hover-effect {
    opacity: 1;
  }
`;

export const ButtonHover = styled.div`
  position: absolute;
  top: 1px;
  left: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;

  border-radius: 10px;
  background-color: var(--white-transparent-color);
  opacity: 0;
  transition: opacity var(--hover-effect);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 220px;
    height: 220px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 320px;
    height: 320px;
  }
`;
