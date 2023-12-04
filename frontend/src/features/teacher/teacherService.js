import axios from "axios";

const API_URL = "http://localhost:3300";

const getTeachers = async () => {
  return await axios.get(API_URL + `/teachers`);
};

const getTeachersDetails = async (id) => {
  return await axios.get(API_URL + `/teachers/${id}`);
};

const updateTeacherDetails = async (teacher) => {
  const { id, specialization, resume, description } = teacher;

  if (!id) {
    throw new Error("ID do professor não especificado.");
  }

  const updatedTeacher = {
    specialization,
    resume,
    description,
  };

  return await axios.patch(API_URL + `/teachers/${id}`, updatedTeacher);
};

export const createTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers`, teacher);
};

const updateAvailableHours = {
  setAvailableHour: async (teacherId, schedule) => {
    try {
      const response = await axios.post(`${API_URL}/teachers/availablehours/${teacherId}`, { schedule });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.msg || 'Erro ao definir horário disponível');
    }
  },

  deleteAvailableHour: async (teacherId, schedule) => {
    try {
      const response = await axios.delete(`${API_URL}/teachers/availablehours/${teacherId}`, { data: { schedule } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.msg || 'Erro ao eliminar horário disponível');
    }
  },
};

const teacherService = {
  getTeachers,
  getTeachersDetails,
  updateTeacherDetails,
  updateAvailableHours,
};

export default teacherService;
