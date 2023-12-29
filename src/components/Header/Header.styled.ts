import styled from '@emotion/styled';

export const Wrapper = styled.header`
  padding: var(--medium-indent) 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  background: var(--main-gradient);
  border-radius: 3px;

  margin-bottom: var(--medium-indent);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;
