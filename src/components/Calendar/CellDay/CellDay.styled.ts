import styled from "@emotion/styled";
import { CellProps } from "types/props/CellDayProps";
import ScreenWidth from "utilities/ScreenWidth";
import { Status } from "types/enums/StatusEnum";

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

  border: ${({ date, areEqual }) =>
    areEqual && date && areEqual(new Date(), date)
      ? "5px solid var(--black-transparent-color)"
      : "1px solid var(--gray-color)"};
  border-radius: 5px;
  background-color: ${({ status }) => {
    if (status && status === Status.work) {
      return "#FF6B6B";
    }
    if (status && status === Status.dayOff) {
      return "#6BFF88";
    }
    if (status && status === Status.vacation) {
      return "#6B88FF";
    }
    if (status && status === Status.sickLeave) {
      return "#FFD700";
    }
  }};
  box-shadow: ${({ areEqual, date }) =>
    areEqual && date && areEqual(new Date(), date) ? "var(--main-shadow)" : ""};

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
