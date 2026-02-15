import { Link } from "react-router-dom";

function DashboardLayout({ title, children, links }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <aside className="w-64 bg-gray-800 p-5">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <nav className="space-y-3">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="block hover:text-blue-400"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

export default DashboardLayout;