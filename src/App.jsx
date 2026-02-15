import { Routes, Route, Navigate } from "react-router-dom";

// Public pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

// Dashboards (pages)
import Admin from "./pages/Admin";
import HR from "./pages/HR";
import User from "./pages/User";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import HRLayout from "./layouts/HRLayout";
import UserLayout from "./layouts/UserLayout";

// Auth
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* ---------- Public ---------- */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ---------- Admin ---------- */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Admin />} />
      </Route>

      {/* ---------- HR ---------- */}
      <Route
        path="/hr"
        element={
          <ProtectedRoute allowedRoles={["HR"]}>
            <HRLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HR />} />
      </Route>

      {/* ---------- User ---------- */}
      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={["User"]}>
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<User />} />
      </Route>

      {/* ---------- Fallback ---------- */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;