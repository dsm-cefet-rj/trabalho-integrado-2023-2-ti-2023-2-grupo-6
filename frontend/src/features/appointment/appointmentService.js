import axios from "axios";

const API_URL = "http://localhost:3300";

const getAppointments = async () => {
  return await axios.get(
    API_URL +
    `/appointments`
  );
};

const createAppointment = async (teacherId, schedule, studentId) => {
  return await axios.post(API_URL + `/appointments/${teacherId}/${studentId}`, { schedule });
};


const appointmentService = {
  getAppointments,
  createAppointment,

};

export default appointmentService;
