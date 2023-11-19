import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow-y: auto;

  width: 100vw;
  height: 100vh;

  background-color: var(--black-color);
  color: var(--gray-color);
`;

export const Content = styled.div`
  padding: 15px;
`;
