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
   
    async function handleValidate(){
      await api.get("/user/validate", { withCredentials: true }).catch((err) => {
        if (err.code == "ERR_NETWORK") {
          return alert("Pagina Não Autorizada");
        } else if (err.code == 401) {
          signOut();
          return alert("Deslogado");
         
        }
        return;
      });
    }
    handleValidate()
  }, []);
  function Routerredirect() {
    
    if (user) {
     
      if (user.role == "customer") {

        return <CustomerRoutes />;
      }
      return <AdminRoutes />;
    }
    return <LoginRoutes />;
  }
  return (
    
    <BrowserRouter>
      {user? <Routerredirect /> :  <LoginRoutes /> }
      
    </BrowserRouter>
  );
}
