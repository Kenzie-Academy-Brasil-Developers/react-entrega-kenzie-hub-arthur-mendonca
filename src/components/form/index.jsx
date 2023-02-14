import { StyledDiv } from "./form";
import { useForm } from "react-hook-form";
import { formSchema } from "./formschema";
import { yupResolver } from "@hookform/resolvers/yup";

function RegisterForm({ registerUSer }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function submit(formData) {
    registerUSer(formData);
  }

  return (
    <StyledDiv>
      <header>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa!</span>
      </header>
      <form className="styled__form" onSubmit={handleSubmit(submit)}>
        <div className="input__div">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="input__div">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} />
          {errors.email && <p> {errors.email.message} </p>}
        </div>
        <div className="input__div">
          <label htmlFor="senha">Senha</label>
          <input type="text" id="senha" {...register("password")} />
          {errors.password && <p> {errors.password.message}</p>}
        </div>
        <div className="input__div">
          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input
            type="text"
            id="confirmarSenha"
            {...register("passwordConfirm")}
          />
        </div>
        <div className="input__div">
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" {...register("bio")} />
          {errors.bio && <p> {errors.bio.message}</p>}
        </div>
        <div className="input__div">
          <label htmlFor="contato">Contato</label>
          <input type="text" id="contato" {...register("contact")} />
          {errors.contact && <p>Contato deve ser um número</p>}
        </div>
        <div className="select__label">
          <label htmlFor="course_module">Selecionar módulo</label>
        </div>
        <div className="input__div">
          <select
            name="course_module"
            id="course_module"
            className="input__div"
            {...register("course_module")}
          >
            <option value="primeiro-modulo">Primeiro módulo</option>
            <option value="segundo-modulo">Segundo módulo</option>
            <option value="terceiro-modulo">Terceiro módulo</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </StyledDiv>
  );
}

export default RegisterForm;
