import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Add } from '../pages/Add';
import { Update } from '../pages/Update';


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<Add />} />
      <Route path="/change/:id" element={<Update/>} />
      

     {/*  <Route path="*" exact={true} element={<NotFound />} /> */}
    </Routes>
  );
}