import styled from '@emotion/styled';
import { TextProps, ContainerProps } from 'types/props/FormProps';

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? width : '')};
  margin: 0 auto;
`;

export const Wrapper = styled.form`
  padding: var(--small-indent);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const Text = styled.p<TextProps>`
  margin: ${({ margin }) => (margin ? margin : '')};
  color: ${({ color }) => (color ? color : '')};
`;

export const ReferenceBtn = styled.button`
  text-decoration: underline;

  color: var(--accent-color);
  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;

export const Title = styled.p`
  display: inline-block;

  font-family: var(--second-font);
  font-size: 24px;
  font-weight: 700;

  padding: 0 var(--small-indent);
  margin-bottom: var(--medium-indent);

  background-color: var(--accent-color);
  color: var(--black-color);
  box-shadow: var(--main-shadow);
`;
