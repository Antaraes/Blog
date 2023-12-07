import React from "react";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  return <div>BlogDetailPage {blogId}</div>;
};

export default BlogDetailPage;
