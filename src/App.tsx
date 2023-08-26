import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import './App.scss';
import SneakersList from "./components/sneakers/SneakersList";
import { SneakerProvider } from './components/sneakers/SneakerContext';
import SneakersFormModal from "./components/sneakers/SneakersFormModal";
import SneakersDeleteModal from "./components/sneakers/SneakersDeleteModal";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <SneakerProvider>
          <SneakersList />

          <SneakersFormModal />
          <SneakersDeleteModal />
        </SneakerProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
