import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 30px;
  margin-right: 10px;
  padding: 0;

  outline: none;
  border: none;
  background-color: transparent;
  color: var(--black-color);

  transition: color var(--hover-effect);
  cursor: pointer;

  :hover,
  :focus {
    color: var(--accent-color);
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    margin-right: var(--small-indent);
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin-right: var(--medium-indent);
  }
`;
