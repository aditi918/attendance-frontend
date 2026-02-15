function ActivityLog() {
  const logs = [
    "HR approved attendance",
    "Admin changed role",
    "Attendance overridden",
  ];

  return (
    <ul className="bg-gray-800 rounded p-4 text-sm space-y-2">
      {logs.map((log, i) => (
        <li key={i} className="text-gray-300">
          • {log}
        </li>
      ))}
    </ul>
  );
}

export default ActivityLog;