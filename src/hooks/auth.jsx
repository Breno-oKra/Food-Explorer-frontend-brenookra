import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./api";

const AuthContext = createContext({});
export function AuthProvider({ children }) {
  const [data, setData] = useState({});
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
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }
  function signOut() {
    localStorage.removeItem("@food:user");
    
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
    <AuthContext.Provider value={{ login, user:data.user,signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
