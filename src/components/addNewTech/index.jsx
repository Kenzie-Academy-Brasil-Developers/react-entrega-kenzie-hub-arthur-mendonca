import { Modal } from "./style";
import { useContext } from "react";
import { TechContext } from "../../context/techContext/techContext";
import { CgClose } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";

function AddNewTech() {
  const { handleClose, addNewTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function submit(formData) {
    addNewTech(formData);
  }

  return (
    <>
      <Modal className="dialog__box">
        <form className="section__modal" onSubmit={handleSubmit(submit)}>
          <div className="first__div">
            <h2>Cadastrar tecnologia</h2>
            <CgClose onClick={handleClose} className="icon" />
          </div>
          <div className="second__div">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Nome da tecnologia"
              {...register("title")}
            />
            {errors.title && <span>{errors.title.message}</span>}
          </div>
          <div className="third__div">
            <label htmlFor="">Status</label>
            <select name="" id="" {...register("status")}>
              <option value={""}>Escolha o status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status && <span> {errors.status.message}</span>}
          </div>
          <button type="submit">Cadastrar nova tecnologia</button>
        </form>
      </Modal>
    </>
  );
}

export default AddNewTech;
