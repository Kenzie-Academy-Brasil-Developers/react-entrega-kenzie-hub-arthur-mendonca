import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUserToast } from "../../components/toasts/create-user-toast";
import { api } from "../../services/api";
import { TechContext } from "../techContext/techContext";

export const UserContext = createContext([]);

function UserProvider({ children }) {
  // const {} = useContext(TechContext);

  const [user, setUser] = useState([]);
  const [tech, setTech] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("@userId");
    console.log(userId);
    if (userId) {
      async function autoLogin() {
        try {
          const response = await api.get(`/users/${userId}`);
          // console.log(response);
          setUser(response.data);
          setTech([...tech, [response.data.techs]]);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
      autoLogin();
    } else navigate("/");
  }, []);

  async function loginUser(formData) {
    try {
      const response = await api.post("/sessions", formData);
      console.log(response.data);
      localStorage.setItem("@token", response.data.token);
      localStorage.setItem("@userId", response.data.user.id);
      setUser([]);
      // setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  async function registerUSer(formData) {
    try {
      const response = await api.post("/users", formData);
      // console.log(response.data);
      CreateUserToast();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, loginUser, registerUSer, tech }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

// 9c9fc6bc-fee6-48c3-b230-642563f20e15
