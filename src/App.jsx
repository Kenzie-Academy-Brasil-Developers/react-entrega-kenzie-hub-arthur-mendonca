import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Globalstyle from "./components/styles/globalstyle";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import { api } from "./services/api";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loginUser(formData) {
    try {
      const response = await api.post("/sessions", formData);
      console.log(response.data);
      localStorage.setItem("@token", JSON.stringify(response.data.token));
      localStorage.setItem("@userId", JSON.stringify(response.data.user.id));
      setUser([]);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Globalstyle />
      <Routes>
        <Route path="/" element={<Login loginUser={loginUser} />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
