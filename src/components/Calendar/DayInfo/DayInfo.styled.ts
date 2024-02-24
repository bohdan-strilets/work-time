import styled from '@emotion/styled';
import { ContainerProps, TextProps, ExtraTimeStatusProps } from 'types/props/DayInfoProps';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';

export const Container = styled.div<ContainerProps>`
  display: ${({ displayBlock }) => (displayBlock ? 'block' : 'flex')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
`;

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  color: ${({ color }) => (color ? color : '')};
`;

export const NumberHours = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  padding: 0 10px;
  height: 30px;

  color: var(--white-color);
  background-color: var(--green-color);
  border-radius: 5px;
`;

export const ExtraTimeStatus = styled.div<ExtraTimeStatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  color: ${({ additionalHours }) => (additionalHours ? 'var(--green-color)' : 'var(--gray-color)')};
  border-style: solid;
  border-width: 2px;
  border-color: ${({ additionalHours }) =>
    additionalHours ? 'var(--green-color)' : 'var(--gray-color)'};
  border-radius: 5px;
`;

export const List = styled.ul`
  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemLi = styled.li`
  margin-bottom: var(--small-indent);

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    margin-right: var(--small-indent);
    margin-bottom: 0;

    :last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30px;

  background-color: var(--gray-color);
  border: none;
  outline: none;
  color: var(--accent-color);
  box-shadow: var(--main-shadow);

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--black-color);
    color: var(--white-color);
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 80px;
    height: 25px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 100px;
    height: 30px;
  }
`;
