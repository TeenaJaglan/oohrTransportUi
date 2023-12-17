import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function PrivateRoute({ loggedin, children }) {
  if (loggedin) {
    return children;
  } else {
    return <Navigate to="/LoginPage" />;
  }
}
