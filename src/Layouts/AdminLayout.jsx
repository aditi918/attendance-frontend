import { useNavigate } from "react-router-dom";
import AdminStats from "../components/AdminStats";
import UserManagementTable from "../components/UserManagementTable";
import AttendanceAdminTable from "../components/AttendanceAdminTable";
import ActivityLog from "../components/ActivityLog";

function Admin() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <AdminStats />

      {/* User Management */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">User Management</h2>
        <UserManagementTable />
      </div>

      {/* Attendance */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Attendance Management</h2>
        <AttendanceAdminTable />
      </div>

      {/* Activity Logs */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Activity Logs</h2>
        <ActivityLog />
      </div>
    </div>
  );
}

export default Admin;