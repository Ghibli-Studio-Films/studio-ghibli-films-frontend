import { Container, Badge } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { PrevNextButton } from "../Button/PrevNextButton";
import { useFilms } from "../../contexts";

export const Paginator = () => {
  const { getFilms, filmsPagination } = useFilms();

  const goTop = () => window.scrollTo(0, 0);

  const handleGoPrev = async () => {
    const prevPage = filmsPagination.previous;

    if (!prevPage) {
      toast.error("Não é possível voltar mais!");
    } else {
      await getFilms(prevPage);

      goTop();
    }
  };

  const handleGoNext = async () => {
    const nextPage = filmsPagination.next;

    if (!nextPage) {
      toast.error("Não é possível avançar mais!");
    } else {
      await getFilms(nextPage);

      goTop();
    }
  };

  return (
    <Container
      display="flex"
      justifyContent="space-between"
      maxW="320px"
      marginTop="50px"
      pointerEvents="none"
    >
      <PrevNextButton onClick={() => handleGoPrev()} go="prev" />
      <Badge
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="lg"
        bg="primary.200"
        color="primary.700"
        borderRadius="100%"
        w="40px"
        h="40px"
      >
        {filmsPagination.page}
      </Badge>
      <PrevNextButton onClick={() => handleGoNext()} go="next" />
    </Container>
  );
};
