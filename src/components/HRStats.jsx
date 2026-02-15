const HRStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-gray-400">Pending Requests</h3>
        <p className="text-3xl font-bold text-yellow-400">5</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-gray-400">Approved Today</h3>
        <p className="text-3xl font-bold text-green-400">12</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-gray-400">Rejected Today</h3>
        <p className="text-3xl font-bold text-red-400">2</p>
      </div>
    </div>
  );
};

export default HRStats;
