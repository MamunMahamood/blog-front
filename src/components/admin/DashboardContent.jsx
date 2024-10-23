import React from "react";
import Statistics from "./Statistics";
import Activities from "./Activities";
import UserManage from "./UserManage";

const DashboardContent = () => {
  return (
    <>
      <div className="w-3/4 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

        {/* <!-- Statistics Grid --> */}
        <Statistics/>

        {/* <!-- Recent Activities --> */}
        <Activities />

        {/* <!-- User Management Section --> */}
        {/* <UserManage /> */}
      </div>
    </>
  );
};

export default DashboardContent;
