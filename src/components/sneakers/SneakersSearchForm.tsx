import React, { useState, useEffect } from 'react';
import './SneakersSearchForm.scss';

interface SneakersSearchFormProps {
  onSearch: (query: string) => void;
}

const SneakersSearchForm: React.FC<SneakersSearchFormProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">
          <img src="/icons/search.svg" />
        </button>
      </div>
    </form>
  );
};

export default SneakersSearchForm;
