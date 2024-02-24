import styled from '@emotion/styled';
import { IoCalendar } from 'react-icons/io5';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';

export const Text = styled.p`
  position: relative;

  font-size: 34px;
  font-family: var(--second-font);
  text-align: center;
  text-transform: uppercase;

  color: var(--accent-color);
  text-shadow: 8px 8px 34px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 60px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-size: 120px;
  }
`;

export const Background = styled.span`
  position: absolute;
  top: 47%;
  left: 20%;
  transform: translateY(-50%);
  z-index: -1;

  width: 22px;
  height: 24px;

  background-color: var(--accent-color);
  border-radius: 50%;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    top: 48%;
    width: 35px;
    height: 40px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    top: 47%;
    left: 20%;

    width: 65px;
    height: 80px;
  }
`;

export const Icon = styled(IoCalendar)`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);

  width: 8px;
  height: 8px;

  background-color: var(--white-color);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 15px;
    height: 15px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    left: 50%;
    width: 35px;
    height: 35px;
  }
`;

export const Slogan = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: center;

  color: var(--gray-color);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-size: 24px;
  }
`;
