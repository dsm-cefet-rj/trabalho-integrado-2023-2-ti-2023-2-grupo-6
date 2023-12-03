import axios from "axios";

const API_URL = "http://localhost:3300";

const getTeachers = async () => {
  return await axios.get(API_URL + `/teachers`);
};

const getTeachersDetails = async (id) => {
  return await axios.get(API_URL + `/teachers/${id}`);
};

const updateTeacher = async (id, teacher) => {
  return await axios.patch(API_URL + `/teachers/${id}`, teacher);
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

const updateAvailableHours = async (id, newAvailability) => {
  const response = await axios.get(API_URL + `/teachers/${id}`);

  if (response.data) {
    const teacherData = {
      ...response.data,
    };

    if (!teacherData.availableHours.includes(newAvailability)) {
      teacherData.availableHours.push(newAvailability);
      await updateTeacher(id, teacherData);
    } else {
      throw new Error("Horário já existe na lista de disponibilidade.");
    }
  }
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
  updateTeacherDetails,
  updateAvailableHours,
  createFullTeacher,
  deleteTeacher,
};

export default teacherService;
