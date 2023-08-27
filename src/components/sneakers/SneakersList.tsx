import React from 'react';
import { useGetSneakers } from '../../services/SneakersService';
import { useSneakerContext } from './SneakerContext';
import  './SneakersList.scss';
import Sneaker from '../../models/Sneaker';

function SneakersList() {
  const { searchText, filterName, selectSneaker, openFormModal, openDeleteModal } = useSneakerContext();
  const { data, isLoading, isError } = useGetSneakers(searchText, filterName);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const onSneakerClick = (sneaker: Sneaker) => {
    selectSneaker(sneaker);
    openFormModal();
  };

  const onDeleteClick= (sneaker: Sneaker) => {
    selectSneaker(sneaker);
    openDeleteModal();
  };

  return (
      <div className="sneakers-list">
        {data && data.length > 0 ? (
          data.map((sneaker) => (
            <div key={sneaker.id} className="sneakers-item" onClick={() => { onSneakerClick(sneaker) }}>
              <div className="flex space-between">
                <h2 className="title">{sneaker.name}</h2>
                <img
                  className="delete-icon"
                  src="/icons/delete.svg"
                  alt="delete"
                  onClick={(e) => { e.stopPropagation(); onDeleteClick(sneaker) }}
                />
              </div>
              <div className="brand">{sneaker.brand}</div>
              <div className="sneakers-item-details">
                <div>
                  <div className="detail-value">{sneaker.year}</div>
                  <div className="detail-label">Year</div>
                </div>
                <div>
                  <div className="detail-value">{sneaker.size}</div>
                  <div className="detail-label">Size</div>
                </div>
                <div>
                  <div className="detail-value">{sneaker.price}</div>
                  <div className="detail-label">Price</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-column justify-content-center mx-auto">
            <img src="/images/sneakers-search.svg" width={400} alt="sneakers empty search" />
            <div className="text-center mt-30">
              <p>Search better.</p>
              <p>There is nothing like this in your collection.</p>
            </div>
          </div>
        )}
      </div>
  );
}

export default SneakersList;
