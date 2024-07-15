import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, ModalHeader, ModalTitle, CloseButton, ModalBody, ModalFooter } from "./StyledComponents";
import defaultTheme from '../../themes/defaultTheme';
interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
  content?: string;
}

const GenericModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer, content }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay theme={defaultTheme}>
      <ModalContainer theme={defaultTheme} >
        <ModalHeader theme={defaultTheme}>
          <ModalTitle theme={defaultTheme}>{title}</ModalTitle>
          <CloseButton theme={defaultTheme} onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody theme={defaultTheme}>
          {children}
          {content && <p>{content}</p>}
        </ModalBody>
        {footer && <ModalFooter theme={defaultTheme}>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default GenericModal;
