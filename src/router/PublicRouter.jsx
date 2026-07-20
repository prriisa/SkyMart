import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { MyStore } from "../context/MyContext";

const PublicRouter = () => {
  const { currentUser } = useContext(MyStore);

  if (currentUser) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default PublicRouter;