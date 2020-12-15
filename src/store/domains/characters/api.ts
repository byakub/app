import { apiClient } from "services";

export const getCharactersData = () => apiClient({
    method:"GET",
    url:"/character"
});
