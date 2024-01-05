import { BrowserRouter } from "react-router-dom";
import { LoginRoutes } from "./login.routes";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";
import { api } from "../hooks/api";

export function Routes() {
  const { user, signOut } = useAuth();
  useEffect(() => {
    
    api.get("/user/validate",{withCredentials:true}).catch((error) => {
      if (error.response?.status === 401) {
        
        signOut();
      }
     
    });
  }, []);
  function Routerredirect(){
    if(user){
      return <AdminRoutes />
    }
    return <LoginRoutes />
  }
  return (
    <BrowserRouter>
      <Routerredirect/>

    </BrowserRouter>
  );
}
