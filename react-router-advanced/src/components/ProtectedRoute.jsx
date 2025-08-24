// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const isAuthenticated = false; // change this to true to simulate login

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
