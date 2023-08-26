import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useDeleteSneaker } from '../../services/SneakersService';
import Sneaker from '../../models/Sneaker';

interface SneakerContextType {
  isFormModalOpened: boolean;
  openFormModal: () => void;
  closeFormModal: () => void;
  isDeleteModalOpened: boolean;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
  selectedSneaker: Sneaker | null;
  selectSneaker: (sneaker: Sneaker) => void;
  unselectSneaker: () => void;
  deleteSneaker: (sneaker: Sneaker) => void;
}

const SneakerContext = createContext<SneakerContextType | undefined>(undefined);

export const useSneakerContext = () => {
  const context = useContext(SneakerContext);
  if (!context) {
    throw new Error('useSneakerContext must be used within a SneakerProvider');
  }
  return context;
};

export const SneakerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFormModalOpened, setIsFormModalOpened] = useState<boolean>(false);
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState<boolean>(false);
  const [selectedSneaker, setSelectedSneaker] = useState<Sneaker | null>(null);
  const deleteSneakerMutation = useDeleteSneaker();

  const openFormModal = () => {
    setIsFormModalOpened(true);
  }

  const closeFormModal = () => {
    setIsFormModalOpened(false);
  }

  const openDeleteModal = () => {
    setIsDeleteModalOpened(true);
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpened(false);
  }

  const selectSneaker = (sneaker: Sneaker) => {
    setSelectedSneaker(sneaker);
  };

  const unselectSneaker = () => {
    setSelectedSneaker(null);
  }

  const deleteSneaker = (sneaker: Sneaker) => {
    deleteSneakerMutation.mutateAsync(sneaker.id);
  }

  return (
    <SneakerContext.Provider value={{
      isFormModalOpened,
      openFormModal,
      closeFormModal,
      isDeleteModalOpened,
      openDeleteModal,
      closeDeleteModal,
      selectedSneaker,
      selectSneaker,
      unselectSneaker,
      deleteSneaker,
    }}>
      {children}
    </SneakerContext.Provider>
  );
};
