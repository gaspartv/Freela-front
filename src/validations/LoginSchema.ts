import * as yup from "yup";

export const loginSchema = yup.object().shape({
    password: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo Obrigatorio").email("Email inválido!"),
  });
