import React from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useSelector((state) => state.root.globalStates);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
      toast.error("Please login first");
    }
  }, []);
  return <>{children}</>;
};

export default PrivateRoute;
