import { ThemeProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../theme";
import { IChildrenProps } from "../interfaces";

export const GlobalProvider = ({ children }: IChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
