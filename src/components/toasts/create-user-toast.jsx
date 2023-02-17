import { toast } from "react-toastify";

export function CreateUserToast() {
  toast.success(`Usuário criado com sucesso`, {
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
