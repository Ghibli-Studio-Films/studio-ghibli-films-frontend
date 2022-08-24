import { InputProps } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IInputAttributes } from "../../../generics";

export interface IGenericInput extends InputProps {
  label: string;
  error?: string;
  register: UseFormRegister<FieldValues>;
}
