import { createPortal } from "react-dom";
import { RiCloseFill } from "react-icons/ri";

import useModalWindow from "hooks/useModalWindow";
import { ModalWindowProps } from "types/props/ModalWindowProps";
import {
  Backdrop,
  Body,
  Header,
  Title,
  Button,
  Content,
} from "./ModalWindow.styled";

const modalRoot = document.getElementById("modal-root") as HTMLDivElement;

const ModalWindow: React.FC<ModalWindowProps> = ({ title, children }) => {
  const { closeModal, backdropClick } = useModalWindow();

  return createPortal(
    <Backdrop onClick={backdropClick}>
      <Body>
        <Header>
          <Title>{title}</Title>
          <Button type="button" onClick={closeModal}>
            <RiCloseFill size={28} />
          </Button>
        </Header>
        <Content>{children}</Content>
      </Body>
    </Backdrop>,
    modalRoot
  );
};

export default ModalWindow;
