import { Routes, Route } from "react-router-dom";
import { Background, Header, Footer, FilmsList } from "../components";

export const Navigation = () => {
  const films = [
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "f208ccb3-a2d9-45e1-b3d0-77bddeea1655",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
  ];

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Background header={<Header />} footer={<Footer />}>
            <FilmsList films={films} />
          </Background>
        }
      />
    </Routes>
  );
};
