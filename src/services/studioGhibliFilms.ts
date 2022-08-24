import axios, { AxiosRequestHeaders } from "axios";

export const studioGhibliFilmsService = (
  customHeaders?: AxiosRequestHeaders,
  url?: string
) => {
  const defaultHeaders: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };

  const baseURL = url
    ? url
    : "https://studio-ghibli-films-backend.herokuapp.com";

  return axios.create({
    baseURL,
    headers: { ...defaultHeaders, ...customHeaders },
  });
};
