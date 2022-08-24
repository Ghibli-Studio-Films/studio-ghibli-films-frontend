import { Container } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "../Header";
import { FOOTER_HEIGHT } from "../Footer";
import { IBackground } from "../../interfaces";

export const Background = ({ header, footer, children }: IBackground) => {
  return (
    <>
      {header && header}
      <Container
        as="main"
        padding={["2rem 1rem", "3.125rem 3.75rem"]}
        maxW="1200px"
        minH={`calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`}
      >
        {children}
      </Container>
      {footer && footer}
    </>
  );
};
