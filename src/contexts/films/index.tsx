import { useContext, createContext, useState } from "react";
import { studioGhibliFilmsService } from "../../services";
import {
  IChildrenProps,
  IFilmsContext,
  IFilm,
  IPaginated,
} from "../../interfaces";

const FilmsContext = createContext({} as IFilmsContext);

export const FilmsProvider = ({ children }: IChildrenProps) => {
  const [films, setFilms] = useState<IFilm[]>([] as IFilm[]);
  const [filmsPagination, setFilmsPagination] = useState<IPaginated>(
    {} as IPaginated
  );

  const getFilms = async (url?: string, limit?: number) => {
    const res = url
      ? await studioGhibliFilmsService(undefined, url).get("")
      : await studioGhibliFilmsService().get(
          `/films${limit ? `?limit=${limit}` : ""}`
        );

    const { results, ...pagination } = res.data;

    setFilms(results);

    setFilmsPagination(pagination);
  };

  const updateFilms = async (
    onSuccess?: (...rest: any) => any,
    onFail?: (...rest: any) => any
  ) => {
    const res = await studioGhibliFilmsService().get(`/films/ghibli`);
  };

  return (
    <FilmsContext.Provider
      value={{ films, filmsPagination, getFilms, updateFilms }}
    >
      {children}
    </FilmsContext.Provider>
  );
};

export const useFilms = () => useContext(FilmsContext);
