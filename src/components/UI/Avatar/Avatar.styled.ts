import styled from '@emotion/styled';
import { WrapperProps } from 'types/props/AvatarProps';

export const Wrapper = styled.div<WrapperProps>`
  min-width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
  margin: ${({ margin }) => (margin ? margin : '')};

  background-image: ${({ url }) => `url(${url})`};
  background-color: var(--gray-color);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '')};
  border: ${({ border }) => (border ? border : '')};
  box-shadow: var(--main-shadow);
`;
