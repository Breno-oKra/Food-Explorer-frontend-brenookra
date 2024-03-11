import { BrowserRouter } from "react-router-dom";
import { LoginRoutes } from "./login.routes";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";
import { api } from "../hooks/api";
import { CustomerRoutes } from "./customer.routes";

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    try {
      api.get("/user/validate", { withCredentials: true });
    } catch (error) {
      if (error.response?.status === 401) {
        return signOut();
      }
      return;
    }
  }, []);
  function Routerredirect() {
    if (user) {
      if (user.role == "customer") {
        return <CustomerRoutes />;
      } else if (user.role == "admin") {
        return <AdminRoutes />;
      }
    }
    return <LoginRoutes />;
  }
  return (
    <BrowserRouter>
      <Routerredirect />
    </BrowserRouter>
  );
}
