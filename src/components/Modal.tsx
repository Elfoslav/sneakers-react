import React from 'react';
import CloseIcon from './icons/CloseIcon';
import './Modal.scss';

interface ModalProps {
  headerText?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ headerText, isOpen, onClose, children }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'open' : 'closed'}`} onClick={onClose}>
      <div className={`modal ${isOpen ? 'open' : 'closed'}`} onClick={(e) => e.stopPropagation()}>
        {headerText && (
          <div className="modal-header">
            <h2 className="header-text">{headerText}</h2>
            <CloseIcon size={20} onClick={onClose} />
          </div>
        )}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
