import axios, { AxiosRequestConfig } from "axios";

import axiosConfig from 'config'

export const apiClient = async (config: AxiosRequestConfig) => {
  return await axios({
    ...config,
    ...axiosConfig
  }).then(response => response.data);
};
