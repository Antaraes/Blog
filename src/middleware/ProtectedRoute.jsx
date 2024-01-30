import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutesForAdmin = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  if (!isAuthenticated) {
    toast.error("Please Login");
    return <Navigate to={"/auth/signin"} replace />;
  } else {
    if (user.role === "admin") {
      return <Outlet />;
    } else {
      toast.error("Please Login as admin");
      return <Navigate to={"/auth/signin"} replace />;
    }
  }
};

export const ProtectedRoutesForUser = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    toast.error("Please Login");
    return <Navigate to={"/auth/signin"} replace />;
  } else {
    return children;
  }
};
