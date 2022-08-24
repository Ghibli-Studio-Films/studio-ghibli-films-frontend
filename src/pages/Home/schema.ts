import * as yup from "yup";

const minLimit = 1;

export const limitSchema = yup.object().shape({
  limit: yup
    .number()
    .typeError("Deve ser um número")
    .integer("Deve ser inteiro")
    .min(minLimit, `Limite mínimo de ${minLimit}`),
});
