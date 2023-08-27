import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import SneakersList from './components/sneakers/SneakersList';
import { SneakerProvider } from './components/sneakers/SneakerContext';
import SneakersFormModal from './components/sneakers/SneakersFormModal';
import SneakersDeleteModal from './components/sneakers/SneakersDeleteModal';
import SneakersHeader from './components/sneakers/SneakersHeader';
import SneakersSortFilter from './components/sneakers/SneakersSortFilter';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <SneakerProvider>
          <SneakersHeader />
          <SneakersSortFilter className="mb-20" />
          <SneakersList />

          <SneakersFormModal />
          <SneakersDeleteModal />
        </SneakerProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
