import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -2px;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin: -3px;
  }
`;
