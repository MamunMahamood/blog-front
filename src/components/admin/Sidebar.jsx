import React from "react";
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="w-1/4 bg-gray-800 min-h-screen p-4">
        <h2 className="text-white text-2xl font-bold mb-8">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/admin/dashboard" className="text-gray-400 hover:text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/posts" className="text-gray-400 hover:text-white">
              Manage Posts
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/users" className="text-gray-400 hover:text-white">
              Manage Users
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-400 hover:text-white">
              Main Home Page
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-400 hover:text-white">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
