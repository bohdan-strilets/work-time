import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Wrapper = styled.div`
  margin-top: var(--medium-indent);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: -2px;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    margin: -3px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    justify-content: space-between;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc((100% - 6 * 2px) / 3);
  margin: 2px;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: calc((100% - 10 * 3px) / 5);
    margin: 3px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 100px;
  }
`;
