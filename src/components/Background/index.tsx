import { Container } from "@chakra-ui/react";
import { IBackground } from "../../interfaces";

export const Background = ({ header, footer, children }: IBackground) => {
  return (
    <>
      {header && header}
      <Container
        as="main"
        padding={["2rem 1rem", "3.125rem 3.75rem"]}
        maxW="1200px"
      >
        {children}
      </Container>
      {footer && footer}
    </>
  );
};
