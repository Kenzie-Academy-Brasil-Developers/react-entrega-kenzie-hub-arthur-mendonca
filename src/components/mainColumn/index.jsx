import { StyledDiv } from "./mainColumn";
import { CgAddR } from "react-icons/cg";

function MainColumn({ user }) {
  return (
    <StyledDiv>
      <header>
        <h1>Tecnologias</h1>
        <button>
          <CgAddR className="icon" />
        </button>
      </header>
      <ul className="tech__list">
        {user.techs.map((element) => (
          <li className="li__tech-div">
            <div>{element.title}</div>
            <div>{element.status}</div>
          </li>
        ))}
      </ul>
    </StyledDiv>
  );
}

export default MainColumn;
