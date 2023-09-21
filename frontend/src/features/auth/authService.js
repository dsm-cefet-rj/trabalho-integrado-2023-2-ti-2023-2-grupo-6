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

const authService = {
  register,
  logout,
  login,
};

export default authService;
