import React from 'react';
import Modal from './Modal';
import Button from './Button';

interface ModalProps {
  headerText?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
}

const ConfirmDeleteModal: React.FC<ModalProps> = ({ headerText, isOpen, onClose, onSubmit, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerText={`${headerText ? headerText : 'Delete :-('}`}
    >
      <div className="modal-body">
        {children}
      </div>

      <div className="footer-buttons">
        <Button text="Confirm" onClick={onSubmit} />
        <Button text="Cancel" onClick={onClose} />
      </div>
    </Modal>
  );
}

export default ConfirmDeleteModal;
