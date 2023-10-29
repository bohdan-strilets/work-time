import styled from "@emotion/styled";
import ScreenWidth from "utilities/ScreenWidth";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const CurrentDate = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;

  width: 170px;
  height: 30px;
  padding: 5px;

  border: 2px solid var(--gray-color);
  border-radius: 5px;
`;

export const DropdownList = styled.select`
  width: 170px;
  height: 30px;
  padding: 5px;

  font-family: inherit;
  font-size: inherit;

  border: 2px solid var(--gray-color);
  border-radius: 5px;
  outline: none;
`;
