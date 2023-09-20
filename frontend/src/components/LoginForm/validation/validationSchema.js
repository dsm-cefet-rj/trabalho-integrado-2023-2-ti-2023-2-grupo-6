import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Campo obrigatório"),
});
