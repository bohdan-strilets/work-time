import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--large-indent) 0;
  margin-top: var(--large-indent);

  border-top: 1px solid var(--black-color);
`;

export const Copyright = styled.p`
  font-weight: 700;
`;

export const Studio = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  text-transform: uppercase;

  width: 40px;
  height: 40px;

  background-color: var(--green-color);
  color: var(--white-color);
  border-radius: 3px;
  box-shadow: var(--main-shadow);

  animation: ${pulse} 2s infinite;
`;
