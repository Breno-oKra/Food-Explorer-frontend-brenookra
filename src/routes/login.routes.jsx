import { Routes, Route } from "react-router-dom";

import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";
import { Navigate } from "react-router-dom";
export function LoginRoutes() {
  return (
    <Routes>
      <Route path="/login" exact={true} element={<SingIn />} />
      <Route path="/register" exact={true} element={<SingUp />} />
      <Route path="*" exact={true} element={<Navigate to="/login" />} />
    </Routes>
  );
}
