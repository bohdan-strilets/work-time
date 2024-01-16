import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';
import { ItemProps, DataProps } from 'types/props/StatisticsProps';
import { ThemeEnum } from 'types/enums/ThemeEnum';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--medium-indent);

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin-bottom: var(--large-indent);
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 900;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 30px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: var(--medium-indent);
  padding: var(--small-indent);

  border-radius: 5px;
  box-shadow: var(--main-shadow);

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    padding: var(--medium-indent);
  }
`;

export const Data = styled.div<DataProps>`
  width: 100%;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: ${({ isThereData }) => (isThereData ? '60%' : '100%')};
  }
`;

export const List = styled.ul`
  margin-bottom: var(--small-indent);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    margin-bottom: var(--medium-indent);
  }
`;

export const Item = styled.li<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 10px;

  :nth-of-type(odd) {
    background-color: ${({ theme }) => (theme === ThemeEnum.Dark ? '#424242' : '#f2f2f2')};
    border-radius: 5px;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    padding: var(--small-indent);
  }
`;

export const Property = styled.p`
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 16px;
  }
`;

export const Value = styled.p`
  color: var(--green-color);

  @media screen and (max-width: ${ScreenWidth.preTablet}) {
    padding: 0 0 0 var(--medium-indent);
  }
`;
