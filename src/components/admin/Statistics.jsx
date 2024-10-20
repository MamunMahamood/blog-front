import React from "react";

const Statistics = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {/* <!-- Total Posts --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Total Posts</h2>
          <p className="text-3xl font-semibold text-blue-500">123</p>
        </div>

        {/* <!-- Total Users --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Total Users</h2>
          <p className="text-3xl font-semibold text-green-500">456</p>
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
