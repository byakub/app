import axios, { AxiosRequestConfig } from "axios";

import configAxios from 'config'

export const apiClient = async (config: AxiosRequestConfig) => {
  return await axios({
    ...config,
    ...configAxios
  }).then(response => response.data);
};
