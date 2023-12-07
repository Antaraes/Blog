import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/Layout";
import HomePage from "@/pages/HomePage";
import BlogDetailPage from "@/pages/blog/BlogDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";
import BlogListPage from "@/pages/blog/BlogListPage";
import AboutPage from "@/pages/AboutPage";

const MainRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/blog",
          element: <BlogListPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/blog/:blogId",
          element: <BlogDetailPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default MainRouter;
