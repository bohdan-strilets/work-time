import styled from "@emotion/styled";
import ScreenWidth from "utilities/ScreenWidth";

export const Wrapper = styled.div`
  width: ${ScreenWidth.mobile};
  margin: 0 auto;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: ${ScreenWidth.tablet};
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: ${ScreenWidth.desktop};
  }
`;
