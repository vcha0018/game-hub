import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
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

  get = (slug: number | string) => {
    return axiosClient
      .get<T>(this.endpoint + "/" + slug)
      .then((res) => res.data);
  };
}
