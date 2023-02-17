import * as yup from "yup";

export const formSchema = yup.object({
  title: yup.string().required("Insira um título"),
  status: yup.string().required("Escolha o status atual"),
});
