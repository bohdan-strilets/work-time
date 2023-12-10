import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
