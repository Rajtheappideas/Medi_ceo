import React from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loggedIn, user } = useSelector((state) => state.root.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn || user === null) {
      navigate("/login");
      toast.error("Please login first");
    }
  }, []);
  return <>{children}</>;
};

export default PrivateRoute;
