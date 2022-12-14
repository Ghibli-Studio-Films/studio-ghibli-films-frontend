import { FilmsProvider } from "./films";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../theme";
import { IChildrenProps } from "../interfaces";

export const GlobalProvider = ({ children }: IChildrenProps) => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <FilmsProvider>{children}</FilmsProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};
