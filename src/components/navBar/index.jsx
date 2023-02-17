import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledPageWrapper } from "./navbar";

function NavBar() {
  const navigate = useNavigate();

  function logOff() {
    navigate("/");
    localStorage.removeItem("@token");
    localStorage.removeItem("@userId");
  }
  return (
    <>
      <StyledPageWrapper>
        <StyledHeader>
          <h1>Kenzie Hub </h1>
          <button type="button" onClick={logOff} className="exit__button">
            Sair
          </button>
        </StyledHeader>
      </StyledPageWrapper>
    </>
  );
}

export default NavBar;
