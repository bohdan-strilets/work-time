import styled from '@emotion/styled';
import { TextProps } from 'types/props/GreegingsProps';

export const Text = styled.p<TextProps>`
  line-height: 2;
  margin-bottom: var(--small-indent);
  color: ${({ textColor }) => (textColor ? textColor : 'var(--black-color)')};

  :last-child {
    margin-bottom: 0;
  }
`;
