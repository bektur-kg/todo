import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthRoutes from '../routes/AuthRoutes';
import LayouRoutes from '../routes/LayoutRoutes';

const Layout = () => {

  return (
    <div>
     <Header />
     <Routes>
      <Route path='/auth/*' element={<AuthRoutes/>}/>
      <Route path='/*' element={<LayouRoutes/>}/>
     </Routes>
    </div>
  )
}

export default Layout