import { useEffect, useState } from "react";
import userApi from "../../api/userApi";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    userApi.get("/users/me").then((res) => setUser(res.data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}