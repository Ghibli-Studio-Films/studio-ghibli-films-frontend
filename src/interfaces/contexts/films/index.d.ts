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
  filmsPagination: IPaginated;
  getFilms: (url?: string, limit?: number) => Promise<void>;
  updateFilms: () => Promise<void>;
}
