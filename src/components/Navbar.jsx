import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("role"); // expects "Admin" | "HR" | "User"
  const user = JSON.parse(localStorage.getItem("user")); // for name display
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Attendance System</h1>

      <div className="flex gap-4 items-center">
        {!role && (
          <>
            <Link to="/login" className="hover:text-blue-400">
              Login
            </Link>
            <Link to="/signup" className="hover:text-blue-400">
              Signup
            </Link>
          </>
        )}

        {role === "Admin" && (
          <Link to="/admin" className="hover:text-blue-400">
            Admin
          </Link>
        )}

        {role === "HR" && (
          <Link to="/hr" className="hover:text-blue-400">
            HR
          </Link>
        )}

        {role === "User" && (
          <Link to="/user" className="hover:text-blue-400">
            {user?.name || "User"}
          </Link>
        )}

        {role && (
          <button
            onClick={logout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;