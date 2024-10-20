import React from "react";

const Activities = () => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600">Activity</th>
              <th className="py-2 px-4 text-left text-gray-600">Date</th>
              <th className="py-2 px-4 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">New Post Created</td>
              <td className="py-2 px-4 border-b">Oct 18, 2024</td>
              <td className="py-2 px-4 border-b text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">User Registered</td>
              <td className="py-2 px-4 border-b">Oct 17, 2024</td>
              <td className="py-2 px-4 border-b text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Comment Approved</td>
              <td className="py-2 px-4 border-b">Oct 16, 2024</td>
              <td className="py-2 px-4 border-b text-green-600">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Activities;
