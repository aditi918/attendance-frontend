import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import HR from "./pages/HR";
import User from "./pages/user";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/hr"
        element={
          <ProtectedRoute allowedRole="hr">
            <HR />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRole="user">
            <User />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;