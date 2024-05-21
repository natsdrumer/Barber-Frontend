
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030', 
  withCredentials: true, 
});

export const registerService = async (data) => {
  return await api.post('/auth/register', data);
};

export const loginService = async (data) => {
  return await api.post('/auth/login', data);
};

export const logoutService = async () => {
  return await api.post('/auth/logout');
};

export const getAppointments = async () => {
  return await api.get('/appointments');
};

export const createAppointment = async (data) => {
  return await api.post('/appointments', data);
};

export const updateAppointment = async (id, data) => {
  return await api.put(`/appointments/${id}`, data);
};

export const deleteAppointment = async (id) => {
  return await api.delete(`/appointments/${id}`);
};

export const getBarbers = async () => {
  return await api.get('/barbers');
};

export const getServices = async () => {
  return await api.get('/services');
};
