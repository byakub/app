import { apiClient } from "services";

export const getCharactersData = () => apiClient({
    method:"GET",
    url:"/character"
});

export const getCharactersPage = (url:string) => apiClient({
    method:"GET",
    baseURL:'',
    url:url,
});
