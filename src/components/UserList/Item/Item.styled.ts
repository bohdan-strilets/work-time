import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Wrapper = styled.li`
  padding: var(--small-indent);
  margin-bottom: var(--medium-indent);

  border: 1px solid var(--gray-color);
  border-radius: 10px;
  box-shadow: var(--main-shadow);

  :last-child {
    margin-bottom: 0;
  }
`;

export const FirstFloor = styled.div`
  @media screen and (min-width: ${ScreenWidth.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AvatarWrapper = styled.div`
  margin-bottom: var(--small-indent);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    align-items: center;
    width: 400px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin-bottom: 0;
  }
`;

export const NameWrapper = styled.div`
  margin-left: var(--small-indent);
`;

export const Name = styled.p`
  font-weight: 900;
  font-size: 24px;

  @media screen and (max-width: ${ScreenWidth.preTablet}) {
    margin-top: var(--small-indent);
  }
`;

export const Id = styled.p`
  color: var(--gray-color);
  font-size: 12px;
`;

export const PropertyWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 5px;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: 400px;
  }
`;

export const KeyValue = styled.div`
  margin-left: var(--small-indent);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Property = styled.p`
  font-weight: 700;
`;

export const Value = styled.p`
  margin-left: 10px;
`;

export const Hours = styled.span`
  font-weight: 900;
  font-size: 22px;
`;

export const Description = styled.p`
  display: none;
  line-height: 2;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    display: block;
  }
`;
