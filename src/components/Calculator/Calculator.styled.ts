import styled from '@emotion/styled';
import ScreenWidth from 'utilities/ScreenWidth';

export const Text = styled.p`
  color: var(--green-color);
  margin-bottom: var(--medium-indent);
`;

export const Wrapper = styled.div`
  margin-bottom: var(--small-indent);

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${ScreenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: var(--medium-indent);
`;

export const Label = styled.p`
  margin-right: var(--small-indent);
`;

export const InputForHours = styled.input`
  width: 100px;
  height: 35px;

  text-align: center;
  font-weight: 700;

  border: 1px solid var(--gray-color);
  border-radius: 5px;
  outline: none;

  :hover,
  :focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const NumberField = styled.input`
  width: 100%;
  height: 130px;

  text-align: center;
  font-size: 60px;
  font-weight: 900;

  color: var(--accent-color);
  outline: none;
  border-radius: 5px;
  border: 1px solid var(--gray-color);

  :hover,
  :focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const ResultWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 130px;

  text-align: center;
  font-size: 60px;
  font-weight: 900;

  color: var(--green-color);
  background-color: var(--gray-color);
  border-radius: 5px;
  border: 1px solid var(--gray-color);
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  margin-bottom: var(--small-indent);

  border-radius: 5px;
  border: 1px solid var(--gray-color);
  box-shadow: var(--main-shadow);

  :last-child {
    margin-bottom: 0;
  }
`;

export const Value = styled.p`
  font-weight: 900;
  font-size: 24px;
  color: var(--green-color);
`;

export const ValueWrapper = styled.div`
  display: flex;
`;

export const Prefix = styled.p<{
  fontSize?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}>`
  position: ${({ position }) => (position ? position : '')};
  top: ${({ top }) => (top ? top : '')};
  left: ${({ left }) => (left ? left : '')};
  right: ${({ right }) => (right ? right : '')};
  bottom: ${({ bottom }) => (bottom ? bottom : '')};

  font-weight: 900;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  margin-left: 5px;
`;
