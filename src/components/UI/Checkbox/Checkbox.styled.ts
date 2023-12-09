import styled from '@emotion/styled';
import { WrapperProps, CustomCheckboxProps, ChildrenWrapperProps } from 'types/props/CheckboxProps';

export const Wrapper = styled.label<WrapperProps>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : '')};
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  :focus + .checkbox {
    outline: 3px solid rgba(19, 126, 219, 0.3);
  }
`;

export const CustomCheckbox = styled.div<CustomCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 22px;
  height: 22px;
  margin-right: 10px;

  color: var(--white-color);
  background-color: ${({ checked }) => (checked ? 'var(--accent-color)' : '')};
  border: 2px solid var(--accent-color);
  border-radius: 3px;

  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;

export const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
  width: ${({ childrenWidth }) => (childrenWidth ? childrenWidth : '')};
`;

export const Label = styled.p`
  font-weight: 500;
`;

export const Error = styled.p`
  margin-top: 10px;
  color: var(--accent-color);
`;
