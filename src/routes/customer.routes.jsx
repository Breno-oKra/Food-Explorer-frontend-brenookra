import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Favorites } from '../pages/Favorites';
import { Requests } from '../pages/Requests';
import { Historic } from '../pages/Historic';
import { useAuth } from '../hooks/auth';
import { useEffect } from 'react';
import { api } from '../hooks/api';



export function CustomerRoutes() {
  const {signOut } = useAuth();
  useEffect(() => {
    api.get("/user/validate",{withCredentials:true}).catch((error) => {
      
      if (error.response?.status === 401) { 
        return signOut();
        
      }
      return
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/requests/:id" element={<Requests/>} />
      <Route path="/historic" element={<Historic/>} />
     
     {/*  <Route path="*" exact={true} element={<NotFound />} /> */}
    </Routes>
  );
}