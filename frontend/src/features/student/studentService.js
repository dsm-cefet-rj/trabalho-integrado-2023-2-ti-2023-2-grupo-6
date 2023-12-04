import axios from "axios";

const API_URL = "http://localhost:3300";

const getStudents = async () => {
  return await axios.get(API_URL + `/students`);
};

const getStudentsDetails = async (id) => {
  return await axios.get(API_URL + `/students/${id}`);
};

export const createStudent = async (student) => {
  return await axios.post(API_URL + `/students`, student);
};

const studentService = {
  getStudents,
  getStudentsDetails,
  createStudent,
};

export default studentService;
