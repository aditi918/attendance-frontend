import { useEffect, useState } from "react";
import axios from "../api/axios";
import StatCard from "../components/StatCard";
import AttendanceApprovalTable from "../components/AttendanceApprovalTable";
import ManualAttendanceModal from "../components/ManualAttendanceModal";

function HR() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    presentToday: 0,
    absentToday: 0,
    pendingApprovals: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/hr/dashboard-stats");
      setStats(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-lg">Loading HR Dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">HR Dashboard</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold"
        >
          + Manual Attendance
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Employees" value={stats.totalEmployees} />
        <StatCard title="Present Today" value={stats.presentToday} />
        <StatCard title="Absent Today" value={stats.absentToday} />
        <StatCard title="Pending Approvals" value={stats.pendingApprovals} />
      </div>

      {/* Attendance Approval Table */}
      <AttendanceApprovalTable onActionComplete={fetchStats} />

      {/* Manual Attendance Modal */}
      {showModal && (
        <ManualAttendanceModal
          onClose={() => setShowModal(false)}
          onSuccess={fetchStats}
        />
      )}
    </div>
  );
}

export default HR;
