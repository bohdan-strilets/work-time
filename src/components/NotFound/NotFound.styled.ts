import styled from '@emotion/styled';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';

export const Wrapper = styled.div`
  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-bottom: var(--medium-indent);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 55%;
    margin-bottom: 0;
    border-right: 1px solid var(--gray-color);
  }
`;

export const ErrorCode = styled.p`
  font-size: 120px;
  font-weight: 900;
  color: var(--accent-color);

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-size: 180px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-size: 24px;
  }
`;

export const RightSide = styled.div`
  width: 100%;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 40%;
  }
`;

export const Subbtitle = styled.p`
  margin-bottom: var(--medium-indent);
  text-align: center;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin-bottom: var(--large-indent);
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: var(--medium-indent);

  :last-child {
    margin-right: 0;
  }
`;
