import styled from '@emotion/styled';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--small-indent);
`;

export const Logo = styled.h1`
  font-family: var(--second-font);

  @media screen and (max-width: ${ScreenWidth.preDesktop}) {
    font-size: 24px;
  }
`;
