import React from "react";
import { Row } from "react-bootstrap";
import { blogs } from "@/constants/blog";
import styles from "./BlogLisstSection.module.css";

import BlogCard from "../common/BlogCard";
const BlogListSection = ({ blogId, title }) => {
  // filter here
  const filteredBlogs = blogId ? blogs.filter((blog) => blog.id !== blogId) : blogs;
  return (
    <section className={styles.section}>
      <h1 className="text-center text-uppercase">{title}</h1>

      <Row>
        {filteredBlogs.map((blog, index) => (
          <BlogCard blog={blog} styles={styles} />
        ))}
      </Row>
    </section>
  );
};

export default BlogListSection;
