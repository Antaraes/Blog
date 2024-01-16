import React from "react";
import { Row } from "react-bootstrap";
import styles from "./BlogLisstSection.module.css";
import * as api from "@/api/index";
import BlogCard from "../common/BlogCard";
import useFetch from "@/hooks/useFetch";

const BlogListSection = ({ blogId, title }) => {
  const { isLoading, data, error } = useFetch("blogLists", api.getAllBlog);
  const blogs = data?.data?.data;
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  const filteredBlogs = blogs ? (blogId ? blogs.filter((blog) => blog._id !== blogId) : blogs) : [];

  return (
    <section className={styles.section}>
      <h1 className="text-center text-uppercase">{title}</h1>

      <Row>
        {filteredBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} styles={styles} />
        ))}
      </Row>
    </section>
  );
};

export default BlogListSection;
