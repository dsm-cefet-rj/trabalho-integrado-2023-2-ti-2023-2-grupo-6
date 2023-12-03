import axios from "axios";

let API_URL = "http://localhost:3300";



const register = async (userData) => {
  userData.sex = userData.sex.toLowerCase()
  if (userData.role === "TEACHER"){
      API_URL = "http://localhost:3300/teachers"
      try {
        const res = await axios.post(API_URL, userData);
        console.log(res.data)
        return res.data;
      } catch (err){
        console.log(err)
      }
  } else if (userData.role === "STUDENT"){
    API_URL = "http://localhost:3300/students"
    try {
      const res = await axios.post(API_URL, userData);
      console.log(res.data)
      return res.data;
    } catch (err){
      console.log(err)
    }
  }
}

const logout = () => {
  localStorage.removeItem("token");
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("id", JSON.stringify(response.data.id));
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
