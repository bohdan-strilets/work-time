import styled from '@emotion/styled';
import { RiLoaderFill } from 'react-icons/ri';
import { WrapperProps } from 'types/props/LoaderProps';

export const Wrapper = styled.div<WrapperProps>`
  position: relative;

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
  animation: loaderEffect 1500ms linear infinite;
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 14px;
  font-weight: 700;
  color: var(--black-color);
`;
