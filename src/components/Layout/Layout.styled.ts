import styled from '@emotion/styled';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: ${ScreenWidth.tablet};
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: ${ScreenWidth.desktop};
  }
`;

export const Content = styled.div`
  padding: 0 10px;
`;
