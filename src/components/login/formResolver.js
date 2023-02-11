import * as yup from "yup";

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .required("Email de usuário é obrigatório")
    .email("Insira um email válido"),
  password: yup.string(),
});
