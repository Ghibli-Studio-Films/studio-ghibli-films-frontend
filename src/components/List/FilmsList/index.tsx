import { List, ListItem } from "@chakra-ui/react";
import { FilmCard } from "../../Card/FilmCard";
import { IFilmsList } from "../../../interfaces";

export const FilmsList = ({ films }: IFilmsList) => {
  return (
    <List
      display="flex"
      flexDir={["column", "column", "row", "row"]}
      flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
      justifyContent="center"
      alignItems="center"
      gap="75px 50px"
    >
      {films.map((film) => (
        <ListItem key={film.id}>
          <FilmCard film={film} />
        </ListItem>
      ))}
    </List>
  );
};
