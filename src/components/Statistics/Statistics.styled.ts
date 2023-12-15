import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const List = styled.ul`
  margin-bottom: var(--large-indent);

  :last-child {
    margin-bottom: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 10px;

  :nth-of-type(odd) {
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    padding: var(--small-indent);
  }
`;

export const Property = styled.p`
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 16px;
  }
`;

export const Value = styled.p`
  color: var(--green-color);

  @media screen and (max-width: ${ScreenWidth.preTablet}) {
    padding: 0 0 0 var(--medium-indent);
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: var(--small-indent);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 30px;
  }
`;
