import React, { useEffect, useState } from "react";
import userApi from "../../api/userApi";

const MyAttendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      const res = await userApi.get("/attendance/my");
      setAttendance(res.data);
    };
    fetchAttendance();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">My Attendance</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Date</th>
            <th>Status</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((item) => (
            <tr key={item._id}>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>{item.isApproved ? "Yes" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAttendance;
