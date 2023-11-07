import styled from "@emotion/styled";
import ScreenWidth from "utilities/ScreenWidth";

export const Text = styled.p`
  margin-bottom: var(--medium-indent);
`;

export const List = styled.ul`
  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

export const Item = styled.li`
  margin-bottom: var(--small-indent);

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    margin-right: var(--small-indent);
    margin-bottom: 0;

    :last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30px;

  border-radius: 3px;
  border: none;
  box-shadow: var(--main-shadow);

  cursor: pointer;
  transition: background-color var(--hover-effect);

  &.negative {
    background-color: var(--accent-color);
  }

  &.positive {
    background-color: var(--green-color);
  }

  :hover,
  :focus {
    background-color: var(--gray-color);
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 120px;
    height: 30px;
  }
`;
