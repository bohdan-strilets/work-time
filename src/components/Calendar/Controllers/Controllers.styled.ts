import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.div`
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

  min-width: 170px;
  height: 30px;
  padding: 0 10px;

  border: 1px solid var(--gray-color);
  border-radius: 3px;
  background-color: #ffffff;

  @media screen and (max-width: ${ScreenWidth.preTablet}) {
    min-width: 150px;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
