import React from 'react';
import Modal from '../Modal';
import { useSneakerContext } from './SneakerContext';
import SneakersForm from './SneakersForm';

function SneakersFormModal() {
  const { isFormModalOpened, openFormModal, closeFormModal, unselectSneaker } = useSneakerContext();

  const open = () => {
    openFormModal();
  };

  const close = () => {
    closeFormModal();
    unselectSneaker();
  };

  return (
    <div className="sneakers-form-moda">
      <Modal
        isOpen={isFormModalOpened}
        onClose={close}
        headerText="Add sneakers to your collection"
      >
        <SneakersForm />
      </Modal>
    </div>
  );
}

export default SneakersFormModal;
