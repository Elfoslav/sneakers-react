import React from 'react';
import Modal from '../Modal';
import { useSneakerContext } from './SneakerContext';
import SneakersForm from './SneakersForm';

function SneakersFormModal() {
  const { isFormModalOpened, closeFormModal, selectedSneaker, unselectSneaker } = useSneakerContext();

  const headerText = selectedSneaker?.name || 'Add sneakers to your collection';

  const close = () => {
    closeFormModal();
    unselectSneaker();
  };

  return (
    <Modal
      isOpen={isFormModalOpened}
      onClose={close}
      headerText={headerText}
    >
      <SneakersForm onSubmit={close} />
    </Modal>
  );
}

export default SneakersFormModal;
