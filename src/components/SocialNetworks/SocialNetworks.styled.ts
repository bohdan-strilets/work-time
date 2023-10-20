import styled from "@emotion/styled";
import ScreenWidth from "utilities/ScreenWidth";

export const List = styled.ul`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const Item = styled.li`
  position: relative;

  width: 35px;
  height: 35px;

  :hover p,
  :focus p {
    opacity: 1;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 45px;
    height: 45px;
  }
`;

export const Reference = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: var(--black-color);
  color: var(--white-color);

  outline: none;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
  }
`;

export const Label = styled.p`
  position: absolute;
  top: 50%;
  right: 110%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 600;
  font-size: 14px;

  width: 100px;
  height: 30px;

  background-color: var(--gray-color);
  opacity: 0;

  transition: opacity var(--hover-effect);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 16px;
  }
`;
