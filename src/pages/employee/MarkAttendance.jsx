import userApi from "../../api/userApi";

export default function MarkAttendance() {
  const checkIn = async () => {
    try {
      await userApi.post("/attendance/check-in");
      alert("Checked in!");
    } catch (err) {
      alert("Check-in failed");
    }
  };

  const checkOut = async () => {
    try {
      await userApi.post("/attendance/check-out");
      alert("Checked out!");
    } catch (err) {
      alert("Check-out failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mark Attendance</h2>

      <button
        onClick={checkIn}
        className="bg-green-600 text-white px-4 py-2 rounded mr-3"
      >
        Check In
      </button>

      <button
        onClick={checkOut}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Check Out
      </button>
    </div>
  );
}