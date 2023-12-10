import styled from '@emotion/styled';
import { RiLoaderFill } from 'react-icons/ri';
import { WrapperProps } from 'types/props/LoaderProps';

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${({ margin }) => (margin ? margin : '')};
`;

export const Icon = styled(RiLoaderFill)`
  @keyframes loaderEffect {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  color: var(--accent-color);
  animation: loaderEffect 1000ms linear infinite;
`;
