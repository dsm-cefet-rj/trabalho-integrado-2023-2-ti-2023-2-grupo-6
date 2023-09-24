import axios from "axios";

const API_URL = "http://localhost:3000";

const getTeachers = async () => {
  return await axios.get(API_URL + `/teachers?_expand=user`);
};

const getTeachersDetails = async (id) => {
  return await axios.get(API_URL + `/teachers/${id}?_expand=user`);
};

const updateTeacher = async (id, teacher) => {
  return await axios.patch(API_URL + `/teachers/${id}`, teacher);
};

export const createTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers`, teacher);
};

const updateAvailableHours = async (id, newAvailability) => {
  const response = await axios.get(API_URL + `/teachers/${id}`);

  if (response.data) {
    const teacherData = {
      ...response.data, // Mantém os dados existentes do professor
      availableHours: [...response.data.availableHours, newAvailability],
    };
    await updateTeacher(id, teacherData);
  }

  return response.data;
};

const createFullTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers/full`, teacher);
};

const deleteTeacher = async (id) => {
  return await axios.delete(API_URL + `/teachers/${id}`);
};

const teacherService = {
  getTeachers,
  getTeachersDetails,
  updateTeacher,
  updateAvailableHours,
  createFullTeacher,
  deleteTeacher,
};

export default teacherService;
