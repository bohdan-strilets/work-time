import styled from '@emotion/styled';
import { StatusProps } from 'types/props/UserDataProps';

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 38px;
  font-weight: 900;
`;

export const Status = styled.div<StatusProps>`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  box-shadow: var(-main-shadow);
  background-color: ${({ isActivateed }) =>
    isActivateed ? 'var(--green-color)' : 'var(--gray-color)'};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--gray-color);
  padding: 20px;

  :last-child {
    border-bottom: none;
  }
`;

export const Property = styled.p`
  font-weight: 700;
`;
