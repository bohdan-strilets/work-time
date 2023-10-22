import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div<{
  registrationUrl: string;
  loginUrl: string;
  type: "registration" | "login";
}>`
  order: ${({ type }) => (type === "registration" ? 1 : 2)};
  min-width: 550px;
  height: 650px;

  background: ${({ registrationUrl, loginUrl, type }) =>
    type === "registration" ? `url(${registrationUrl})` : `url(${loginUrl})`};
  transition: background ease-in-out 0.5s;
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 70px;

  background-color: var(--black-transparent-color);
`;

export const Title = styled.p`
  font-size: 42px;
  font-family: var(--second-font);
  text-transform: uppercase;
  text-align: center;

  color: var(--white-color);
  margin-bottom: var(--small-indent);
`;

export const Text = styled.p`
  margin-bottom: var(--large-indent);
  padding-bottom: var(--large-indent);

  font-size: 18px;
  text-align: center;

  color: var(--white-color);
  border-bottom: 1px dashed var(--white-color);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 35px;

  background-color: transparent;
  border: 1px solid var(--gray-color);
  color: var(--white-color);
  outline: none;

  cursor: pointer;
  transition: background-color var(--hover-effect),
    border-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
  }
`;

export const RightSide = styled.div<{ type: "registration" | "login" }>`
  order: ${({ type }) => (type === "registration" ? 2 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;
