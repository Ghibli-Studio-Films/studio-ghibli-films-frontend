import { ReactNode } from "react";
import { IChildrenProps } from "../../generics";

export interface IBackground extends IChildrenProps {
  header?: ReactNode;
  footer?: ReactNode;
}
