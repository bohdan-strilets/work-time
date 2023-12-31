import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import workDayBg from 'Assets/images/work-day-bg.jpg';
import dayOffBg from 'Assets/images/day-off-bg.jpg';
import vacationDayBg from 'Assets/images/vacation-day-bg.jpg';
import slickLeaveBg from 'Assets/images/sick-leave-day-bg.jpg';
import { IsAdditionalProps, ImageProps } from 'types/props/ListDaysProps';
import { Status } from 'types/enums/StatusEnum';
import ScreenWidth from 'utilities/ScreenWidth';

export const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: start;

  padding: var(--small-indent);
  margin-bottom: var(--small-indent);

  background: ${`linear-gradient(90deg, var(--white-transparent-color), var(--white-color))`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: left;

  border-radius: 10px;
  box-shadow: var(--main-shadow);

  overflow: hidden;

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Image = styled.div<ImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transform: translateX(-100%);

  width: 600px;
  height: 100%;

  background: ${({ status }) => {
    const gradient = 'linear-gradient(90deg, var(--white-transparent-color), var(--white-color))';
    if (status && status === Status.work) {
      return `${gradient}, url(${workDayBg})`;
    }
    if (status && status === Status.dayOff) {
      return `${gradient}, url(${dayOffBg})`;
    }
    if (status && status === Status.vacation) {
      return `${gradient}, url(${vacationDayBg})`;
    }
    if (status && status === Status.sickLeave) {
      return `${gradient}, url(${slickLeaveBg})`;
    }
  }};

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: left;

  animation: ${slideIn} 1s forwards;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${ScreenWidth.preTablet}) {
    margin-bottom: 5px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const Value = styled.span`
  margin-left: var(--small-indent);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    margin-left: 10px;
  }
`;

export const IsAdditional = styled.div<IsAdditionalProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  width: 25px;
  height: 25px;

  background-color: ${({ additionalHours }) =>
    additionalHours ? 'var(--green-color)' : 'var(--gray-color)'};
  border-radius: 3px;
  color: var(--white-color);
`;
