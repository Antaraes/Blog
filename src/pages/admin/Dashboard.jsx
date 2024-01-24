import BlogPieChart from "@/components/admin/BlogPieChart";
import Statifies from "@/components/admin/Statifies";
import UserPieChat from "@/components/admin/UserPieChart";
import React from "react";
import BlogTable from "@/components/admin/BlogTable";

const Dashboard = () => {
  return (
    <>
      <Statifies />
      <div className="d-flex justify-content-around ">
        <BlogPieChart />
        <UserPieChat />
      </div>
      <BlogTable />
    </>
  );
};

export default Dashboard;
