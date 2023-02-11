import NavBar from "../navBar";
import Header from "../dashboardHeader";
import { StyledPageWrapper } from "./dashboard";
import MainColumn from "../mainColumn";

function Dashboard({ user }) {
  return (
    <StyledPageWrapper>
      <NavBar />
      <Header user={user} />
      <MainColumn user={user} />
    </StyledPageWrapper>
  );
}

export default Dashboard;

// REQUISIÇÃO PARA PEGAR UM USUÁRIO ESPECÍFICO
// {{ base_url }}/users/913bc9a6-6666-4550-bf51-fd9c34891c34 >>>> ESTE É O MEU ID DE USER
// 9c9fc6bc-fee6-48c3-b230-642563f20e15 id o gabriel@kenzie.com.br
