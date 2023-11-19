import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-right: var(--medium-indent);

  border-radius: 4px;
  border: 4px solid var(--gray-color);
  box-shadow: var(--main-shadow);
`;

export const UserData = styled.div`
  width: 100%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;

  @media screen and (max-width: ${ScreenWidth.preDesktop}) {
    font-size: 16px;
  }
`;

export const Profession = styled.p`
  text-align: center;
  background-color: var(--accent-color);
  color: var(--black-color);
  border-radius: 3px;
  text-shadow: 3px 3px 5px var(--black-transparent-color);

  @media screen and (max-width: ${ScreenWidth.preDesktop}) {
    font-size: 12px;
    width: 100%;
  }
`;
