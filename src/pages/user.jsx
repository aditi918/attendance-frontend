import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";

export default function User() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Employee Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Leaves" value="12" />
        <StatCard title="Leaves Used" value="5" />
        <StatCard title="Remaining Leaves" value="7" />
        <StatCard title="Attendance %" value="92%" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2>Apply for Leave</h2>
         <button
  onClick={() => navigate("/user/apply-leave")}
  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
>
  Apply
</button>

<button
  onClick={() => navigate("/user/profile")}
  className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
>
  View
</button>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2>Mark Attendance</h2>
          <button onClick={() => navigate("/user/mark-attendance")} className="bg-purple-600 px-4 py-2 mt-3 rounded">
            Mark
          </button>
        </div>
      </div>
    </div>
  );
}