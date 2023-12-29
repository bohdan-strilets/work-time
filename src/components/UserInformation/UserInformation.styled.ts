import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Wrapper = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;
  outline: none;
  color: inherit;

  cursor: pointer;
`;

export const Data = styled.div`
  display: none;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: block;
  }
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Email = styled.p`
  font-size: 14px;
  color: var(--gray-color);
`;
