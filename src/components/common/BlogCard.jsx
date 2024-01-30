import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
const BlogCard = ({ blog, styles }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(`/blog/${blog._id}`, { state: blog });
  };
  console.log(blog);
  return (
    <Col
      onClick={handleClick}
      md={location.pathname === "/blog" ? 6 : 4}
      sm={12}
      className={[styles.blog, "m-6"]}
    >
      {blog.url_list.length > 0 && <Card.Img variant="top" src={blog.url_list[0].link} />}
      <Card.Title className="text-center">{blog.title}</Card.Title>
    </Col>
  );
};

export default BlogCard;
