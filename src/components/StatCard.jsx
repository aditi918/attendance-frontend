function StatCard({ title, value, icon, color = "blue" }) {
  const colorMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    red: "text-red-400",
    yellow: "text-yellow-400",
    purple: "text-purple-400",
  };

  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-sm">{title}</p>

        {icon && (
          <span className={`text-xl ${colorMap[color]}`}>
            {icon}
          </span>
        )}
      </div>

      <h2 className="text-2xl font-bold text-white mt-2">
        {value}
      </h2>
    </div>
  );
}

export default StatCard;