import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "@/components/blog/HeroSection";
import BlogListSection from "@/components/blog/BlogListSection";

const BlogListPage = () => {
  return (
    <Container>
      <HeroSection />
      <BlogListSection />
    </Container>
  );
};

export default BlogListPage;
