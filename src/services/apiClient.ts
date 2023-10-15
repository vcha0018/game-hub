import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string;
  results: T[];
}

const axiosClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bff9012d7d7347ca8fc4a7f3911d47fd",
  },
});

export default class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

