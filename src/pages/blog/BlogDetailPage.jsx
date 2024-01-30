import HeroSection from "@/components/blog/HeroSection";
import React, { useEffect } from "react";
import { Container, Card, Image } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BlogListSection from "@/components/blog/BlogListSection";
import SignUpForSellter from "@/components/blog/SignUpForSellter";
import useFetch from "@/hooks/useFetch";
import { getBlogDetail } from "@/api";
import Spinner from "@/components/Spinner";

const BlogDetailPage = () => {
  const { blogId } = useParams();

  const response = useFetch("blogDetail", () => getBlogDetail(blogId));
  const { isLoading, data, error, refetch } = response;
  useEffect(() => {
    refetch();
  }, [blogId]);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={{ width: "100" }}>
          <Spinner lg />
        </div>
      </div>
    );
  }

  return (
    <Container>
      <BlogDetailSection blog={data.data} />
      <hr />
      <BlogListSection blogId={blogId} title={"What to read next"} />
      <SignUpForSellter />
    </Container>
  );
};

export default BlogDetailPage;
