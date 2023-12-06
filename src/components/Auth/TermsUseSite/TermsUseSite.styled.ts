import styled from '@emotion/styled';
import { ListProps } from 'types/props/TermsUseSiteProps';

export const Title = styled.p`
  font-weight: 700;
  font-size: 26px;
`;

export const Date = styled.p`
  margin: var(--small-indent) 0;
`;

export const List = styled.ul<ListProps>`
  margin: ${({ margin }) => (margin ? margin : '')};
  list-style: disc;
`;

export const Accent = styled.span`
  font-weight: 700;
`;
