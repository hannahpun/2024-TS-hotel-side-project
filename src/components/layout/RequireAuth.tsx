import { Navigate } from "react-router-dom";

interface RequireAuth {
  children: React.ReactNode;
}

function RequireAuth({ children }: RequireAuth) {
  const authed = localStorage.getItem("token");

  return authed ? children : <Navigate to="/login" replace />;
}

export default RequireAuth;
