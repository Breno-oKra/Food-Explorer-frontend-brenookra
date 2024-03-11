import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Add } from '../pages/Add';
import { Update } from '../pages/Update';
import { Historic } from '../pages/Historic';
import { useEffect } from 'react';
import { api } from '../hooks/api';
import { useAuth } from '../hooks/auth';

export function AdminRoutes() {
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
      <Route path="/new" element={<Add />} />
      <Route path="/change/:id" element={<Update/>} />
      <Route path="/historic" element={<Historic/>} />
      
     {/*  <Route path="*" exact={true} element={<NotFound />} /> */}
    </Routes>
  );
}