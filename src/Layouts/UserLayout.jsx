import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function UserLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">

      <aside className="w-64 bg-gray-800 p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-8">Employee Panel</h2>

        <nav className="flex flex-col gap-4">
          <NavLink to="/user" end className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300"}>
            Dashboard
          </NavLink>

          <NavLink to="/user/attendance" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300"}>
            Attendance
          </NavLink>

          <NavLink to="/user/apply-leave" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300"}>
            Apply Leave
          </NavLink>

          <NavLink to="/user/mark-attendance" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300"}>
            Mark Attendance
          </NavLink>

          <NavLink to="/user/profile" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300"}>
            Profile
          </NavLink>
        </nav>

        <button onClick={logout} className="mt-auto bg-red-600 py-2 rounded">
          Logout
        </button>
      </aside>
      
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}