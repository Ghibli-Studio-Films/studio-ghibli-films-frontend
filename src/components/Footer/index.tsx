import { Container, Box, Text, Link } from "@chakra-ui/react";
import { GoToButton } from "../Button/GoToButton";

export const FOOTER_HEIGHT = 150;

export const Footer = () => {
  return (
    <Box as="footer" h={`${FOOTER_HEIGHT}px`} bg="primary.700">
      <Container
        display="flex"
        flexDir={["column", "column", "row", "row"]}
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        h="100%"
        padding={["1rem 1rem", "1rem 1rem", "0 3.75rem", "0 3.75rem"]}
      >
        <Text color="white" fontWeight="500">
          Feito por: Leonardo Moraes 2022
        </Text>

        <Text color="white">
          Copyright &copy;
          <Link
            href="https://studioghibli.com.br/"
            target="_blank"
            rel="noopener"
            referrerPolicy="no-referrer"
            textDecoration="underline"
            marginLeft="5px"
            _hover={{ color: "gray.200" }}
          >
            Studio Ghibli
          </Link>
        </Text>

        <GoToButton coordinates={{ x: 0, y: 0 }} />
      </Container>
    </Box>
  );
};
