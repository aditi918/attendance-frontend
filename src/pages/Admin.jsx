import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>
      <button
        onClick={logout}
        className="bg-red-600 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
