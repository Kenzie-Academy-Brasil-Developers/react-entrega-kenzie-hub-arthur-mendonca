import { toast } from "react-toastify";

export function ToastySuccess() {
  toast.success(`Tecnologia criada com sucesso`, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
