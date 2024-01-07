import { Navigate, useLocation } from "react-router";
import { useData } from "../context/data.context";
export function RequiresAuth({ children }) {
  const {
    state: { loggedIn },
  } = useData();
  const location = useLocation();

  return loggedIn === true ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }}></Navigate>
  );
}
