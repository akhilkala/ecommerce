import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { IRootState } from "../redux/store";

export default function ProtectedRoute({ ...rest }) {
  const auth = useSelector((state: IRootState) => state.auth);
  let element = rest.element;

  if (auth.loading) element = <h1>Loading</h1>;
  if (!auth.user) element = <Navigate to="/landing" />;

  return <Route {...rest} element={element} />;
}
