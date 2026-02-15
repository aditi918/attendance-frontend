import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";

export default function User() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Leaves" value="12" />
        <StatCard title="Leaves Used" value="5" />
        <StatCard title="Remaining Leaves" value="7" />
        <StatCard title="Attendance %" value="92%" />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Apply for Leave</h2>
          <p className="text-gray-400 mb-4">
            Submit a leave request to HR
          </p>
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Apply
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">View Profile</h2>
          <p className="text-gray-400 mb-4">
            Check your personal and job details
          </p>
          <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
            View
          </button>
        </div>
      </div>
    </div>
  );
}