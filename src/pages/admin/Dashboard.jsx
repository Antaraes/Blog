import BlogPieChart from "@/components/admin/BlogPieChart";
import Statifies from "@/components/admin/Statifies";
import UserPieChat from "@/components/admin/UserPieChart";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Statifies />
      <div className="d-flex justify-content-around ">
        <BlogPieChart />
        <UserPieChat />
      </div>
    </>
  );
};

export default Dashboard;
