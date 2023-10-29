import { createPortal } from "react-dom";
import { RiCloseFill } from "react-icons/ri";
import Button from "components/UI/Button";
import useModalWindow from "hooks/useModalWindow";
import { ModalWindowProps } from "types/props/ModalWindowProps";
import {
  Backdrop,
  Body,
  Header,
  Title,
  Content,
  Footer,
} from "./ModalWindow.styled";

const modalRoot = document.getElementById("modal-root") as HTMLDivElement;

const ModalWindow: React.FC<ModalWindowProps> = ({ title, children }) => {
  const { closeModal, backdropClick } = useModalWindow();

  return createPortal(
    <Backdrop onClick={backdropClick}>
      <Body>
        <Header>
          <Title>{title}</Title>
          <Button
            type="button"
            height="35px"
            width="35px"
            icon={<RiCloseFill size={24} />}
            onClick={closeModal}
          />
        </Header>
        <Content>{children}</Content>
        <Footer />
      </Body>
    </Backdrop>,
    modalRoot
  );
};

export default ModalWindow;
