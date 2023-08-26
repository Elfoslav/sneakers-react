import React, { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useSneakerContext } from './SneakerContext';
import Button from '../Button';
import './SneakersHeader.scss';
import SneakersSearchForm from './SneakersSearchForm';

function SneakersFormModal() {
  const { openFormModal, updateSearchText } = useSneakerContext();

  const onSearch = (searchText: string) => {
    updateSearchText(searchText);
  };

  // Create a debounced version of the onSearch function
  const debouncedOnSearch = useDebouncedCallback(onSearch, 350);

  return (
    <div className="sneakers-header">
      <h1>Your collection</h1>
      <div className="flex gap-20">
        <SneakersSearchForm onSearch={debouncedOnSearch} />
        <Button iconText="+" onClick={openFormModal} text="Add new sneakers"/>
      </div>
    </div>
  );
}

export default SneakersFormModal;
