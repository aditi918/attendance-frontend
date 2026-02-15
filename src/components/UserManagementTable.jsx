function UserManagementTable() {
  const users = [
    { id: 1, name: "Aditi", email: "aditi@gmail.com", role: "User", active: true },
    { id: 2, name: "HR One", email: "hr@gmail.com", role: "HR", active: true },
  ];

  return (
    <div className="overflow-x-auto bg-gray-800 rounded">
      <table className="w-full text-sm">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-3">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b border-gray-700">
              <td className="p-3">{u.name}</td>
              <td>{u.email}</td>
              <td>
                <select className="bg-gray-700 p-1 rounded">
                  <option>User</option>
                  <option>HR</option>
                  <option>Admin</option>
                </select>
              </td>
              <td>{u.active ? "Active" : "Inactive"}</td>
              <td>
                <button className="bg-red-600 px-2 py-1 rounded text-xs">
                  Deactivate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagementTable;
