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
