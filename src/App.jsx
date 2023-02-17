import { useState } from "react";
import Globalstyle from "./components/styles/globalstyle";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import ProtectedRoute from "./components/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Globalstyle />
      <ToastContainer />
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
