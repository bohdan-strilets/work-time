import styled from '@emotion/styled';
import { WrapperProps } from 'types/props/DiagramProps';

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? width : '')};
  height: auto;
`;
