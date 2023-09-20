import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getUsers as getUsersService,
  updateUser as updateUserService,
  createUser as createUserService,
  deleteUser as deleteUserService,
  login as loginService,
} from "../../services/usersService";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await getUsersService();

  return response.data;
});

export const updateUser = createAsyncThunk("user/updateUser", async (user) => {
  const response = await updateUserService(user);

  return response.data;
});

export const createUser = createAsyncThunk("user/createUser", async (user) => {
  const response = await createUserService(user);

  return response.data;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  const response = await deleteUserService(id);

  return response.data;
});

export const login = createAsyncThunk("user/login", async (loginData) => {
  const response = await loginService(loginData);

  return response.data;
});
