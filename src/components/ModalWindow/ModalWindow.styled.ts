import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const Body = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 600px;
  max-height: 500px;
  overflow-y: auto;

  border-radius: 5px;
  background-color: var(--white-color);
  box-shadow: var(--main-shadow);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  border-bottom: 1px solid var(--gray-color);
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const Content = styled.div`
  padding: 15px;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);

  width: 100%;
  height: 8px;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: linear-gradient(to right, #ff416c, yellow, #ff4b2b);
  background-size: 200% 100%;
  animation: moveGradient 10s linear infinite;

  @keyframes moveGradient {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
