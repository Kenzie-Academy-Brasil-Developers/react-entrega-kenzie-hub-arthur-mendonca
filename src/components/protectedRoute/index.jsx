import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext/userContext";

function ProtectedRoute() {
  const { user } = useContext(UserContext);
  // const userId = localStorage.getItem("@userId");
  const navigate = useNavigate();
  // console.log(user);
  return <>{user ? <Outlet /> : navigate("/")}</>;
}

export default ProtectedRoute;
