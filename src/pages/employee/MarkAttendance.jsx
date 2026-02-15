import React from "react";
import userApi from "../../api/userApi";

const MarkAttendance = () => {
  const markAttendance = async () => {
    await userApi.post("/attendance/mark");
    alert("Attendance marked successfully");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Mark Attendance</h2>
      <button
        onClick={markAttendance}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Mark Today’s Attendance
      </button>
    </div>
  );
};

export default MarkAttendance;
