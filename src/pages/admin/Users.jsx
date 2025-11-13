import React, { useEffect, useState } from "react";
import { loadUsers, saveUsers } from "../../data/usersData";
import { toast } from "react-toastify";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "customer" });

  useEffect(() => setUsers(loadUsers()), []);

  function startAdd() {
    setEditing("new");
    setForm({ name: "", email: "", role: "customer" });
  }

  function startEdit(u) {
    setEditing(u.id);
    setForm({ name: u.name, email: u.email, role: u.role });
  }

  function cancel() {
    setEditing(null);
  }

  function save() {
    if (!form.name || !form.email)
      return toast.error("Name and email required");
    let next = [...users];
    if (editing === "new") {
      const id = Math.max(0, ...users.map((u) => u.id)) + 1;
      next.push({ id, ...form });
    } else {
      next = next.map((u) => (u.id === editing ? { ...u, ...form } : u));
    }
    saveUsers(next);
    setUsers(next);
    setEditing(null);
    toast.success("Saved");
  }

  function remove(id) {
    if (!confirm("Delete user?")) return;
    const next = users.filter((u) => u.id !== id);
    saveUsers(next);
    setUsers(next);
    toast.success("Deleted");
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl">Users</h3>
        <button className="btn" onClick={startAdd}>
          Add User
        </button>
      </div>

      <div className="bg-white rounded shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.id}</td>
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">{u.role}</td>
                <td className="p-2">
                  <button
                    className="mr-2 text-blue-600"
                    onClick={() => startEdit(u)}
                  >
                    Edit
                  </button>
                  <button className="text-red-600" onClick={() => remove(u.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h4 className="mb-2">
            {editing === "new" ? "Add User" : "Edit User"}
          </h4>
          <div className="grid gap-2">
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2"
            />
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border p-2"
            />
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="border p-2"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
            <div className="flex gap-2">
              <button className="btn" onClick={save}>
                Save
              </button>
              <button className="btn" onClick={cancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
