import styled from '@emotion/styled';
import { ThemeEnum } from 'types/enums/ThemeEnum';
import ScreenWidth from 'utilities/ScreenWidth';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;

  @media screen and (max-width: ${ScreenWidth.preTablet}) {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  overflow-y: auto;

  width: 450px;
  height: 100vh;
  padding: var(--medium-indent);

  color: var(--gray-color);
  background-color: ${({ theme }) =>
    theme === ThemeEnum.Dark ? 'var(--white-color)' : 'var(--black-color)'};
  box-shadow: var(--main-shadow);

  @media screen and (max-width: ${ScreenWidth.preDesktop}) {
    width: 350px;
  }
`;
