import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description:"",
    projects: "",
    experience: "",
    branches: "",
    logo: null,
    works: []
  });
  
  const navigate = useNavigate();

  // Update API_URL to match your backend structure
  const API_URL = "http://localhost:5000/api";

  const deleteCompany = async (companyId) => {
    if (!window.confirm("Are you sure you want to delete this company?")) {
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      await axios({
        method: "DELETE",
        url: `${API_URL}/companies/${companyId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setCompanies((prevCompanies) =>
        prevCompanies.filter((company) => company._id !== companyId)
      );

      alert("Company deleted successfully");
    } catch (err) {
      console.error("Delete error:", err);
      setError(err.response?.data?.message || "Failed to delete company");
      if (err.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };
  const fetchCompanies = async () => {
    try {
      const response = await axios.get(`${API_URL}/companies`, {
        params: {
          isAdmin: true, // Add this parameter to get all companies
        },
      });

      if (response.data && Array.isArray(response.data.companies)) {
        setCompanies(response.data.companies);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (error) {
      console.error("Error fetching companies:", error);
      setError(error.response?.data?.message || "Failed to fetch companies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
  
    // Append text fields
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('projects', formData.projects);
    data.append('experience', formData.experience);
    data.append('branches', formData.branches);
        // Append logo file
    if (formData.logo) {
      data.append('logo', formData.logo);
    }
  
    // Append work images
    if (formData.works && formData.works.length > 0) {
      formData.works.forEach((workFile) => {
        data.append('works', workFile);
      });
    }
  
    try {
      await axios.post(`${API_URL}/companies`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      setFormData({
        name: "",
        description: "",
        projects: "",
        experience: "",
        branches: "",
        logo: null,
        works: []
      });
      
      fetchCompanies();
      alert("Company added successfully");
    } catch (error) {
      console.error("Error creating company:", error);
      setError(error.response?.data?.message || "Failed to create company");
      if (error.response?.status === 401) {
        handleLogout();
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              Total Companies: {companies.length}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
  
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
  
        {/* Add Company Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Company</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name"
                className="p-2 border rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
               <input
                type="text"
                placeholder="Company Description"
                className="p-2 border rounded"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
              <input
                type="number"
                placeholder="Number of Projects"
                className="p-2 border rounded"
                value={formData.projects}
                onChange={(e) =>
                  setFormData({ ...formData, projects: e.target.value })
                }
                required
              />
              <input
                type="number"
                placeholder="Years of Experience"
                className="p-2 border rounded"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                required
              />
              <input
                type="number"
                placeholder="Number of Branches"
                className="p-2 border rounded"
                value={formData.branches}
                onChange={(e) =>
                  setFormData({ ...formData, branches: e.target.value })
                }
                required
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Company Logo</label>
                <input
                  type="file"
                  accept="image/*"
                  className="p-2 border rounded w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, logo: e.target.files[0] })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Work Images</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="p-2 border rounded w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, works: Array.from(e.target.files) })
                  }
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Company
            </button>
          </form>
        </div>
  
        {/* Companies List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Logo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Projects
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Branches
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Works
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {companies.map((company) => (
                <tr key={company._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={`${API_URL}${company.logo}`}
                      alt={company.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {company.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {company.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {company.projects}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {company.experience}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {company.branches}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {company.works?.map((work, index) => (
                        <img
                          key={index}
                          src={`${API_URL}${work}`}
                          alt={`${company.name} work ${index + 1}`}
                          className="h-10 w-10 rounded object-cover"
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
