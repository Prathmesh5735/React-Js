import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Privatepage from '../components/Privatepage';
import Dashboard from '../components/Dashboard';

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={
        <Privatepage>
          <Dashboard />
        </Privatepage>
      } />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default Allroutes;
