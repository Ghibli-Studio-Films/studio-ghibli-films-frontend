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

  const getFilms = async (
    onSuccess?: (...rest: any) => any,
    onFail?: (...rest: any) => any,
    page?: number,
    limit?: number
  ) => {
    const hasPage = page ? `page=${page}` : "";
    const hasLimit = limit ? `limit=${limit}` : "";
    const pageQuery = hasPage ? `?${hasPage}` : "";
    const limitQuery = hasLimit ? `&${hasLimit}` : "";

    const res = await studioGhibliFilmsService().get(
      `/films${pageQuery}${limitQuery}`
    );

    if (res.status === 200) {
      const { results, ...pagination } = res.data;

      setFilms(results);

      setFilmsPagination(pagination);

      !!onSuccess && onSuccess();
    } else {
      !!onFail && onFail();
    }
  };

  const updateFilms = async (
    onSuccess?: (...rest: any) => any,
    onFail?: (...rest: any) => any
  ) => {
    const res = await studioGhibliFilmsService().get(`/films/ghibli`);

    if (res.status === 200) {
      !!onSuccess && onSuccess();
    } else {
      !!onFail && onFail();
    }
  };

  return (
    <FilmsContext.Provider value={{ films, getFilms, updateFilms }}>
      {children}
    </FilmsContext.Provider>
  );
};

export const useFilms = () => useContext(FilmsContext);
