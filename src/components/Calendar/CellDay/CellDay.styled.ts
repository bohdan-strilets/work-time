import styled from "@emotion/styled";
import { CellProps } from "types/props/CellDayProps";
import ScreenWidth from "utilities/ScreenWidth";

export const Cell = styled.li<CellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-weight: 400;

  width: calc((100% - 14 * 2px) / 7);
  height: 45px;
  margin: 2px;
  padding: 5px;

  border: 1px solid var(--gray-color);
  border-radius: 5px;
  background-color: ${({ date, areEqual }) => {
    if (date instanceof Date && areEqual) {
      return areEqual(date, new Date()) ? "var(--green-color)" : "";
    }
    if (!date) {
      return "#f2f2f2";
    }
  }};
  box-shadow: ${({ selectedDate, areEqual, date }) => {
    if (selectedDate && areEqual && date) {
      return areEqual(selectedDate, date)
        ? "0px 0px 8px -1px var(--black-transparent-color)"
        : "";
    }
  }};

  cursor: pointer;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    justify-content: space-between;

    font-weight: 500;
    font-size: 14px;

    height: 100px;
    padding: 10px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    height: 130px;
    margin: 3px;
  }
`;
