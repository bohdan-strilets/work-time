import styled from '@emotion/styled';
import { FaCalendarAlt } from 'react-icons/fa';
import { WrapperProps } from 'types/props/DateInputProps';

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => (width ? width : '')};

  & .react-datepicker-wrapper,
  & .react-datepicker__input-container {
    width: 100%;
  }

  & input {
    width: 100%;
    height: ${({ height }) => (height ? height : '')};
    padding: 0 10px;
    margin: ${({ margin }) => (margin ? margin : '')};

    outline: none;
    border: 1px solid var(--gray-color);
    border-radius: 3px;

    :focus {
      border-color: var(--accent-color);
    }
  }

  & .react-datepicker-popper,
  & .react-datepicker,
  & .react-datepicker__month-container {
    width: 100%;
    z-index: 999;
    font-family: var(--main-font);
  }

  & .react-datepicker__header {
    width: 100%;
    background-color: var(--gray-color);
    border: none;
  }

  & .react-datepicker__day-names,
  & .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  & .react-datepicker__day-name {
    width: 100px;
  }

  & .react-datepicker__day {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 40px;

    transition: background-color var(--hover-effect);

    :hover,
    :focus {
      background-color: var(--gray-color);
    }

    &.react-datepicker__day--selected {
      background-color: var(--accent-color);
    }

    &.react-datepicker__day--today {
      background-color: var(--green-color);
      border-radius: 0.3rem;
    }
  }
`;

export const Label = styled.p`
  margin-bottom: 5px;
`;

export const Icon = styled(FaCalendarAlt)`
  position: absolute;
  top: 39%;
  right: 10px;
  z-index: 99;
  transform: translateY(-50%);
  color: #000000;
`;
