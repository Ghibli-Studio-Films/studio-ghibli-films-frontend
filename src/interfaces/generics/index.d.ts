import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export interface IButtonAttributes
  extends ButtonHTMLAttributes<HTMLButtonElement> {}
