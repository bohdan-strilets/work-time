import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';
import { TextProps, TitleProps } from 'types/props/AboutUsProps';

export const Wrapper = styled.div`
  padding: 0 var(--small-indent);
`;

export const TopSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: var(--large-indent);
  margin-bottom: 100px;

  border-radius: 15px;
  border: 5px solid var(--black-color);
  box-shadow: var(--main-shadow);
`;

export const LogoWrapper = styled.div`
  display: inline-block;
`;

export const Data = styled.div`
  @media screen and (min-width: ${ScreenWidth.desktop}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  width: 100%;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 60%;
  }
`;

export const Text = styled.p<TextProps>`
  font-style: italic;
  line-height: 2.5;

  padding: 0 var(--large-indent);
  margin: ${({ margin }) => (margin ? margin : '')};
`;

export const RightSide = styled.div`
  width: 100%;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    padding: 0 50px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 40%;
  }
`;

export const Title = styled.p<TitleProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '28px')};
  font-weight: 900;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  margin: ${({ margin }) => (margin ? margin : '')};
`;
