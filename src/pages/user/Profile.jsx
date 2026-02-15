export default function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      <div className="bg-gray-800 p-6 rounded-xl space-y-3">
        <p><span className="text-gray-400">Name:</span> Employee Name</p>
        <p><span className="text-gray-400">Email:</span> employee@email.com</p>
        <p><span className="text-gray-400">Role:</span> Employee</p>
      </div>
    </div>
  );
}