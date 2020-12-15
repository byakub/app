import axios, { AxiosRequestConfig, ResponseType } from "axios";

const configAxios = {
  baseURL: "https://rickandmortyapi.com/api",
  responseType: "json" as ResponseType,
  headers: {
    "Content-Type": "application/json",
  },
}

export const apiClient = async (config: AxiosRequestConfig) => {
  return await axios({
    ...config,
    ...configAxios
  }).then(response => response.data);
};
