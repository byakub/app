import { ResponseType } from "axios";

const { REACT_APP_API_URL: apiUrl } = process.env;

const axiosConfig = {
  baseURL: apiUrl,
  responseType: "json" as ResponseType,
  headers: {
    "Content-Type": "application/json",
  },
}

export default Object.freeze(axiosConfig);