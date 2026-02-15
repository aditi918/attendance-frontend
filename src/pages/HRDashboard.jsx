import { useEffect, useState } from "react";
import axios from "../services/hrApi";
import AttendanceTable from "../components/AttendanceTable";
import ManualAttendance from "../components/ManualAttendance";
function HRDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("/dashboard-stats").then((res) => {
      setStats(res.data);
    });
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">HR Dashboard</h1>
<h2 className="text-xl font-semibold mb-3">Pending Attendance</h2>
<AttendanceTable />
<ManualAttendance />
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded">Employees: {stats.totalEmployees}</div>
        <div className="bg-yellow-600 p-4 rounded">Pending: {stats.pending}</div>
        <div className="bg-green-600 p-4 rounded">Approved Today: {stats.approved}</div>
        <div className="bg-red-600 p-4 rounded">Rejected Today: {stats.rejected}</div>
      </div>

      {/* Pending Attendance */}
      <h2 className="text-xl font-semibold mb-3">Pending Attendance</h2>
      {/* Table component will go here */}
    </div>
  );
}

export default HRDashboard;
