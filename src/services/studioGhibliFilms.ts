import axios, { AxiosRequestHeaders } from "axios";

export const studioGhibliFilmsService = (
  customHeaders: AxiosRequestHeaders
) => {
  const defaultHeaders: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };

  return axios.create({
    baseURL: "https://studio-ghibli-films-backend.herokuapp.com",
    headers: { ...defaultHeaders, ...customHeaders },
  });
};
