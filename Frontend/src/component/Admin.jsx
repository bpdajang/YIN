import React, { useState, useEffect } from "react";

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
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const categories = [
    { key: "templates", label: "Templates", color: "bg-blue-500" },
    { key: "eLearning", label: "eLearning", color: "bg-green-500" },
    { key: "references", label: "References", color: "bg-purple-500" },
    { key: "faqs", label: "FAQs", color: "bg-orange-500" },
    { key: "forums", label: "Forums", color: "bg-red-500" },
  ];

  // Fetch resources
  const fetchResources = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/resource");
      if (response.ok) {
        const data = await response.json();
        setAllResources(data);
      } else {
        setError("Failed to fetch resources");
      }
    } catch (err) {
      setError("Error fetching resources");
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

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
      const response = await fetch("http://localhost:5000/api/resource/add", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

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
        const errData = await response.json();
        setError(errData.message || "Failed to add resource");
      }
    } catch (err) {
      setError("Error adding resource");
    } finally {
      setLoading(false);
    }
  };

  const currentResources = allResources[selectedCategory] || [];
  const currentCategory = categories.find(
    (cat) => cat.key === selectedCategory
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Admin Section - Resource Management
      </h2>

      {/* Category Tabs */}
      <div className="tabs tabs-boxed mb-6">
        {categories.map((cat) => (
          <a
            key={cat.key}
            className={`tab ${
              selectedCategory === cat.key ? "tab-active" : ""
            } ${cat.color} text-white`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </a>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Resources List */}
        <div className="flex-1">
          <h3
            className={`text-xl font-semibold mb-4 p-2 rounded ${currentCategory.color} text-white`}
          >
            {currentCategory.label} Resources
          </h3>
          <ul className="space-y-2">
            {currentResources.length > 0 ? (
              currentResources.map((res) => (
                <li
                  key={res._id}
                  className="p-4 border rounded shadow-sm flex justify-between items-center"
                >
                  <div>
                    <strong className="text-lg">{res.name}</strong>
                    <p className="text-gray-600">{res.description}</p>
                    {res.link && (
                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Link
                      </a>
                    )}
                  </div>
                  <div className="space-x-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => {
                        setEditingId(res._id);
                        setEditName(res.name);
                        setEditDescription(res.description);
                        setEditLink(res.link || "");
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={async () => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this resource?"
                          )
                        ) {
                          try {
                            const response = await fetch(
                              `http://localhost:5000/api/resource/${res._id}`,
                              {
                                method: "DELETE",
                                credentials: "include",
                              }
                            );
                            if (response.ok) {
                              setAllResources((prev) => ({
                                ...prev,
                                [selectedCategory]: prev[
                                  selectedCategory
                                ].filter((r) => r._id !== res._id),
                              }));
                            } else {
                              alert("Failed to delete resource");
                            }
                          } catch (error) {
                            alert("Error deleting resource");
                          }
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">
                No resources in this category yet.
              </p>
            )}
          </ul>
        </div>

        {/* Add Resource Form */}
        <div className="flex-1">
          <h3
            className={`text-xl font-semibold mb-4 p-2 rounded ${currentCategory.color} text-white`}
          >
            Add New {currentCategory.label} Resource
          </h3>
          <form
            onSubmit={
              editingId
                ? async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    setError("");
                    try {
                      const response = await fetch(
                        `http://localhost:5000/api/resource/${editingId}`,
                        {
                          method: "PUT",
                          credentials: "include",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            name: editName,
                            description: editDescription,
                            link: editLink,
                          }),
                        }
                      );
                      if (response.ok) {
                        const updatedResource = await response.json();
                        setAllResources((prev) => ({
                          ...prev,
                          [selectedCategory]: prev[selectedCategory].map((r) =>
                            r._id === editingId ? updatedResource : r
                          ),
                        }));
                        setEditingId(null);
                        setEditName("");
                        setEditDescription("");
                        setEditLink("");
                      } else {
                        const errData = await response.json();
                        setError(
                          errData.message || "Failed to update resource"
                        );
                      }
                    } catch (err) {
                      setError("Error updating resource");
                    } finally {
                      setLoading(false);
                    }
                  }
                : handleAddResource
            }
            className="space-y-4 p-4 border rounded shadow-sm bg-gray-50"
          >
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                value={editingId ? editName : name}
                onChange={(e) =>
                  editingId
                    ? setEditName(e.target.value)
                    : setName(e.target.value)
                }
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Description</label>
              <textarea
                value={editingId ? editDescription : description}
                onChange={(e) =>
                  editingId
                    ? setEditDescription(e.target.value)
                    : setDescription(e.target.value)
                }
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Link (optional)
              </label>
              <input
                type="url"
                value={editingId ? editLink : link}
                onChange={(e) =>
                  editingId
                    ? setEditLink(e.target.value)
                    : setLink(e.target.value)
                }
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                File (optional)
              </label>
              <input type="file" onChange={handleFileChange} />
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <button
              type="submit"
              className={`btn ${currentCategory.color} text-white`}
              disabled={loading}
            >
              {loading ? "Adding..." : `Add to ${currentCategory.label}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
