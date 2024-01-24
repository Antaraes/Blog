import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ role, children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (role === "admin" && !(user && user.role === "admin")) {
      toast.error(`You are not authenticated as an admin`);
      navigate("/auth/signin");
    } else if (!isAuthenticated) {
      toast.error(`You are not authenticated`);
      navigate("/auth/signin");
    }
  }, [isAuthenticated, user, navigate, role]);

  return <Outlet />;
};
