import { StyledPageWrapper } from "./register";
import { StyledHeader } from "./register";
import RegisterForm from "../form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api.js";

function Register() {
  const navigate = useNavigate();

  function goBack() {
    window.history.back();
  }

  async function registerUSer(formData) {
    try {
      const response = await api.post("/users", formData);
      // console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledPageWrapper>
      <StyledHeader>
        <h1>Kenzie Hub </h1>
        <button type="button" onClick={goBack}>
          Voltar
        </button>
      </StyledHeader>
      <RegisterForm registerUSer={registerUSer} />
    </StyledPageWrapper>
  );
}

export default Register;
