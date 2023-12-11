import styled from '@emotion/styled';
import { ListProps } from 'types/props/QuickTimingProps';
import ScreenWidth from 'utilities/ScreenWidth';

export const List = styled.ul<ListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: ${({ margin }) => (margin ? margin : '')};

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    flex-wrap: nowrap;
  }
`;

export const Item = styled.li`
  width: calc((100% - 4 * 10px) / 2);
  margin: 10px;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    margin-right: var(--small-indent);
    :last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 25px;

  background-color: var(--gray-color);
  border: none;
  outline: none;
  border-radius: 2px;

  cursor: pointer;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 80px;
  }
`;
