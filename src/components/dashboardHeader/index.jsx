import { StyledHeader } from "./dashboardHeader";

function Header({ user }) {
  console.log(user);
  return (
    <StyledHeader>
      <h1>Olá, {user.name}</h1>
      <span>{user.course_module}</span>
    </StyledHeader>
  );
}

export default Header;
