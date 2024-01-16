import { user } from "@/assets/dashboard";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import CountUp from "react-countup";

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

const data = [
  {
    title: "Total user",
    count: 100,
  },
  {
    title: "Total Blog",
    count: 200,
  },
  {
    title: "Total Pending Blog",
    count: 100,
  },
  {
    title: "Total Income",
    count: 100,
  },
];

const Statifies = () => {
  return (
    <div className="d-flex gap-3 mt-5 justify-content-between">
      {data.map((data, index) => (
        <StatifiesCard title={data.title} count={data.count} />
      ))}
    </div>
  );
};

export default Statifies;
