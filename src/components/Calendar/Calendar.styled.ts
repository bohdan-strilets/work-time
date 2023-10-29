import styled from "@emotion/styled";
import ScreenWidth from "utilities/ScreenWidth";

export const WeekdaysList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DayName = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  width: 100%;
  height: 50px;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    height: 70px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -2px;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin: -3px;
  }
`;

export const DayOfMonth = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    justify-content: end;
  }
`;

export const DayStatus = styled.p`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`;
