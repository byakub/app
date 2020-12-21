import { apiClient } from 'services';

export const getCharacters = () => apiClient({
  method: 'GET',
  url: '/character'
});

export const getCharactersPage = (page: number) => apiClient({
  method: 'GET',
  url: `/character/?page=${page}`,
});

export const getCharacter = (id: number) => apiClient({
  method: 'GET',
  url: `/character/${id}`,
});
