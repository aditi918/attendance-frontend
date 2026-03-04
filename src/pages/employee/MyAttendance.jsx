import { useEffect, useState } from "react";

export default function MyAttendance() {
  const [attendance, setAttendance] = useState([]);

  const markAttendance = () => {
    setAttendance([...attendance, { date: new Date().toDateString(), status: "Present" }]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Attendance</h2>

      <button onClick={markAttendance} className="bg-green-600 px-4 py-2 rounded mb-4">
        Mark Attendance
      </button>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((a, i) => (
            <tr key={i}>
              <td>{a.date}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}