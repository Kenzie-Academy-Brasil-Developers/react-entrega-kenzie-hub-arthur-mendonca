import { toast } from "react-toastify";

export function ToastDelete(text) {
  toast.info(`Você removeu a tecnologia da lista.`, {
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
