import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import Sneaker from '../models/Sneaker';
import { FILTERS } from '../lib/consts';

const API_URL = 'https://crudcrud.com/api/1a35ec1ba4f84eabb9866ce5cfd8b9e4/sneakers';

// const data: Sneaker[] = [
//   {
//     id: '1',
//     name: 'Air Jordan',
//     brand: 'Nike',
//     price: 250,
//     size: 10,
//     year: 2021,
//   },
//   {
//     id: '2',
//     name: 'Superstar',
//     brand: 'Adidas',
//     price: 120,
//     size: 9,
//     year: 2020,
//   },
//   {
//     id: '3',
//     name: 'Chuck Taylor',
//     brand: 'Converse',
//     price: 80,
//     size: 8,
//     year: 2022,
//   },
//   {
//     id: '4',
//     name: 'Classic Leather',
//     brand: 'Reebok',
//     price: 90,
//     size: 11,
//     year: 2021,
//   },
// ];
const data: Sneaker[] = [];

export const getSneakers = async (query: string = '', filterName: string = ''): Promise<Sneaker[]> => {
  // const response = await axios.get<Sneaker[]>(API_URL);
  // return response.data;
  console.log('getSneakers: ', data, query, filterName);
  let filteredSneakers = data;

  if (query) {
    filteredSneakers = data.filter(sneaker => sneaker.name.toLowerCase().includes(query.toLowerCase()));
  }

  if (filterName === FILTERS.OLDEST) {
    filteredSneakers = filteredSneakers.sort((a, b) => a.year - b.year);
  }

  if (filterName === FILTERS.SMALLEST) {
    filteredSneakers = filteredSneakers.sort((a, b) => a.size - b.size);
  }

  if (filterName === FILTERS.CHEAPEST) {
    filteredSneakers = filteredSneakers.sort((a, b) => a.price - b.price);
  }

  return Promise.resolve(filteredSneakers);
};

export const createSneaker = async (newSneaker: Sneaker): Promise<void> => {
  // await axios.post(API_URL, newSneaker);
  data.push(newSneaker);
};

export const updateSneaker = async (updatedSneaker: Sneaker): Promise<void> => {
  // await axios.put(`${API_URL}/${updatedSneaker.id}`, updatedSneaker);
  const index = data.findIndex(sneaker => sneaker.id === updatedSneaker.id);
  if (index !== -1) {
    data[index] = updatedSneaker;
  }
};

export const deleteSneaker = async (sneakerId: string): Promise<void> => {
  // await axios.delete(`${API_URL}/${sneakerId}`);
  const index = data.findIndex(sneaker => sneaker.id === sneakerId);
  if (index !== -1) {
    data.splice(index, 1);
  }
};

export const useGetSneakers = (searchQuery: string = '', filterName: string = '') => {
  const result = useQuery<Sneaker[], unknown>(['sneakers', searchQuery, filterName], () => getSneakers(searchQuery, filterName));
  return { ...result, count: result.data?.length }
};

export const useCreateSneaker = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, Sneaker>(createSneaker, {
    onSuccess: () => {
      queryClient.invalidateQueries('sneakers');
    },
  });
};

export const useUpdateSneaker = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, Sneaker>(updateSneaker, {
    onSuccess: () => {
      queryClient.invalidateQueries('sneakers');
    },
  });
};

export const useDeleteSneaker = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, string>(deleteSneaker, {
    onSuccess: () => {
      queryClient.invalidateQueries('sneakers');
    },
  });
};
