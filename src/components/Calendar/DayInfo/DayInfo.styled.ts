import styled from "@emotion/styled";
import { ContainerProps, TextProps } from "types/props/DayInfoProps";

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};

  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  color: ${({ color }) => (color ? color : "")};
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

export const ExtraTimeStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  color: var(--green-color);
  border: 2px solid var(--green-color);
  border-radius: 5px;
`;

export const Item = styled.li`
  padding: 5px;
  border-bottom: 1px solid var(--gray-color);
  color: #cccccc;

  :last-child {
    border-bottom: none;
  }
`;
