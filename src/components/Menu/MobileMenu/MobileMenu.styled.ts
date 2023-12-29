import styled from '@emotion/styled';
import { ThemeEnum } from 'types/enums/ThemeEnum';
import { ContentProps } from 'types/props/MobileMenuProps';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow-y: auto;

  width: 100vw;
  height: 100vh;

  background-color: var(--black-color);
  color: var(--gray-color);
`;

export const Content = styled.div<ContentProps>`
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === ThemeEnum.Dark ? 'var(--white-color)' : 'var(--black-color)'};
`;
