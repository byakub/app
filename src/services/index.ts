import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
