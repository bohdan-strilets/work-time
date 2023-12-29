import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const DayOfMonth = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    justify-content: end;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DayStatus = styled.p`
  padding: 0 5px;
  background-color: var(--black-color);
  color: var(--white-color);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-weight: 500;
    font-size: 12px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  margin-left: 10px;
`;

export const AdditionalHours = styled.div`
  position: absolute;
  top: -8px;
  left: -6px;
  transform: rotate(45deg);

  width: 15px;
  height: 20px;
  background-color: var(--green-color);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    top: -25px;
    left: -15px;

    width: 40px;
    height: 60px;
  }
`;

export const AdditionalHoursLabel = styled.div`
  position: absolute;
  bottom: 14px;
  right: 0px;
  transform: rotate(-40deg);
`;
