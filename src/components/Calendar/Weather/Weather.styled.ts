import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';
import { TemperatureValueProps } from 'types/props/WeatherProps';

export const Wrapper = styled.div`
  border-bottom: 1px solid var(--gray-color);
  margin-bottom: var(--small-indent);
  padding-bottom: var(--small-indent);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    justify-content: center;
  }
`;

export const LocationText = styled.p`
  margin-left: 5px;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    justify-content: center;
  }
`;

export const ConditionWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    justify-content: center;
  }
`;

export const TemperatureValue = styled.p<TemperatureValueProps>`
  margin: ${({ margin }) => (margin ? margin : '')};
  color: ${({ color }) => (color ? color : '')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  font-weight: 700;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 10px;
`;
