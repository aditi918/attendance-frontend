function AdminStats() {
  const stats = [
    { label: "Total Users", value: 42 },
    { label: "Employees", value: 30 },
    { label: "HRs", value: 5 },
    { label: "Attendance Records", value: 320 },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-gray-800 p-4 rounded-lg text-center"
        >
          <p className="text-gray-400">{s.label}</p>
          <p className="text-2xl font-bold">{s.value}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminStats;
