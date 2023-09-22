import axios from "axios";

const API_URL = "http://localhost:3000";

const getStudentAppointments = async (id) => {
  return await axios.get(
    API_URL +
      `/appointments?userId=${id}&_expand=teachers&_expand=user&_expand=location`
  );
};

const getTeacherAppointments = async (id) => {
  return await axios.get(
    API_URL + `/appointments?teacherId=${id}&_expand=teachers&_expand=location`
  );
};

const createAppointment = async (appointment) => {
  return await axios.post(API_URL + "/appointments", appointment);
};

const deleteAppointment = async (id, token) => {
  return await axios.delete(API_URL + `/appointments/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const updateAppointment = async (id, appointment) => {
  return await axios.put(API_URL + `/appointments/${id}`, appointment);
};

const appointmentService = {
  getStudentAppointments,
  getTeacherAppointments,
  createAppointment,
  deleteAppointment,
  updateAppointment,
};

export default appointmentService;
