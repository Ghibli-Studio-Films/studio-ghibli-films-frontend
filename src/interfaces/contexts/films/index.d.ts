import { IFilm } from "../../components/Cards/FilmCard";

export interface IPaginated {
  data_count: number;
  total_pages: number;
  page: number | null;
  per_page: number | null;
  previous: string | null;
  next: string | null;
}

export interface IFilmsContext {
  films: IFilm[];
  getFilms: (
    onSuccess?: (...rest: any) => any,
    onFail?: (...rest: any) => any,
    page?: number,
    limit?: number
  ) => Promise<void>;

  updateFilms: (
    onSuccess?: (...rest: any) => any,
    onFail?: (...rest: any) => any
  ) => Promise<void>;
}
