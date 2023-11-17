import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Text = styled.p`
  @media screen and (min-width: ${ScreenWidth.tablet}) {
    text-align: right;
  }
`;

export const Superscript = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  vertical-align: super;
  color: var(--accent-color);
`;

export const Result = styled.p`
  font-weight: 700;
  font-size: 24px;

  margin-top: 5px;
  color: var(--accent-color);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    text-align: right;
  }
`;
