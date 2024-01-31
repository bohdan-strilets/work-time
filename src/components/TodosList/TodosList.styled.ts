import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: -10px;
  }
`;
