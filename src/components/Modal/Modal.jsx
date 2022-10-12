import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export default function Modal({ children }) {
  return createPortal(
    <Overlay>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
}
