import { getAllUsers, getBlogByFilter } from "@/api";
import { user } from "@/assets/dashboard";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import CountUp from "react-countup";
import Spinner from "../Spinner";
import { useSelector } from "react-redux";

const StatifiesCard = ({ title, count }) => {
  return (
    <Card className=" h-50">
      <Card.Body className="d-flex align-items-center gap-5">
        <Image src={user} width={90} />
        <div>
          <Card.Text>{title}</Card.Text>
          <Card.Text style={{ fontWeight: "bold", fontSize: "2rem" }}>
            <CountUp end={count} />
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

const Statifies = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useFetch("users", () =>
    getAllUsers({
      skip: 0,
      limit: 5,
      sortBy: "email",
      order: "desc",
    })
  );
  const { blogs } = useSelector((state) => state.blog);
  console.log("first", blogs);
  if (isLoading) <Spinner lg />;
  const data = [
    {
      title: "Total user",
      count: users?.data?.totalUsers,
    },
    {
      title: "Total Blog",
      count: blogs?.total,
    },
    {
      title: "Total Pending Blog",
      count: blogs?.pendingTotalBlogs,
    },
    {
      title: "Total Income",
      count: 100,
    },
  ];
  return (
    <div className="d-flex gap-3 mt-5 justify-content-between">
      {data.map((data, index) => (
        <StatifiesCard title={data.title} count={data.count} />
      ))}
    </div>
  );
};

export default Statifies;
