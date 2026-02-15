import { useEffect, useState } from "react";
import hrApi from "../services/hrApi";

function AttendanceApprovalTable({ onActionComplete }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPending = async () => {
    try {
      setLoading(true);
      const res = await hrApi.get("/pending-attendance");
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load pending attendance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const handleAction = async (attendanceId, action) => {
    try {
      await hrApi.post("/review", {
        attendanceId,
        action, // "Approved" | "Rejected"
        remark: action === "Rejected" ? "Rejected by HR" : "Approved by HR",
      });

      fetchPending();
      onActionComplete && onActionComplete();
    } catch (err) {
      alert("Action failed");
    }
  };

  if (loading) {
    return <p className="text-gray-400 mt-4">Loading attendance...</p>;
  }

  if (error) {
    return <p className="text-red-400 mt-4">{error}</p>;
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full text-sm bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="p-3 text-left">Employee</th>
            <th>Date</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Hours</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r) => (
            <tr
              key={r._id}
              className="border-b border-gray-700 hover:bg-gray-750"
            >
              <td className="p-3">{r.user?.name || "-"}</td>
              <td>{new Date(r.date).toLocaleDateString()}</td>
              <td>
                {r.checkIn
                  ? new Date(r.checkIn).toLocaleTimeString()
                  : "-"}
              </td>
              <td>
                {r.checkOut
                  ? new Date(r.checkOut).toLocaleTimeString()
                  : "-"}
              </td>
              <td>{r.workingHours ?? "-"}</td>
              <td>{r.status}</td>
              <td>{r.reason || "-"}</td>
              <td className="space-x-2">
                <button
                  onClick={() => handleAction(r._id, "Approved")}
                  className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(r._id, "Rejected")}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}

          {records.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center p-4 text-gray-400">
                No pending attendance
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceApprovalTable;