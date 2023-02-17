import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Globalstyle from "./components/styles/globalstyle";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import { api } from "./services/api";
import ProtectedRoute from "./components/protectedRoute";
import UserProvider from "./context/userContext/userContext";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Globalstyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
