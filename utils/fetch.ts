import axios, { AxiosRequestConfig } from 'axios';

const fetch = (config: AxiosRequestConfig) => {
  const newConfig = {
    ...config,
  };

  return axios(newConfig);
};

export default fetch;
