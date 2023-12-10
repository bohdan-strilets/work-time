import styled from '@emotion/styled';

export const Text = styled.p`
  margin-bottom: var(--medium-indent);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-bottom: var(--medium-indent);
`;

export const Input = styled.input`
  display: none;
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;

  border: none;
  background-color: var(--gray-color);
  color: var(--black-color);
  border-radius: 5px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 50px 0px rgba(255, 255, 255, 0.1), var(--main-shadow);

  font-family: inherit;
  font-weight: 700;
  font-size: 30px;

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--black-color);
    color: var(--white-color);
  }
`;

export const UploadButtonLabel = styled.span`
  margin-left: var(--medium-indent);
`;
