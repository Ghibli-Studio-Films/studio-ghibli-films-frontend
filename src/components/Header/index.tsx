import logo from "../../assets/img/studio-ghibli-films-logo.png";
import { Container, Box, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as="header" h="80px" bg="primary.200">
      <Container
        display="flex"
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
