import axios from "axios";

const API_URL = "http://localhost:3300";

const getTeachers = async () => {
  return await axios.get(API_URL + `/teachers`);
};

const getTeachersDetails = async (id) => {
  return await axios.get(API_URL + `/teachers/${id}`);
};

const updateAvailableHours = async (teacherId, schedule) => {
  try {
    const response = await axios.post(`${API_URL}/teachers/availablehours/${teacherId}`, { schedule });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.msg || 'Erro ao definir horário disponível');
  }
};

const getAvailableHoursByTeacher = async (teacherId) => {
  return await axios.get(
    API_URL +
    `/availableHours/${teacherId}`
  );
};

const teacherService = {
  getTeachers,
  getTeachersDetails,
  updateAvailableHours,
  getAvailableHoursByTeacher,
};

export default teacherService;
