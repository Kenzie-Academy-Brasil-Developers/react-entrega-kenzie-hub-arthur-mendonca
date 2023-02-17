import axios from "axios";
import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { UserContext } from "../userContext/userContext";

export const TechContext = createContext();

function TechProvider({ children }) {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState("");
  const [nameToShowInUpdateModal, setNameToShowInUpdateModal] = useState("");

  function handleModalUpdateOpen() {
    setModalUpdateOpen(true);
  }
  function handleModalUpdateClose() {
    setModalUpdateOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  async function addNewTech(formData) {
    const token = localStorage.getItem("@token");
    console.log(token);
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTech(formData) {
    const token = localStorage.getItem("@token");
    try {
      response = await api.put(`/users/techs/${idToUpdate}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech() {
    const token = localStorage.getItem("@token");
    try {
      response = await api.delete(`/users/techs/${idToUpdate}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // const options = {
  //   method: 'DELETE',
  //   url: 'https://kenziehub.herokuapp.com/users/techs/9f53cf10-3fe4-4e01-86aa-2c85eca7fb1',
  //   headers: {
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzI3NDI3NTIsImV4cCI6MTYzMzAwMTk1Miwic3ViIjoiNDVmOWU4ZDAtYjVhOC00ZTgyLWI2ZDMtM2E1MTZhYzlmNTkyIn0.pt_6EQ-Qxz0xSPJGZiJL0FoS5ctug8fsZCj9oLvTRXU'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return (
    <>
      <TechContext.Provider
        value={{
          handleOpen,
          handleClose,
          open,
          addNewTech,
          updateTech,
          handleModalUpdateOpen,
          modalUpdateOpen,
          handleModalUpdateClose,
          setIdToUpdate,
          idToUpdate,
          nameToShowInUpdateModal,
          deleteTech,
          setNameToShowInUpdateModal,
        }}
      >
        {children}
      </TechContext.Provider>
    </>
  );
}

export default TechProvider;

// ADICIONAR NOVA TECH - RESPOSTA ESPERADA
// {
// 	"id": "f0766339-5731-4b1d-b53c-a6a9fcd32c30",
// 	"title": "Cobol",
// 	"status": "Intermediário",
// 	"user": {
// 		"id": "9c9fc6bc-fee6-48c3-b230-642563f20e15"
// 	},
// 	"created_at": "2023-02-15T23:02:04.958Z",
// 	"updated_at": "2023-02-15T23:02:04.958Z"
// }
