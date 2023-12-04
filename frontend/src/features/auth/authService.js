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
  localStorage.removeItem("role");
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    const { token, id, role } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("id", id);
    localStorage.setItem("role", role);
  }

  return response.data;
};


const authService = {
  register,
  logout,
  login,
};

export default authService;
