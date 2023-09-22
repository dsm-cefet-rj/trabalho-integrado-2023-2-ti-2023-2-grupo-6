import axios from "axios";

const API_URL = "http://localhost:3000";

export const getTeachers = async () => {
  return await axios.get(API_URL + `/teachers?_expand=user`);
};

const updateTeacher = async (id, teacher) => {
  return await axios.patch(API_URL + `/teachers/${id}`, teacher);
};

export const createTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers`, teacher);
};

const createFullTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers/full`, teacher);
};

const deleteTeachers = async (id) => {
  return await axios.delete(API_URL + `/teachers/${id}`);
};

const teacherService = {
  updateTeacher,
  createFullTeacher,
  deleteTeachers,
};

export default teacherService;
