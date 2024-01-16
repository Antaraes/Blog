import HeroSection from "@/components/blog/HeroSection";
import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BlogListSection from "@/components/blog/BlogListSection";
import SignUpForSellter from "@/components/blog/SignUpForSellter";
import useFetch from "@/hooks/useFetch";
import { getBlogDetail } from "@/api";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const response = useFetch("blogDetail", () => getBlogDetail(blogId));
  const { isLoading, data, error } = response;

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <Container>
      <HeroSection />
      <BlogDetailSection blog={data.data} />
      <hr />
      <BlogListSection blogId={blogId} title={"What to read next"} />
      <SignUpForSellter />
    </Container>
  );
};

export default BlogDetailPage;
