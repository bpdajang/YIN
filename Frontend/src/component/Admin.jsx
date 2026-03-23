import React, { useState, useEffect } from "react";
import { User, LogOut } from "lucide-react";

const Admin = () => {
  const [allResources, setAllResources] = useState({});
  const [allDiscussions, setAllDiscussions] = useState([]);
  const [selectedTab, setSelectedTab] = useState("resources"); // 'resources' or 'discussions'
  const [selectedCategory, setSelectedCategory] = useState("templates");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingType, setEditingType] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editLink, setEditLink] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editVideoUrl, setEditVideoUrl] = useState("");
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const resourceCategories = [
    { key: "templates", label: "Templates" },
    { key: "eLearning", label: "eLearning" },
    { key: "references", label: "References" },
  ];

  const discussionCategories = [
    "Leadership",
    "Entrepreneurship",
    "Community",
    "Peacebuilding",
    "Innovation",
    "Education",
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

  const fetchDiscussions = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/discussions`,
      );

      if (response.ok) {
        const data = await response.json();
        setAllDiscussions(data);
      }
    } catch {
      setError("Error fetching discussions");
    }
  };

  useEffect(() => {
    fetchResources();
    fetchDiscussions();
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
        resetResourceForm();
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
        fetchResources();
        cancelEdit();
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

  const handleAddDiscussion = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/discussions/add`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            category: selectedCategory,
            videoUrl,
          }),
        },
      );

      if (response.ok) {
        const newDiscussion = await response.json();
        setAllDiscussions((prev) => [...prev, newDiscussion]);
        resetDiscussionForm();
      } else {
        const errorData = await response.json();
        setError(`Failed to add: ${errorData.message || response.statusText}`);
      }
    } catch (err) {
      setError("Error adding discussion");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateDiscussion = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/discussions/update/${editingId}`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: editTitle,
            category: editCategory,
            videoUrl: editVideoUrl,
          }),
        },
      );

      if (response.ok) {
        fetchDiscussions();
        cancelEdit();
      } else {
        const errorData = await response.json();
        setError(
          `Failed to update: ${errorData.message || response.statusText}`,
        );
      }
    } catch (err) {
      setError("Error updating discussion");
    } finally {
      setLoading(false);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingType(null);
    resetResourceForm();
    resetDiscussionForm();
    setError("");
  };

  const resetResourceForm = () => {
    setName("");
    setDescription("");
    setLink("");
    setFile(null);
  };

  const resetDiscussionForm = () => {
    setTitle("");
    setVideoUrl("");
  };

  const currentItems =
    selectedTab === "discussions"
      ? allDiscussions
      : allResources[selectedCategory] || [];

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
          {/* Main Tabs: Resources vs Discussions */}
          <div className="flex bg-white rounded-xl p-1 shadow-sm border">
            <button
              onClick={() => setSelectedTab("resources")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition text-sm ${
                selectedTab === "resources"
                  ? "bg-white shadow-sm text-indigo-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setSelectedTab("discussions")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition text-sm ${
                selectedTab === "discussions"
                  ? "bg-emerald-500 text-white shadow-sm"
                  : "text-gray-500 hover:text-emerald-600"
              }`}
            >
              Discussions
            </button>
          </div>

          {selectedTab === "resources" && (
            <div className="flex gap-3 flex-wrap">
              {resourceCategories.map((cat) => (
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
          )}

          {/* Items list */}
          <div className="space-y-4">
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition flex justify-between items-start"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      {selectedTab === "discussions" ? item.title : item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 min-h-[1.25rem]">
                      {selectedTab === "discussions"
                        ? item.videoUrl
                        : item.description}
                    </p>
                    {selectedTab === "discussions"
                      ? null
                      : item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 text-sm underline mt-2 block"
                          >
                            View Link
                          </a>
                        )}
                  </div>
                  <div className="flex gap-3 ml-4 flex-shrink-0">
                    <button
                      onClick={() => {
                        if (selectedTab === "discussions") {
                          setEditingId(item._id);
                          setEditingType("discussion");
                          setEditTitle(item.title);
                          setEditVideoUrl(item.videoUrl);
                          setEditCategory(item.category);
                          setSelectedTab("discussions");
                        } else {
                          setEditingId(item._id);
                          setEditingType("resource");
                          setEditName(item.name);
                          setEditDescription(item.description);
                          setEditLink(item.link || "");
                          setEditCategory(item.category || selectedCategory);
                          setSelectedTab("resources");
                        }
                      }}
                      className="px-3 py-1 text-sm rounded-lg bg-yellow-100 hover:bg-yellow-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        if (
                          !window.confirm(
                            `Delete this ${selectedTab === "discussions" ? "discussion" : "resource"}?`,
                          )
                        )
                          return;
                        const endpoint =
                          selectedTab === "discussions"
                            ? `${import.meta.env.VITE_API_BASE_URL}/api/discussions/delete/${item._id}`
                            : `${import.meta.env.VITE_API_BASE_URL}/api/resource/${item._id}`;
                        const response = await fetch(endpoint, {
                          method: "DELETE",
                          credentials: "include",
                        });
                        if (response.ok) {
                          if (selectedTab === "discussions") {
                            setAllDiscussions((prev) =>
                              prev.filter((d) => d._id !== item._id),
                            );
                          } else {
                            setAllResources((prev) => ({
                              ...prev,
                              [selectedCategory]:
                                prev[selectedCategory]?.filter(
                                  (r) => r._id !== item._id,
                                ) || [],
                            }));
                          }
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
              <p className="text-gray-500">
                No {selectedTab === "discussions" ? "discussions" : "resources"}{" "}
                yet.
              </p>
            )}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">
            {editingId
              ? `Edit ${editingType === "discussion" ? "Discussion" : "Resource"}`
              : `Add New ${selectedTab === "discussions" ? "Discussion" : "Resource"}`}
          </h2>

          <form
            onSubmit={
              selectedTab === "discussions"
                ? editingId
                  ? handleUpdateDiscussion
                  : handleAddDiscussion
                : editingId
                  ? handleUpdateResource
                  : handleAddResource
            }
            className="space-y-4"
          >
            {selectedTab === "discussions" ? (
              // Discussions form
              <>
                <input
                  type="text"
                  placeholder="Title"
                  value={editingId ? editTitle : title}
                  onChange={(e) =>
                    editingId
                      ? setEditTitle(e.target.value)
                      : setTitle(e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
                <select
                  value={editingId ? editCategory : selectedCategory}
                  onChange={(e) =>
                    editingId
                      ? setEditCategory(e.target.value)
                      : setSelectedCategory(e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                >
                  <option value="">Select Category</option>
                  {discussionCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <input
                  type="url"
                  placeholder="YouTube Video URL"
                  value={editingId ? editVideoUrl : videoUrl}
                  onChange={(e) =>
                    editingId
                      ? setEditVideoUrl(e.target.value)
                      : setVideoUrl(e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </>
            ) : (
              // Resources form
              <>
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
                  {resourceCategories.map((cat) => (
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
              </>
            )}

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-xl transition ${
                selectedTab === "discussions"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {loading ? "Processing..." : editingId ? "Update" : "Add"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-xl transition"
              >
                Cancel
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
