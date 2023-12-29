import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';
import { DateWindowProps } from 'types/props/ControllersProps';

export const Wrapper = styled.div`
  @media screen and (min-width: ${ScreenWidth.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 15px;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin-bottom: 0;
    justify-content: space-evenly;
  }
`;

export const DateWindow = styled.p<DateWindowProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? width : '')};
  height: 30px;
  padding: 0 10px;
  margin: ${({ margin }) => (margin ? margin : '')};

  border: 1px solid var(--gray-color);
  border-radius: 3px;
  background-color: #ffffff;
  color: #000000;

  @media screen and (max-width: ${ScreenWidth.preTablet}) {
    font-size: 14px;
  }
`;
