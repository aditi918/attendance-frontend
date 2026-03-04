import { Navigate } from "react-router-dom";

export default function AutoRedirect() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  if (role === "hr") {
    return <Navigate to="/hr" replace />;
  }

  if (role === "user") {
    return <Navigate to="/user" replace />;
  }

  return <Navigate to="/login" replace />;
}