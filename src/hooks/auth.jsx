import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./api";


const AuthContext = createContext({});
export function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [cart,setCart] = useState(false);
  async function login({ email, password }) {
    try {
      
      const response = await api.post(
        "login",
        { email, password },
        {withCredentials:true}
      );
      
      const { user } = response.data;
      localStorage.setItem("@food:user", JSON.stringify(user));
      setData({ user });
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message)
      } else {
        throw new Error("Não Foi Possivel Entrar")
      }
    }
  }
  function signOut() {
    localStorage.removeItem("@food:user");
    localStorage.removeItem("@food:cart");
    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@food:user");
   
    if (user) {
   
      setData({
        user: JSON.parse(user)
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ login, user:data.user,signOut,cart,setCart }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
