import { Routes, Route } from 'react-router-dom';

import { SingIn } from '../pages/SingIn';
import { SingUp } from '../pages/SingUp';
import { Navigate } from "react-router-dom";
export function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />
      <Route path="*" exact={true} element={<Navigate to="/" />} />
    </Routes>
  );
}