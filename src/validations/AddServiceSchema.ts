import * as yup from "yup";

export const AddServiceSchema = yup.object().shape({
  title: yup.string().required("Título é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  category: yup.string().required("Categoria é obrigatório"),
  value: yup.string().required("Valor é obrigatório"),
});
