import { useEffect, useState } from "react";
import hrApi from "../services/hrApi";

function ManualAttendance() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    userId: "",
    date: "",
    status: "Leave",
    reason: "",
  });

  useEffect(() => {
    hrApi.get("/employees").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await hrApi.post("/manual-attendance", form);
    alert("Attendance added successfully");

    setForm({
      userId: "",
      date: "",
      status: "Leave",
      reason: "",
    });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Manual Attendance</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <select
          name="userId"
          value={form.userId}
          onChange={handleChange}
          required
          className="p-2 bg-gray-700 rounded"
        >
          <option value="">Select Employee</option>
          {users.map((u) => (
            <option key={u._id} value={u._id}>
              {u.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="p-2 bg-gray-700 rounded"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="p-2 bg-gray-700 rounded"
        >
          <option>Leave</option>
          <option>WFH</option>
          <option>Half-Day</option>
          <option>Absent</option>
        </select>

        <input
          type="text"
          name="reason"
          placeholder="Reason (optional)"
          value={form.reason}
          onChange={handleChange}
          className="p-2 bg-gray-700 rounded"
        />

        <button
          type="submit"
          className="col-span-2 bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
        >
          Submit Attendance
        </button>
      </form>
    </div>
  );
}

export default ManualAttendance;