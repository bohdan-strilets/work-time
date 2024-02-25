import styled from '@emotion/styled';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: var(--small-indent);
  margin-bottom: var(--large-indent);

  border: 1px solid var(--gray-color);
  border-radius: 5px;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: var(--medium-indent);
  }
`;

export const Group = styled.div`
  @media screen and (min-width: ${ScreenWidth.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  margin-bottom: 5px;

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    margin-bottom: var(--small-indent);
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin-right: var(--small-indent);
    margin-bottom: 0;
  }
`;
