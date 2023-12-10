import styled from '@emotion/styled';
import { TextProps } from 'types/props/FormProps';

export const Text = styled.p<TextProps>`
  margin: ${({ margin }) => (margin ? margin : '')};
  color: ${({ color }) => (color ? color : '')};
`;
