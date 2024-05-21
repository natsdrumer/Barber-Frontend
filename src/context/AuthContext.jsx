// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { loginService, registerService, logoutService } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  const login = async (email, password) => {
    try {
      const response = await loginService({ email, password });
      setUser(response.data.user);
      navigate('/appointments');
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await registerService({ name, email, password });
      setUser(response.data.user);
      navigate('/appointments');
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await logoutService();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
