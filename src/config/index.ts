import { ResponseType } from "axios";

const { REACT_APP_API_URL: apiUrl } = process.env;

const configAxios = {
  baseURL: apiUrl,
  responseType: "json" as ResponseType,
  headers: {
    "Content-Type": "application/json",
  },
}

export default Object.freeze(configAxios);