import axios from "axios";

const API_URL = "http://localhost:3000/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.date;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.date;
};

const getUserById = async (id) => {
  return await axios.get(API_URL + `${id}`);
};

const getUsers = async () => {
  return await axios.get(API_URL);
};

const updateUser = async (id, user) => {
  return await axios.patch(API_URL + `${id}`, user);
};

const deleteUser = async (id) => {
  return await axios.delete(API_URL + `${id}`);
};

const authService = {
  register,
  logout,
  login,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
};

export default authService;
