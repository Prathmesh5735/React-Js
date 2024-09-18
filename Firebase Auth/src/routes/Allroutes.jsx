import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Privatepage from '../components/Privatepage';
import Dashboard from '../components/Dashboard';
import Signup from '../components/Signup';

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
      <Route path='/signup' element={<Signup/>} />
    </Routes>
  );
}

export default Allroutes;
