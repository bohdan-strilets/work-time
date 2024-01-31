import styled from '@emotion/styled';
import PriorityEnum from 'types/enums/PriorityEnum';
import ScreenWidth from 'utilities/ScreenWidth';
import { ImageProps, PriorityProps } from 'types/props/ExtendedTodoListProps';

export const Item = styled.li`
  width: 95%;
  margin: 10px;

  border-radius: 5px;
  box-shadow: var(--main-shadow);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    width: calc((100% - 4 * 10px) / 2);
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    width: calc((100% - 6 * 10px) / 3);
  }
`;

export const Image = styled.div<ImageProps>`
  position: relative;

  width: 100%;
  height: 170px;
  padding: 10px;

  background: ${({ background }) => background};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Container = styled.div`
  padding: 10px;
`;

export const Date = styled.p`
  position: absolute;
  bottom: 0;
  left: 10px;

  font-size: 18px;
  font-weight: 700;
  color: var(--white-color);

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    font-size: 22px;
  }

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    font-size: 28px;
  }
`;

export const Id = styled.p`
  font-size: 14px;
  color: var(--gray-color);
  margin: 5px 0;

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    margin: 10px 0;
  }
`;

export const StatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Priority = styled.p<PriorityProps>`
  padding: 0 10px;
  color: var(--black-color);
  border-radius: 3px;
  background-color: ${({ priority }) => {
    if (priority === PriorityEnum.Low) {
      return '#22ba38';
    }
    if (priority === PriorityEnum.Medium) {
      return '#c9bc06';
    }
    if (priority === PriorityEnum.High) {
      return '#f22222';
    }
  }};

  @media screen and (min-width: ${ScreenWidth.desktop}) {
    padding: 0 5px;
  }
`;

export const DateBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreatedDate = styled.p`
  font-weight: 700;
`;
