import styled from '@emotion/styled';
import { TextProps, ListProps } from 'types/props/PrivacyPolicyProps';

export const Title = styled.p`
  font-weight: 700;
  font-size: 26px;
`;

export const Text = styled.p<TextProps>`
  margin: ${({ margin }) => (margin ? margin : '')};
`;

export const Accent = styled.span`
  font-weight: 700;
`;

export const List = styled.ul<ListProps>`
  margin: ${({ margin }) => (margin ? margin : '')};
  list-style: disc;
`;
