import { Link } from "react-router-dom";
import { StyledHeader } from "./login";
import { StyledPageWrapper } from "./login";
import { StyledSection } from "./login";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginFormSchema } from "./formResolver";
import { yupResolver } from "@hookform/resolvers/yup";

function Login({ loginUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  function submit(formData) {
    loginUser(formData);
    reset();
  }

  return (
    <StyledPageWrapper>
      <StyledHeader>
        <h1>Kenzie Hub </h1>
      </StyledHeader>
      <StyledSection>
        <form noValidate onSubmit={handleSubmit(submit)}>
          <h2>Login</h2>
          <div className="formDiv">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              //   onChange={(event) => getEmail(event)}
            />
          </div>
          {errors.email && <p>{errors.email.message}</p>}
          <div className="formDiv">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              {...register("password")}
              //   onChange={(event) => getPassword(event)}
            />
          </div>
          {errors.password && <p>{errors.password.message}</p>}
          <div className="submit__div">
            <button type="submit">Entrar</button>
          </div>
          <div className="register__div">
            <span>Ainda não possui uma conta?</span>
            <Link to="/register" className="link__register">
              Cadastre-se
            </Link>
          </div>
        </form>
      </StyledSection>
    </StyledPageWrapper>
  );
}

export default Login;
