import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const Login = (value)=>{
    setToken(value)
  }

  return (
    <AuthContext.Provider value={{ token,Login }}>
      {children}
    </AuthContext.Provider>
  );
}
