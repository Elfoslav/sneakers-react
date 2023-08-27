import React, { useEffect, useState } from 'react';
import CloseIcon from './icons/CloseIcon';
import './Modal.scss';

interface ModalProps {
  headerText?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ headerText, isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [isAnimationOpen, setIsAnimationOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setIsAnimationOpen(true);
    } else {
      setIsAnimationOpen(false);
      const timeoutId = setTimeout(() => {
        setShowModal(false);
      }, 300);

      // Clear the timeout on unmount
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsAnimationOpen(false);
    const timeoutId = setTimeout(() => {
      onClose();
    }, 300);

    // Clear the timeout on unmount
    return () => clearTimeout(timeoutId);
  }

  return (
    <div className={showModal ? '' : 'd-none'}>
      <div className={`modal-overlay ${isAnimationOpen ? 'open' : 'closed'}`} onClick={closeModal}>
        <div className={`modal ${isAnimationOpen ? 'open' : 'closed'}`} onClick={(e) => e.stopPropagation()}>
          {headerText && (
            <div className="modal-header">
              <h2 className="header-text">{headerText}</h2>
              <CloseIcon size={20} onClick={closeModal} />
            </div>
          )}
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
