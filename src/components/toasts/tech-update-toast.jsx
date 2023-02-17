import { toast } from "react-toastify";

export function ToastUpdate() {
  toast.info(`Você atualizou o status da tecnologia.`, {
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
