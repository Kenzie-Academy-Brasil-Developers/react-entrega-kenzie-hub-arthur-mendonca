import NavBar from "../navBar";
import Header from "../dashboardHeader";
import { StyledPageWrapper } from "./dashboard";
import MainColumn from "../mainColumn";

function Dashboard() {
  return (
    <StyledPageWrapper>
      <NavBar />
      <Header />
      <MainColumn />
    </StyledPageWrapper>
  );
}

export default Dashboard;
