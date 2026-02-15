import { useEffect, useState } from "react";
import hrApi from "../pages/Services/hrApi";

function ManualAttendanceModal({ onClose, onSuccess }) {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("Leave");
  const [remark, setRemark] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch employee list
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await hrApi.get("/employees");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const submit = async () => {
    if (!userId || !status) {
      alert("Please select user and status");
      return;
    }

    setLoading(true);
    await hrApi.post("/manual-attendance", {
      userId,
      status,
      remark,
    });

    setLoading(false);
    onSuccess?.();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-xl w-96 text-white">
        <h2 className="text-lg font-semibold mb-4">
          Add Manual Attendance
        </h2>

        {/* Employee Select */}
        <select
          className="w-full p-2 mb-3 bg-gray-700 rounded"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select Employee</option>
          {users.map((u) => (
            <option key={u._id} value={u._id}>
              {u.name} ({u.email})
            </option>
          ))}
        </select>

        {/* Status */}
        <select
          className="w-full p-2 mb-3 bg-gray-700 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Half-Day">Half-Day</option>
          <option value="Leave">Leave</option>
          <option value="WFH">Work From Home</option>
        </select>

        {/* Remark */}
        <textarea
          placeholder="Reason / Remark"
          className="w-full p-2 mb-4 bg-gray-700 rounded"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={loading}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManualAttendanceModal;
