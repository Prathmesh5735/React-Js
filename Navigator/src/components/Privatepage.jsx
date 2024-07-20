import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Privatepage = ({children}) => {
    const {token}=useContext(AuthContext)

  const auth =token;

  if(!auth){
    return <Navigate to={"/login"}/>
  }

  return children
}

export default Privatepage