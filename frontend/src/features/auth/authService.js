import axios from "axios";

const API_URL = "http://localhost:3300/";

const register = async (userData) => {
  if (userData.role === "TEACHER") {
    const response = await axios.post(API_URL + "teachers", userData);
    console.log(response.data);
    return response.data;
  } else if (userData.role === "STUDENT") {
    const response = await axios.post(API_URL + "students", userData);
    console.log(response.data);
    return response.data;
  }
};

const logout = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("token", (response.data.token));
    localStorage.setItem("id", (response.data.id));
  }

  return response.data;
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
