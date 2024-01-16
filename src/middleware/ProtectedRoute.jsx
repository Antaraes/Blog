import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error(`You are not authenticated`);
      return navigate("/auth/signin");
    } else if (!(user.role === "admin")) {
      toast.error(`You are not authenticated as an admin`);
      return navigate("/auth/signin");
    }
  }, [isAuthenticated, user, navigate]);

  return <Outlet />;
};
