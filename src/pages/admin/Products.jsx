import React, { useEffect, useState } from "react";
import { loadProducts, saveProducts } from "../../data/productsData";
import { toast } from "react-toastify";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    title: "",
    price: 0,
    inventory: 0,
    image: "",
  });

  useEffect(() => setProducts(loadProducts()), []);

  function startAdd() {
    setEditing("new");
    setForm({ title: "", price: 0, inventory: 0, image: "" });
  }

  function startEdit(p) {
    setEditing(p.id);
    setForm({
      title: p.title,
      price: p.price,
      inventory: p.inventory,
      image: p.image,
    });
  }

  function onImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((f) => ({ ...f, image: url }));
  }

  function save() {
    if (!form.title) return toast.error("Title required");
    let next = [...products];
    if (editing === "new") {
      const id = Math.max(0, ...products.map((p) => p.id)) + 1;
      next.push({ id, ...form });
    } else {
      next = next.map((p) => (p.id === editing ? { ...p, ...form } : p));
    }
    saveProducts(next);
    setProducts(next);
    setEditing(null);
    toast.success("Saved");
  }

  function remove(id) {
    if (!confirm("Delete product?")) return;
    const next = products.filter((p) => p.id !== id);
    saveProducts(next);
    setProducts(next);
    toast.success("Deleted");
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl">Products</h3>
        <button className="btn" onClick={startAdd}>
          Add Product
        </button>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Image</th>
              <th className="p-2">Title</th>
              <th className="p-2">Price</th>
              <th className="p-2">Inventory</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{p.id}</td>
                <td className="p-2">
                  <img
                    src={p.image}
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="p-2">{p.title}</td>
                <td className="p-2">${p.price}</td>
                <td className="p-2">{p.inventory}</td>
                <td className="p-2">
                  <button
                    className="mr-2 text-blue-600"
                    onClick={() => startEdit(p)}
                  >
                    Edit
                  </button>
                  <button className="text-red-600" onClick={() => remove(p.id)}>
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
            {editing === "new" ? "Add Product" : "Edit Product"}
          </h4>
          <div className="grid gap-2">
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="border p-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: parseFloat(e.target.value || 0) })
              }
              className="border p-2"
            />
            <input
              type="number"
              placeholder="Inventory"
              value={form.inventory}
              onChange={(e) =>
                setForm({ ...form, inventory: parseInt(e.target.value || 0) })
              }
              className="border p-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
              className="border p-2"
            />
            {form.image && (
              <img
                src={form.image}
                alt="preview"
                className="w-32 h-32 object-cover"
              />
            )}
            <div className="flex gap-2">
              <button className="btn" onClick={save}>
                Save
              </button>
              <button className="btn" onClick={() => setEditing(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
