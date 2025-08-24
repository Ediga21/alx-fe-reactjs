// src/hooks/useAuth.jsx
import { useState } from "react";

export default function useAuth() {
  // This is just a simple mock authentication state
  const [isAuthenticated] = useState(false); // set true to simulate login
  return { isAuthenticated };
}