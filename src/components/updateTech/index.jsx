import { useContext, useState } from "react";
import { UpdateModal } from "./updateTech";
import { CgClose } from "react-icons/cg";
import { TechContext } from "../../context/techContext/techContext";
import { UserContext } from "../../context/userContext/userContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";

function UpdateTech() {
  const {
    handleModalUpdateClose,
    updateTech,
    nameToShowInUpdateModal,
    deleteTech,
  } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function submit(formData) {
    updateTech(formData);
  }
  // FALTA FAZER A ATUALIZAÇÃO DO FRONT-END NO ADICIONAR TECH E ATUALIZAR TECH
  return (
    <UpdateModal className="this__div">
      <div className="div__wrapper">
        <div className="upper__div">
          <h2>Detalhes da tecnologia</h2>
          <CgClose className="icon" onClick={handleModalUpdateClose} />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="techName__div">
            <label htmlFor="">Nome do projeto</label>
            <input
              type="text"
              name=""
              id=""
              readOnly
              value={nameToShowInUpdateModal}
              {...register("title")}
            />
          </div>
          <div className="select__div">
            <label htmlFor="">Status</label>
            <select name="" id="" {...register("status")}>
              <option value={""}>Escolha o status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status && <span>{errors.status.message}</span>}
          </div>
          <div className="buttons__div">
            <button type="submit" className="edit__button">
              Salvar alterações
            </button>
            <button onClick={handleSubmit(deleteTech)}>Excluir</button>
          </div>
        </form>
      </div>
    </UpdateModal>
  );
}

export default UpdateTech;
