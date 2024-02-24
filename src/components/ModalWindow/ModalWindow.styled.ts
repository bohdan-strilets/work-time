import styled from '@emotion/styled';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';
import { HeaderProps, TitleProps } from 'types/props/ModalWindowProps';
import { ThemeEnum } from 'types/enums/ThemeEnum';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const Body = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  max-height: 100%;
  overflow-y: auto;

  border-radius: 3px;
  background-color: var(--white-color);
  box-shadow: var(--main-shadow);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 660px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 780px;
  }
`;

export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  background: var(--main-gradient);
  box-shadow: ${({ theme }) =>
    theme === ThemeEnum.Dark ? '' : '0px 3px 10px -1px var(--black-transparent-color)'};

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    padding: 20px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    padding: var(--medium-indent);
  }
`;

export const Title = styled.p<TitleProps>`
  font-weight: 700;
  font-size: 18px;

  color: var(--black-color);
  text-shadow: 2px 2px 4px
    ${({ theme }) =>
      theme === ThemeEnum.Dark
        ? 'var(--white-transparent-color)'
        : 'var(--black-transparent-color)'};

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  color: var(--black-color);
  border: none;
  outline: none;
  text-shadow: 2px 2px 4px var(--black-transparent-color);

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;

export const Content = styled.div`
  padding: var(--small-indent);
  height: auto;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    padding: var(--medium-indent);
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    padding: var(--large-indent);
  }
`;
