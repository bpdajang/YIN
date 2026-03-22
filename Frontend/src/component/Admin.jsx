import React, { useState, useEffect } from "react";
import { User, LogOut } from "lucide-react";

const Admin = () => {
  const [allResources, setAllResources] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("templates");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editLink, setEditLink] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const categories = [
    { key: "templates", label: "Templates" },
    { key: "eLearning", label: "eLearning" },
    { key: "references", label: "References" },
    { key: "forums", label: "Forums" },
  ];

  const fetchResources = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/resource`,
      );
      if (response.ok) {
        const data = await response.json();
        setAllResources(data);
      }
    } catch {
      setError("Error fetching resources");
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/me`,
          {
            credentials: "include",
          },
        );
        if (response.ok) {
          const userData = await response.json();
          if (userData.role === "admin") {
            setUser(userData);
          } else {
            setError("Access denied. Admin privileges required.");
          }
        } else {
          setError("Please log in as an admin to access this page.");
        }
      } catch (err) {
        setError("Authentication check failed.");
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuth();
  }, []);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleAddResource = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("category", selectedCategory);
    formData.append("name", name);
    formData.append("description", description);
    if (link) formData.append("link", link);
    if (file) formData.append("file", file);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/resource/add`,
        { method: "POST", credentials: "include", body: formData },
      );

      if (response.ok) {
        const newResource = await response.json();
        setAllResources((prev) => ({
          ...prev,
          [selectedCategory]: [...(prev[selectedCategory] || []), newResource],
        }));
        setName("");
        setDescription("");
        setLink("");
        setFile(null);
      } else {
        const errorData = await response.json();
        setError(`Failed to add: ${errorData.message || response.statusText}`);
      }
    } catch (err) {
      setError("Error adding resource");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateResource = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", editName);
    formData.append("description", editDescription);
    if (editLink) formData.append("link", editLink);
    if (editCategory && editCategory !== selectedCategory)
      formData.append("category", editCategory);
    if (file) formData.append("file", file);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/resource/${editingId}`,
        { method: "PUT", credentials: "include", body: formData },
      );

      if (response.ok) {
        // Refetch resources
        await fetchResources();
        setEditingId(null);
        setEditName("");
        setEditDescription("");
        setEditLink("");
        setEditCategory("");
        setFile(null);
        setError("");
      } else {
        const errorData = await response.json();
        setError(
          `Failed to update: ${errorData.message || response.statusText}`,
        );
      }
    } catch (err) {
      setError("Error updating resource");
    } finally {
      setLoading(false);
    }
  };

  const currentResources = allResources[selectedCategory] || [];

  if (authLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Checking authentication...</p>
      </div>
    );

  return (
    <div className="w-screen bg-slate-50">
      {/* Top Bar */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>

          {user && (
            <div className="relative group">
              <button className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition">
                <User size={18} />
                <span className="text-sm font-medium">
                  {user.name || "Admin"}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-red-50 text-red-600">
                  <LogOut size={14} /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat.key
                    ? "bg-indigo-600 text-white"
                    : "bg-white border hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {currentResources.length > 0 ? (
              currentResources.map((res) => (
                <div
                  key={res._id}
                  className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition flex justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{res.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {res.description}
                    </p>
                    {res.link && (
                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 text-sm underline mt-2 block"
                      >
                        View Link
                      </a>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setEditingId(res._id);
                        setEditName(res.name);
                        setEditDescription(res.description);
                        setEditLink(res.link || "");
                        setEditCategory(res.category || selectedCategory);
                      }}
                      className="px-3 py-1 text-sm rounded-lg bg-yellow-100 hover:bg-yellow-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        if (!window.confirm("Delete this resource?")) return;
                        const response = await fetch(
                          `${import.meta.env.VITE_API_BASE_URL}/api/resource/${res._id}`,
                          { method: "DELETE", credentials: "include" },
                        );
                        if (response.ok) {
                          setAllResources((prev) => ({
                            ...prev,
                            [selectedCategory]: prev[selectedCategory].filter(
                              (r) => r._id !== res._id,
                            ),
                          }));
                        }
                      }}
                      className="px-3 py-1 text-sm rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No resources yet.</p>
            )}
          </div>
        </div>

        {/* Right Section - Add/Edit Form */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">
            {editingId ? "Edit Resource" : "Add New Resource"}
          </h2>

          <form
            onSubmit={editingId ? handleUpdateResource : handleAddResource}
            className="space-y-4"
          >
            <select
              value={editingId ? editCategory : selectedCategory}
              onChange={(e) =>
                editingId
                  ? setEditCategory(e.target.value)
                  : setSelectedCategory(e.target.value)
              }
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.label}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Name"
              value={editingId ? editName : name}
              onChange={(e) =>
                editingId
                  ? setEditName(e.target.value)
                  : setName(e.target.value)
              }
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />

            <textarea
              placeholder="Description"
              value={editingId ? editDescription : description}
              onChange={(e) =>
                editingId
                  ? setEditDescription(e.target.value)
                  : setDescription(e.target.value)
              }
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />

            <input
              type="url"
              placeholder="Link (optional)"
              value={editingId ? editLink : link}
              onChange={(e) =>
                editingId
                  ? setEditLink(e.target.value)
                  : setLink(e.target.value)
              }
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input type="file" onChange={handleFileChange} />

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              {loading ? "Processing..." : editingId ? "Update" : "Add"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setEditName("");
                  setEditDescription("");
                  setEditLink("");
                  setEditCategory("");
                  setFile(null);
                  setError("");
                }}
                className="w-full bg-gray-500 text-white py-2 rounded-xl hover:bg-gray-600 transition"
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
