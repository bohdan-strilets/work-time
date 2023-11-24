import styled from '@emotion/styled';
import { StatusProps } from 'types/props/UserDataProps';
import ScreenWidth from 'utilities/ScreenWidth';

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 900;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-size: 38px;
  }
`;

export const Status = styled.div<StatusProps>`
  width: 14px;
  height: 14px;

  border-radius: 50%;
  box-shadow: var(--main-shadow);
  background-color: ${({ isActivateed }) =>
    isActivateed ? 'var(--green-color)' : 'var(--gray-color)'};

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 20px;
    height: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--gray-color);
  padding: 20px 0;

  :last-child {
    border-bottom: none;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    padding: 20px 10px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    padding: 20px;
  }
`;

export const Property = styled.p`
  font-weight: 700;
  font-size: 14px;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    padding: 20px;
    font-size: 16px;
  }
`;

export const Value = styled.p`
  font-size: 14px;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 16px;
  }
`;
