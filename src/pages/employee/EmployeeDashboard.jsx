import { useEffect, useState } from "react";
import userApi from "../../api/userApi";
import StatCard from "../../components/StatCard";

const EmployeeDashboard = () => {
  const [stats, setStats] = useState({
    totalDays: 0,
    presentDays: 0,
    pendingRequests: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await userApi.get("/dashboard");
        setStats(res.data);
      } catch (err) {
        setError("Failed to load dashboard data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-gray-400">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">
        Employee Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Working Days"
          value={stats.totalDays}
        />
        <StatCard
          title="Present Days"
          value={stats.presentDays}
        />
        <StatCard
          title="Pending Requests"
          value={stats.pendingRequests}
        />
      </div>
    </div>
  );
};

export default EmployeeDashboard;