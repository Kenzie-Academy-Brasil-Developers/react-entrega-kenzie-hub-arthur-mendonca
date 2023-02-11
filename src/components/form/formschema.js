import * as yup from "yup";

export const formSchema = yup.object({
  name: yup.string().required("Insira um nome."),
  email: yup
    .string()
    .required("Insira um email.")
    .email("Insira um email válido."),
  password: yup
    .string()
    .required("Insira uma senha")
    .min(8, "A senha deve ter pelo menos 8 caracteres."),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "A senha deve conter pelo menos uma letra, um número e um símbolo"
  // )
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), "As senhas devem ser idênticas"])
    .required("Este campo é obrigatório"),
  bio: yup.string(),
  contact: yup.number("Contato deve ser um número"),
  course_module: yup.string().required("Necessário escolher um módulo"),
});

// "email": "arthur@kenzie.com.br",
// "password": "123456",
// "name": "Arthur",
// "bio": "Lorem ipsum dolor emet",
// "contact": "123456789",
// "course_module": "2o Módulo (Frontend avançado)"
