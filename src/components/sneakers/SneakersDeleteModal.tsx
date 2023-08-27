import React from 'react';
import { useSneakerContext } from './SneakerContext';
import SneakersForm from './SneakersForm';
import ConfirmDeleteModal from '../ConfirmDeleteModal';

function SneakersFormModal() {
  const {
    isDeleteModalOpened,
    closeDeleteModal,
    unselectSneaker,
    selectedSneaker,
    deleteSneaker,
    sneakersCount,
    updateSneakersCount,
  } = useSneakerContext();

  const close = () => {
    closeDeleteModal();
    unselectSneaker();
  };

  const onDelete = () => {
    if (selectedSneaker) {
      deleteSneaker(selectedSneaker);
      updateSneakersCount(sneakersCount - 1);
      close();
    }
  }

  return (
    <ConfirmDeleteModal
      isOpen={isDeleteModalOpened}
      onClose={close}
      onSubmit={onDelete}
    >
      <div>
        Do you really want to delete {selectedSneaker?.name} (<b>{selectedSneaker?.brand}</b>)
        made in {selectedSneaker?.year}?
      </div>
    </ConfirmDeleteModal>
  );
}

export default SneakersFormModal;
