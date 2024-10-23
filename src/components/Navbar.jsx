import React, { useState } from "react";
import Blogs from "../blogs.json";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const allCategories = Blogs.blogs.map((blog) => blog.category);

  // Create a Set to get unique categories
  const uniqueCategories = [...new Set(allCategories)];
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = ()=>{
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/login'); 

  }

  return (
    <>
      <div>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Blog</h1>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-700 hover:text-blue-500">
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/addBlog" className="text-gray-700 hover:text-blue-500">
                  Add Blog
                </Link>
              </li>

              {/* Dropdown for Categories */}
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-gray-700 hover:text-blue-500 focus:outline-none"
                >
                  Categories
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                    {uniqueCategories.map((category, index) => (
                      <li>
                        <Link
                          key={index}
                          to={"/blogs/category/" + category}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link to="#" className="text-gray-700 hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-700 hover:text-blue-500">
                  Login
                </Link>
                <Link to="/register" className="text-gray-700 hover:text-blue-500">
                  Register
                </Link>
                <div onClick={handleLogout} className="text-gray-700 hover:text-blue-500">
                  logout
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
