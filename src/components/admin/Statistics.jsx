import React from "react";
import { useState, useEffect } from "react";

const Statistics = () => {

  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:8000/blogs");
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };


    fetchBlogs();
    fetchUsers();
  }, []);


  

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner"></div>
      </div>
    ); // Display a loading message while fetching data
  }
  // Default category is "latest"
  



  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {/* <!-- Total Posts --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Total Posts</h2>
          <p className="text-3xl font-semibold text-blue-500">{blogs.length}</p>
        </div>

        {/* <!-- Total Users --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Total Users</h2>
          <p className="text-3xl font-semibold text-green-500">{users.length}</p>
        </div>

        {/* <!-- Total Comments --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Total Comments</h2>
          <p className="text-3xl font-semibold text-red-500">789</p>
        </div>
      </div>
    </>
  );
};

export default Statistics;
