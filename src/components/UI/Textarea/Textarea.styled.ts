import styled from '@emotion/styled';
import { WrapperProps, InputProps } from 'types/props/TextareaProps';

export const Wrapper = styled.label<WrapperProps>`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin: ${({ margin }) => (margin ? margin : '')};

  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const Label = styled.p`
  margin-bottom: 5px;
`;

export const Required = styled.span`
  margin-left: 5px;
  color: var(--accent-color);
`;

export const Input = styled.textarea<InputProps>`
  line-height: 2;

  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  padding: var(--small-indent);

  background-color: #f0f0f0;
  border: none;
  outline: none;
  border-radius: 3px;

  transition: box-shadow var(--hover-effect);
  resize: none;

  :focus {
    box-shadow: 1px 1px 10px 1px rgba(255, 65, 108, 0.5);
  }
`;

export const Error = styled.p`
  margin-top: 5px;
  color: var(--accent-color);
`;
