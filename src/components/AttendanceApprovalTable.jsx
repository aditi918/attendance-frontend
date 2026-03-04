import userApi from "../api/userApi";
import { useEffect, useState } from "react";

function AttendanceApprovalTable() {
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    const res = await userApi.get("/hr/pending-attendance");
    setRecords(res.data);
  };

  const handleApprove = async (id) => {
    await userApi.put(`/hr/attendance/${id}/approve`);
    fetchAttendance();
  };

  const handleReject = async (id) => {
    await userApi.put(`/hr/attendance/${id}/reject`);
    fetchAttendance();
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div className="bg-gray-800 p-5 rounded-xl mt-6">
      <h2 className="text-lg font-semibold text-white mb-4">
        Pending Attendance Approvals
      </h2>

      <table className="w-full text-sm text-gray-300">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th>User</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((item) => (
            <tr key={item._id} className="border-b border-gray-700">
              <td>{item.user.name}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.status}</td>
              <td className="space-x-2">
                <button
                  onClick={() => handleApprove(item._id)}
                  className="bg-green-600 px-3 py-1 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(item._id)}
                  className="bg-red-600 px-3 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceApprovalTable;
