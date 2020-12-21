import { apiClient } from 'services';

export const getCharactersData = () => apiClient({
  method: 'GET',
  url: '/character'
});

export const getCharactersPage = (page: number) => apiClient({
  method: 'GET',
  url: `/character/?page=${page}`,
});

export const getCharacterData = (id: number) => apiClient({
  method: 'GET',
  url: `/character/${id}`,
});
