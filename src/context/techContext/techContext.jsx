import axios from "axios";
import { createContext, useContext, useState } from "react";
import { ToastySuccess } from "../../components/toasts/tech-creation-toast";
import { ToastDelete } from "../../components/toasts/tech-delete-toast";
import { ToastUpdate } from "../../components/toasts/tech-update-toast";
import { api } from "../../services/api";
import { UserContext } from "../userContext/userContext";

export const TechContext = createContext();

function TechProvider({ children }) {
  const { user, setUser } = useContext(UserContext);
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
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      ToastySuccess();

      // setUser() --> para atualizar os dados do usuário
      setUser((prevUser) => ({
        ...prevUser,
        techs: [...prevUser.techs, response.data],
      }));

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTech(formData) {
    const token = localStorage.getItem("@token");
    try {
      const response = await api.put(`/users/techs/${idToUpdate}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      ToastUpdate();
      const updated = response.data;
      setUser((prevUser) => ({
        ...prevUser,
        techs: prevUser.techs.map((tech) =>
          tech.id === idToUpdate ? updated : tech
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech() {
    const token = localStorage.getItem("@token");
    try {
      const response = await api.delete(`/users/techs/${idToUpdate}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      ToastDelete();
      setUser((prevUser) => ({
        ...prevUser,
        techs: prevUser.techs.filter((tech) => tech.id !== idToUpdate),
      }));
    } catch (error) {
      console.log(error);
    }
  }

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
