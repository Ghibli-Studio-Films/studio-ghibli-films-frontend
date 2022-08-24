import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Box, Image, HStack } from "@chakra-ui/react";
import { useFilms } from "../../contexts";
import logo from "../../assets/img/studio-ghibli-films-logo.png";

export const HEADER_HEIGHT = 80;

export const Header = () => {
  return (
    <Box as="header" h={`${HEADER_HEIGHT}px`} bg="primary.200">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        h="100%"
        padding={["0 1rem", "0 3.75rem"]}
      >
        <Image
          mr="auto"
          w="160px"
          h="60px"
          src={logo}
          alt="studio ghibli films logo"
        />
      </Container>
    </Box>
  );
};
