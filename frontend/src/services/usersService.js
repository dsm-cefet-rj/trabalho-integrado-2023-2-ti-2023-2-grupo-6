import { axiosInstance } from "./axiosInstance.js";

export const getUserById = async (id) => {
  return await axiosInstance.get(`/users/${id}`);
};

export const getUsers = async () => {
  return await axiosInstance.get(`/users`);
};

export const updateUser = async (id, user) => {
  return await axiosInstance.patch(`/users/${id}`, user);
};

export const createUser = async (user) => {
  return await axiosInstance.post(`/users`, user);
};

export const deleteUser = async (id) => {
  return await axiosInstance.delete(`/users/${id}`);
};

export const login = async (user) => {
  return await axiosInstance.post(`/users/login`, user);
};
