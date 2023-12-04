import axios from "axios";

const API_URL = "http://localhost:3300";

const getAppointments = async () => {
  return await axios.get(
    API_URL +
    `/appointments`
  );
};

const createAppointment = async (appointment) => {
  return await axios.post(API_URL + "/appointments", appointment);
};


const appointmentService = {
  getAppointments,
  createAppointment,
};

export default appointmentService;
