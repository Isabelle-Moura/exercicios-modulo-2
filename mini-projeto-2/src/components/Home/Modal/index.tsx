import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardButtons } from "../Card/style";
import {
  BoxModal,
  ButtonsWrapper,
  ExternalBoxModal,
  ModalTitle,
  ButtonsModal,
} from "./style";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

type ModalProps = {
  closeModal: () => void;
  openModal: () => void;
};

const Modal = ({ closeModal, openModal }: ModalProps) => {
  return (
    <ExternalBoxModal>
      <BoxModal>
        <header>
          <CardButtons onClick={closeModal}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="xl"
              style={{ color: "#3a72f8", marginLeft: "380px" }}
            />
          </CardButtons>
        </header>

        <ModalTitle>DESEJA REALMENTE EXCLUIR ESTE CARD?</ModalTitle>

        <ButtonsWrapper>
          <ButtonsModal variant="SECONDARY" onClick={closeModal}>
            NÃO
          </ButtonsModal>

          <ButtonsModal variant="MAIN" onClick={openModal}>
            SIM
          </ButtonsModal>
        </ButtonsWrapper>
      </BoxModal>
    </ExternalBoxModal>
  );
};

export default Modal;
