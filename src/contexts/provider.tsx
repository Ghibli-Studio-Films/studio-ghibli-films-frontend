import { BrowserRouter } from "react-router-dom";
import { IChildrenProps } from "../interfaces";

export const GlobalProvider = ({ children }: IChildrenProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
