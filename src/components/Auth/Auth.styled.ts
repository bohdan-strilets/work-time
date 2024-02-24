import styled from '@emotion/styled';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';
import { LeftSideProps, TitleProps, RightSideProps } from 'types/props/AuthProps';

export const Wrapper = styled.div`
  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div<LeftSideProps>`
  order: ${({ type }) => (type === 'registration' ? 1 : 2)};
  min-width: 100%;
  height: 460px;

  background: ${({ registrationUrl, loginUrl, type }) =>
    type === 'registration' ? `url(${registrationUrl})` : `url(${loginUrl})`};
  transition: background ease-in-out 0.5s;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    min-width: 400px;
    height: 650px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    min-width: 550px;
  }
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 20px;

  background-color: var(--black-transparent-color);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    padding: 35px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    padding: 70px;
  }
`;

export const Title = styled.p<TitleProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '')};
  font-family: var(--second-font);
  text-transform: uppercase;
  text-align: center;

  color: ${({ color }) => (color ? color : '')};
  margin-bottom: var(--small-indent);
`;

export const Text = styled.p`
  margin-bottom: var(--large-indent);
  padding-bottom: var(--large-indent);

  font-size: 16px;
  text-align: center;

  color: var(--white-color);
  border-bottom: 1px dashed var(--white-color);

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 280px;
  height: 35px;

  background-color: var(--white-color);
  border: none;
  color: var(--black-color);
  outline: none;

  cursor: pointer;
  transition: background-color var(--hover-effect), border-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 300px;
  }
`;

export const RightSide = styled.div<RightSideProps>`
  order: ${({ type }) => (type === 'registration' ? 2 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 10px;
`;
