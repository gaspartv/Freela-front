import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
  .string()
  .required("Nome é obrigatório"),

  password: yup
  .string()
  .required("Senha é obrigatório"),

  checkPassword: yup
  .string()
  .oneOf([yup.ref('password'), null], 'As senhas são diferentes'),

  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Email é obrigatório"),

});
