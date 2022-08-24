import { useEffect } from "react";
import { isEmpty } from "lodash";
import { Flex } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFilms } from "../../contexts";
import {
  Background,
  Header,
  Footer,
  FilmsList,
  TotoroLoader,
  Paginator,
  GenericButton,
  GenericInput,
} from "../../components";
import { limitSchema } from "./schema";
import { ILimitData } from "../../interfaces";
import { toast } from "react-toastify";

export const Home = () => {
  const { films, getFilms, filmsPagination, updateFilms } = useFilms();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(limitSchema),
  });

  const handleMounting = async () => await getFilms();

  const onFormSubmit: SubmitHandler<ILimitData> = async (data) => {
    await updateFilms();

    await getFilms(undefined, data.limit!);

    toast.success("Limite de resultados atualizado!");
  };

  useEffect(() => {
    if (films.length > 0) return;

    handleMounting();
  }, []);

  return (
    <Background header={<Header />} footer={<Footer />}>
      <Flex
        onSubmit={handleSubmit(onFormSubmit)}
        as="form"
        flexDir="column"
        alignItems="flex-start"
        marginBottom={["25px", "25px", "50px", "50px"]}
        gap="15px"
      >
        <GenericInput
          id="limit_per_page"
          label="Limite"
          name="limit"
          error={errors.limit?.message as string}
          placeholder="Digite aqui o limite..."
          register={register}
        />

        <GenericButton disabled={!isEmpty(errors) ? true : false} type="submit">
          Pegar !
        </GenericButton>
      </Flex>

      {films.length > 0 ? <FilmsList films={films} /> : <TotoroLoader />}

      {filmsPagination.data_count !== filmsPagination.per_page && <Paginator />}
    </Background>
  );
};
