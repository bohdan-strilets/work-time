import styled from '@emotion/styled';
import { CellProps } from 'types/props/CellDayProps';
import ScreenWidth from 'utilities/ScreenWidth';
import { Status } from 'types/enums/StatusEnum';
import workDayBg from 'Assets/images/work-day-bg.jpg';
import dayOffBg from 'Assets/images/day-off-bg.jpg';
import vacationDayBg from 'Assets/images/vacation-day-bg.jpg';
import slickLeaveBg from 'Assets/images/sick-leave-day-bg.jpg';
import { ContentProps } from 'types/props/CellDayProps';
import { ThemeEnum } from 'types/enums/ThemeEnum';

export const Cell = styled.li<CellProps>`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-weight: 400;

  width: calc((100% - 14 * 2px) / 7);
  height: 45px;
  margin: 2px;
  padding: 5px;

  border: ${({ date, areEqual }) =>
    areEqual && date && areEqual(new Date(), date)
      ? '5px solid var(--black-transparent-color)'
      : '1px solid var(--gray-color)'};
  border-radius: 5px;
  background: ${({ status }) => {
    if (status && status === Status.work) {
      return `url(${workDayBg})`;
    }
    if (status && status === Status.dayOff) {
      return `url(${dayOffBg})`;
    }
    if (status && status === Status.vacation) {
      return `url(${vacationDayBg})`;
    }
    if (status && status === Status.sickLeave) {
      return `url(${slickLeaveBg})`;
    }
  }};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: ${({ areEqual, date }) =>
    areEqual && date && areEqual(new Date(), date) ? 'var(--main-shadow)' : ''};

  cursor: pointer;
  transition: box-shadow var(--hover-effect);

  :hover,
  :focus {
    box-shadow: var(--main-shadow);
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    justify-content: space-between;

    font-weight: 500;
    font-size: 14px;

    height: 100px;
    padding: 10px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-weight: 600;
    height: 130px;
    margin: 3px;
  }
`;

export const Content = styled.div<ContentProps>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 5px;

  background-color: ${({ theme }) =>
    theme === ThemeEnum.Dark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
`;
