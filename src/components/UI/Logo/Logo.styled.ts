import styled from "@emotion/styled";
import ScreenWidth from "utilities/ScreenWidth";

export const Text = styled.p`
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
