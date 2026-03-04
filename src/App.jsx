import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import Admin from "./pages/Admin";
import HR from "./pages/HR";
import User from "./pages/User";

import MyAttendance from "./pages/employee/MyAttendance";
import ApplyLeave from "./pages/employee/ApplyLeave";
import Profile from "./pages/employee/Profile";
import MarkAttendance from "./pages/employee/MarkAttendance";

import AdminLayout from "./layouts/AdminLayout";
import HRLayout from "./layouts/HRLayout";
import UserLayout from "./layouts/UserLayout";

import ProtectedRoute from "./components/ProtectedRoute";
import AutoRedirect from "./components/AutoRedirect";
export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<AutoRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Admin />} />
      </Route>

      {/* HR */}
      <Route
        path="/hr"
        element={
          <ProtectedRoute allowedRoles={["hr"]}>
            <HRLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HR />} />
      </Route>

      {/* User */}
      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<User />} />
        <Route path="attendance" element={<MyAttendance />} />
        <Route path="apply-leave" element={<ApplyLeave />} />
        <Route path="mark-attendance" element={<MarkAttendance />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}