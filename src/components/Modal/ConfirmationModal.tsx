import React from 'react';
import GenericModal from './GenericModal';
import { CancelButton, ConfirmationButton } from './StyledComponents';
import defaultTheme from '../../themes/defaultTheme';
interface ConfirmationModalProps {
  title?: string;
  content?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ title, content, isOpen, onClose, onConfirm }) => {
  return (
    <GenericModal
      isOpen={isOpen}
      title={title}
      content={content}
      onClose={onClose}
      footer={
        <>
          <CancelButton theme={defaultTheme} onClick={onClose}>Cancel</CancelButton>
          <ConfirmationButton theme={defaultTheme} onClick={onConfirm}>Confirm</ConfirmationButton>
        </>
      }
    />
  );
};

export default ConfirmationModal;
