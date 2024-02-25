import styled from '@emotion/styled';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';

export const List = styled.ul`
  margin-bottom: var(--medium-indent);
`;

export const Item = styled.li`
  padding: 5px;

  border-bottom: 1px solid var(--gray-color);
  color: #cccccc;

  :last-child {
    border-bottom: none;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Value = styled.p`
  @media screen and (max-width: ${ScreenWidth.preTablet}) {
    padding-top: 10px;
    font-weight: 700;
  }
`;
