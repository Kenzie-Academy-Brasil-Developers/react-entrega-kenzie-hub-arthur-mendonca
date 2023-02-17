import { useContext } from "react";
import { UserContext } from "../../context/userContext/userContext";
import { StyledHeader } from "./dashboardHeader";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <StyledHeader>
      <h1>Olá, {user.name}</h1>
      <span>{user.course_module}</span>
    </StyledHeader>
  );
}

export default Header;
