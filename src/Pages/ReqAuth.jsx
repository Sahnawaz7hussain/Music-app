import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const isAuth = useSelector((store) => {
    return store.authReducer.isAuth;
  });
  const location = useLocation();
  //   console.log("reqAuth", location);
  if (!isAuth) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname, name: "sahnwaz" }}
        replace
      />
    );
  }
  return children;
};

export default ReqAuth;
