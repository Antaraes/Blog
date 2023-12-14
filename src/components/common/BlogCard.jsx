import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const BlogCard = ({ blog, styles }) => {
  return (
    <Col as={Link} to={`/blog/${blog.id}`} md={6} sm={12} className={[styles.blog, "m-6"]}>
      <Card.Img variant="top" src={blog.image} />
      <Card.Title className="text-center">{blog.title}</Card.Title>
    </Col>
  );
};

export default BlogCard;
