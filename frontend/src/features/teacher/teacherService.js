import axios from "axios";

const API_URL = "http://localhost:3000";

const getTeachers = async () => {
  return await axios.get(API_URL + `/teachers?_expand=user`);
};

const updateTeacher = async (id, teacher) => {
  return await axios.patch(API_URL + `/teachers/${id}`, teacher);
};

const createTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers`, teacher);
};

const createFullTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers/full`, teacher);
};

const deleteTeacher = async (id) => {
  return await axios.delete(API_URL + `/teachers/${id}`);
};

const teacherService = {
  getTeachers,
  createTeacher,
  updateTeacher,
  createFullTeacher,
  deleteTeacher,
};

export default teacherService;
