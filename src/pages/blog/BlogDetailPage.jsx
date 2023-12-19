import HeroSection from "@/components/blog/HeroSection";
import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { blogs } from "@/constants/blog";

import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BlogListSection from "@/components/blog/BlogListSection";
import SignUpForSellter from "@/components/blog/SignUpForSellter";

const BlogDetailPage = () => {
  const location = useLocation();
  const { blogId } = useParams();
  const detailBlog = blogs.find((blog) => blog.id === parseInt(blogId, 10));

  return (
    <Container>
      <HeroSection />
      <BlogDetailSection blog={detailBlog} />
      <hr />
      <BlogListSection blogId={detailBlog.id} title={"What to read next"} />
      <SignUpForSellter />
    </Container>
  );
};

export default BlogDetailPage;
