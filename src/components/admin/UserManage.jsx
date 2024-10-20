import React from "react";

const UserManage = () => {
  return (
    <>
      <div className="mt-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <h2 className="text-2xl font-bold mb-4">User Management</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">
              Total Users:{" "}
              <span className="font-semibold text-gray-700">456</span>
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Add New User
            </button>
          </div>
          <table className="w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-4 px-12 text-left text-gray-600">Username</th>
                <th className="py-4 px-12 text-left text-gray-600">Email</th>
                <th className="py-4 px-12 text-left text-gray-600">Role</th>
                <th className="py-4 px-12 text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-12 border-b">JohnDoe</td>
                <td className="py-4 px-12 border-b">johndoe@example.com</td>
                <td className="py-4 px-12 border-b">Editor</td>
                <td className="py-4 px-12 border-b">
                  <button className="bg-yellow-500 text-white px-4 py-1 rounded-lg mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-12 border-b">JaneSmith</td>
                <td className="py-4 px-12 border-b">janesmith@example.com</td>
                <td className="py-4 px-12 border-b">Author</td>
                <td className="py-4 px-12 border-b">
                  <button className="bg-yellow-500 text-white px-4 py-1 rounded-lg mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserManage;
