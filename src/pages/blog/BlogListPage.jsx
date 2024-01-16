import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "@/components/blog/HeroSection";
import BlogListSection from "@/components/blog/BlogListSection";
import useFetch from "@/hooks/useFetch";
import { useSelector } from "react-redux";

const BlogListPage = () => {
  const { user, accessToken, refreshToken } = useSelector((state) => state.user);
  console.log("user", user, accessToken, refreshToken);
  return (
    <Container>
      <HeroSection />
      <BlogListSection title={"All Articles"} />
    </Container>
  );
};

export default BlogListPage;
