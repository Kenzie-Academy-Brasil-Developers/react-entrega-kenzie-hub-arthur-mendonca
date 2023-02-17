import { StyledDiv } from "./mainColumn";
import { CgAddR } from "react-icons/cg";
import { UserContext } from "../../context/userContext/userContext";
import { useContext, useRef, useState } from "react";
import { TechContext } from "../../context/techContext/techContext";
import AddNewTech from "../addNewTech";
import UpdateTech from "../updateTech";

function MainColumn() {
  const { user, tech } = useContext(UserContext);
  const {
    handleOpen,
    open,
    handleModalUpdateOpen,
    modalUpdateOpen,
    setIdToUpdate,
    setNameToShowInUpdateModal,
  } = useContext(TechContext);
  const myRef = useRef();

  function showRef(event) {
    handleModalUpdateOpen();
    setIdToUpdate(event.target.id);
    const findName = user.techs.find((tech) => tech.id === event.target.id);
    setNameToShowInUpdateModal(findName.title);
  }

  return (
    <StyledDiv>
      {open && <AddNewTech />}
      {modalUpdateOpen && <UpdateTech />}
      <header>
        <h1>Tecnologias</h1>
        <button>
          <CgAddR className="icon" onClick={handleOpen} />
        </button>
      </header>
      {user.techs && (
        <ul className="tech__list">
          {user.techs.map((element) => (
            <li
              ref={myRef}
              className="li__tech-div"
              key={element.id}
              onClick={showRef}
              id={element.id}
            >
              <div>{element.title}</div>
              <div>{element.status}</div>
            </li>
          ))}
        </ul>
      )}
    </StyledDiv>
  );
}

export default MainColumn;
