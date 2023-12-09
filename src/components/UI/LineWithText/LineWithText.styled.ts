import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  margin: var(--medium-indent) 0;
`;

export const Line = styled.div`
  border-bottom: 1px solid var(--gray-color);
`;

export const Label = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 0 var(--small-indent);
  background-color: var(--white-color);
`;
