import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/Layout";
import HomePage from "@/pages/HomePage";
import BlogDetailPage from "@/pages/blog/BlogDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";
import BlogListPage from "@/pages/blog/BlogListPage";
import AboutPage from "@/pages/AboutPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import SignInPage from "@/pages/auth/SignInPage";
import CreateBlog from "@/pages/blog/CreateBlog";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import BlogList from "@/pages/admin/BlogList";
import AdminManagment from "@/pages/admin/AdminManagment";
import Category from "@/pages/admin/Category";
import BlackList from "@/pages/admin/BlackList";
import UserList from "@/pages/admin/UserList";
import {
  ProtectedRoutes,
  ProtectedRoutesForAdmin,
  ProtectedRoutesForUser,
} from "@/middleware/ProtectedRoute";
import ProfilePage from "@/pages/ProfilePage";
import useFetch from "@/hooks/useFetch";
import { getUserDetails } from "@/api";
import { store } from "@/redux/store";
import { addUser } from "@/redux/user/userSlice";

const MainRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/auth/signup",
      element: <SignUpPage />,
    },
    {
      path: "/auth/signin",
      element: <SignInPage />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <HomePage />,
        },

        {
          index: true,
          path: "/blog",
          element: <BlogListPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },

        {
          path: "/me",
          element: <ProfilePage />,
        },
        {
          path: "/blog/:blogId",
          element: <BlogDetailPage />,
        },
      ],
    },
    {
      path: "/createblog",
      element: (
        <ProtectedRoutesForUser>
          <CreateBlog />
        </ProtectedRoutesForUser>
      ),
    },
    {
      path: "/admin",
      element: <ProtectedRoutesForAdmin />,
      children: [
        {
          element: <AdminLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "/admin/blogsList",
              element: <BlogList />,
            },
            {
              path: "/admin/userList",
              element: <UserList />,
            },
            {
              path: "/admin/admin_management",
              element: <AdminManagment />,
            },
            {
              path: "/admin/category",
              element: <Category />,
            },
            {
              path: "/admin/block_list",
              element: <BlackList />,
            },
          ],
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
