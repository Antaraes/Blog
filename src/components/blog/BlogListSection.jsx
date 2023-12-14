import React from "react";
import { Row } from "react-bootstrap";
import { blogs } from "@/constants/blog";
import styles from "./BlogLisstSection.module.css";

import BlogCard from "../common/BlogCard";
const BlogListSection = () => {
  return (
    <section className={styles.section}>
      <h1 className="text-center text-uppercase">All Articles</h1>

      <Row>
        {blogs.map((blog, index) => (
          <BlogCard blog={blog} styles={styles} />
        ))}
      </Row>
    </section>
  );
};

export default BlogListSection;
