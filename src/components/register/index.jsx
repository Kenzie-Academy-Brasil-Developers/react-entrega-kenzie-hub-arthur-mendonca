import { StyledPageWrapper } from "./register";
import { StyledHeader } from "./register";
import RegisterForm from "../form";

function Register() {
  function goBack() {
    window.history.back();
  }

  return (
    <StyledPageWrapper>
      <StyledHeader>
        <h1>Kenzie Hub </h1>
        <button type="button" onClick={goBack}>
          Voltar
        </button>
      </StyledHeader>
      <RegisterForm />
    </StyledPageWrapper>
  );
}

export default Register;
