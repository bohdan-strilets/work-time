import styled from '@emotion/styled';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  width: 30px;
  height: 30px;
  padding: 0;

  color: var(--black-color);
  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--accent-color);
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: 50px;
  }
`;
